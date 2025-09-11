<?php
require_once 'config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit();
}

try {
    $pdo = getConnection();
    if (!$pdo) {
        http_response_code(500);
        echo json_encode(['error' => 'Erro na conexão com o banco']);
        exit();
    }
    
    $modalType = $_GET['modal'] ?? null;
    
    if ($modalType) {
        // Estatísticas de um modal específico
        $valid_modals = ['dutoviario', 'ferroviario', 'hidroviario', 'rodoviario', 'aereo'];
        if (!in_array($modalType, $valid_modals)) {
            http_response_code(400);
            echo json_encode(['error' => 'Tipo de modal inválido']);
            exit();
        }
        
        $stmt = $pdo->prepare("
            SELECT 
                modal_type,
                COUNT(*) as total_attempts,
                AVG(score) as average_score,
                MAX(score) as best_score,
                MIN(score) as worst_score,
                COUNT(CASE WHEN score = 5 THEN 1 END) as perfect_scores,
                COUNT(CASE WHEN score >= 3 THEN 1 END) as good_scores
            FROM quiz_results 
            WHERE modal_type = ? AND completed = 1
            GROUP BY modal_type
        ");
        $stmt->execute([$modalType]);
        $result = $stmt->fetch();
        
        if (!$result) {
            echo json_encode([
                'modal_type' => $modalType,
                'total_attempts' => 0,
                'average_score' => 0,
                'best_score' => 0,
                'worst_score' => 0,
                'perfect_scores' => 0,
                'good_scores' => 0
            ]);
        } else {
            echo json_encode($result);
        }
        
    } else {
        // Estatísticas gerais de todos os modais
        $stmt = $pdo->prepare("
            SELECT 
                modal_type,
                COUNT(*) as total_attempts,
                AVG(score) as average_score,
                MAX(score) as best_score,
                COUNT(CASE WHEN score >= 3 THEN 1 END) as good_scores
            FROM quiz_results 
            WHERE completed = 1
            GROUP BY modal_type
            ORDER BY modal_type
        ");
        $stmt->execute();
        $results = $stmt->fetchAll();
        
        // Estatísticas globais
        $globalStmt = $pdo->prepare("
            SELECT 
                COUNT(*) as total_global_attempts,
                AVG(score) as global_average_score,
                COUNT(DISTINCT ip_address) as unique_users,
                COUNT(CASE WHEN score = 5 THEN 1 END) as total_perfect_scores
            FROM quiz_results 
            WHERE completed = 1
        ");
        $globalStmt->execute();
        $globalStats = $globalStmt->fetch();
        
        echo json_encode([
            'by_modal' => $results,
            'global' => $globalStats
        ]);
    }

} catch (PDOException $e) {
    error_log("Erro ao buscar estatísticas: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Erro interno do servidor']);
}
?>