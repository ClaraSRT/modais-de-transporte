<?php
require_once 'config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit();
}

// Ler dados JSON do corpo da requisição
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Dados inválidos']);
    exit();
}

// Validar campos obrigatórios
$required_fields = ['modalType', 'score', 'totalQuestions', 'completed'];
foreach ($required_fields as $field) {
    if (!isset($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Campo '$field' é obrigatório"]);
        exit();
    }
}

$modalType = $data['modalType'];
$score = intval($data['score']);
$totalQuestions = intval($data['totalQuestions']);
$completed = $data['completed'];

// Validar modal type
$valid_modals = ['dutoviario', 'ferroviario', 'hidroviario', 'rodoviario', 'aereo'];
if (!in_array($modalType, $valid_modals)) {
    http_response_code(400);
    echo json_encode(['error' => 'Tipo de modal inválido']);
    exit();
}

// Validar score
if ($score < 0 || $score > $totalQuestions) {
    http_response_code(400);
    echo json_encode(['error' => 'Pontuação inválida']);
    exit();
}

try {
    $pdo = getConnection();
    if (!$pdo) {
        http_response_code(500);
        echo json_encode(['error' => 'Erro na conexão com o banco']);
        exit();
    }
    
    // Inserir resultado do quiz
    $stmt = $pdo->prepare("
        INSERT INTO quiz_results (modal_type, score, total_questions, completed, ip_address, user_agent)
        VALUES (?, ?, ?, ?, ?, ?)
    ");
    
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
    
    $stmt->execute([
        $modalType,
        $score,
        $totalQuestions,
        $completed ? 1 : 0,
        $ip,
        $userAgent
    ]);
    
    $resultId = $pdo->lastInsertId();
    
    // Buscar estatísticas atualizadas do modal
    $statsStmt = $pdo->prepare("
        SELECT 
            COUNT(*) as total_attempts,
            AVG(score) as average_score,
            MAX(score) as best_score,
            COUNT(CASE WHEN score >= 3 THEN 1 END) as good_scores
        FROM quiz_results 
        WHERE modal_type = ? AND completed = 1
    ");
    $statsStmt->execute([$modalType]);
    $stats = $statsStmt->fetch();
    
    echo json_encode([
        'success' => true,
        'id' => $resultId,
        'message' => 'Resultado salvo com sucesso',
        'stats' => $stats
    ]);

} catch (PDOException $e) {
    error_log("Erro ao salvar resultado: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Erro interno do servidor']);
}
?>