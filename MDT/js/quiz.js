// Dados dos quizzes
const quizData = {
    dutoviario: {
        name: 'Dutoviário',
        color: '#000000',
        icon: '🏭',
        questions: [
            {
                question: 'O que é transporte dutoviário?',
                options: [
                    'Transporte feito por navios',
                    'Transporte feito por tubos especiais chamados dutos',
                    'Transporte feito por caminhões',
                    'Transporte feito por aviões'
                ],
                correct: 1
            },
            {
                question: 'Quais produtos são transportados pelos dutos?',
                options: [
                    'Apenas alimentos',
                    'Somente roupas e calçados',
                    'Minério, petróleo e derivados, álcool, gás e produtos químicos',
                    'Apenas eletrônicos'
                ],
                correct: 2
            },
            {
                question: 'Qual é o nome do duto usado para transportar gases?',
                options: [
                    'Mineroduto',
                    'Gasoduto',
                    'Oleoduto',
                    'Poliduto'
                ],
                correct: 1
            },
            {
                question: 'Os dutos usados para transportar petróleo e seus derivados recebem o nome de:',
                options: [
                    'Oleodutos',
                    'Gasodutos',
                    'Minerodutos',
                    'Polidutos'
                ],
                correct: 0
            },
            {
                question: 'Dutos instalados abaixo da terra são chamados de:',
                options: [
                    'Submarinos',
                    'Aéreos',
                    'Subterrâneos',
                    'Aparentes'
                ],
                correct: 2
            }
        ]
    },
    ferroviario: {
        name: 'Ferroviário',
        color: '#8B4513',
        icon: '🚂',
        questions: [
            {
                question: 'O transporte ferroviário pertence a qual grupo?',
                options: [
                    'Transporte aéreo',
                    'Transporte aquaviário',
                    'Transporte terrestre',
                    'Transporte rodoviário'
                ],
                correct: 2
            },
            {
                question: 'Qual é o principal uso do transporte ferroviário no Brasil?',
                options: [
                    'Transporte de passageiros de longa distância',
                    'Transporte de minérios e produtos agrícolas',
                    'Turismo ferroviário',
                    'Transporte urbano'
                ],
                correct: 1
            },
            {
                question: 'Qual das alternativas abaixo NÃO é uma vantagem do transporte ferroviário?',
                options: [
                    'Custo baixo',
                    'Baixo índice de roubos',
                    'Percorre longas distâncias',
                    'Grande número de linhas férreas disponíveis no Brasil'
                ],
                correct: 3
            },
            {
                question: 'Qual foi o produto responsável pela expansão inicial das ferrovias no Brasil no século XIX?',
                options: [
                    'Café',
                    'Soja',
                    'Minério de ferro',
                    'Carvão'
                ],
                correct: 0
            },
            {
                question: 'Quantos quilômetros, aproximadamente, possui a malha ferroviária brasileira?',
                options: [
                    '10 mil km',
                    '20 mil km',
                    '30 mil km',
                    '50 mil km'
                ],
                correct: 2
            }
        ]
    },
    hidroviario: {
        name: 'Hidroviário',
        color: '#0066CC',
        icon: '🚢',
        questions: [
            {
                question: 'O que caracteriza o modal hidroviário (ou aquaviário)?',
                options: [
                    'Transporte de cargas apenas em rodovias',
                    'Transporte aéreo de passageiros e mercadorias',
                    'Transporte realizado em rios, lagos, mares e oceanos',
                    'Transporte rápido de pequenas encomendas'
                ],
                correct: 2
            },
            {
                question: 'Quais são os dois principais tipos de transporte hidroviário?',
                options: [
                    'Ferroviário e marítimo',
                    'Rodoviário e aéreo',
                    'Marítimo e fluvial',
                    'Urbano e intermunicipal'
                ],
                correct: 2
            },
            {
                question: 'Qual das alternativas corresponde a uma vantagem do modal hidroviário?',
                options: [
                    'Maior velocidade que o transporte aéreo',
                    'Alto custo por tonelada transportada',
                    'Alta capacidade de carga com baixo custo por quilômetro',
                    'Independência total de infraestrutura'
                ],
                correct: 2
            },
            {
                question: 'Uma das principais desvantagens do transporte hidroviário é:',
                options: [
                    'Grande emissão de poluentes',
                    'Velocidade reduzida em comparação a outros modais',
                    'Baixa capacidade de carga',
                    'Não ser utilizado no comércio exterior'
                ],
                correct: 1
            },
            {
                question: 'Qual hidrovia está entre os exemplos importantes no Brasil?',
                options: [
                    'Hidrovia do Tietê-Paraná',
                    'Hidrovia do Amazonas-Solimões',
                    'Hidrovia do Pantanal',
                    'Hidrovia do Tocantins-Pindaré'
                ],
                correct: 0
            }
        ]
    },
    rodoviario: {
        name: 'Rodoviário',
        color: '#808080',
        icon: '🚛',
        questions: [
            {
                question: 'O que caracteriza o transporte rodoviário?',
                options: [
                    'A utilização de navios e balsas',
                    'O uso de ferrovias para transportar cargas',
                    'A movimentação em estradas, ruas e rodovias com veículos',
                    'O transporte aéreo de passageiros e mercadorias'
                ],
                correct: 2
            },
            {
                question: 'Qual é a principal vantagem do transporte rodoviário?',
                options: [
                    'Capacidade ilimitada de carga',
                    'Custo mais baixo que todos os outros modais',
                    'Flexibilidade e entrega porta a porta',
                    'Baixo impacto ambiental'
                ],
                correct: 2
            },
            {
                question: 'Como é chamada a carga em que várias encomendas de clientes diferentes estão em um mesmo veículo?',
                options: [
                    'Carga lotação',
                    'Carga exclusiva',
                    'Carga fracionada',
                    'Carga prioritária'
                ],
                correct: 2
            },
            {
                question: 'Quais são algumas desvantagens do transporte rodoviário?',
                options: [
                    'Baixa frequência e pouca flexibilidade',
                    'Alto custo com combustível, acidentes e poluição',
                    'Falta de integração com outros modais',
                    'Limitação apenas para transporte de passageiros'
                ],
                correct: 1
            },
            {
                question: 'No Brasil, qual é a importância do transporte rodoviário?',
                options: [
                    'Representa menos de 20% da movimentação de cargas',
                    'É pouco utilizado devido às ferrovias',
                    'Movimenta cerca de 60% a 65% das mercadorias do país',
                    'É usado apenas em regiões rurais e pequenas cidades'
                ],
                correct: 2
            }
        ]
    },
    aereo: {
        name: 'Aéreo',
        color: '#CC0000',
        icon: '✈️',
        questions: [
            {
                question: 'O que significa o termo "modal" no contexto dos transportes?',
                options: [
                    'Meio ambiente',
                    'Modalidade de transporte',
                    'Velocidade do transporte',
                    'Tipo de carga transportada'
                ],
                correct: 1
            },
            {
                question: 'Qual o principal meio de transporte utilizado no modal aeroviário?',
                options: [
                    'Barcos',
                    'Caminhões',
                    'Aviões e helicópteros',
                    'Trens'
                ],
                correct: 2
            },
            {
                question: 'Qual é uma das maiores vantagens do modal aeroviário?',
                options: [
                    'Baixo custo de transporte',
                    'Alta capacidade de carga',
                    'Rapidez no deslocamento de pessoas e mercadorias',
                    'Funciona apenas para curtas distâncias'
                ],
                correct: 2
            },
            {
                question: 'O modal aeroviário é mais recomendado para transportar:',
                options: [
                    'Grandes volumes de cargas comuns',
                    'Mercadorias de alto valor agregado e pequenas encomendas urgentes',
                    'Cargas pesadas em longas distâncias',
                    'Produtos perecíveis em volumes grandes e baratos'
                ],
                correct: 1
            },
            {
                question: 'O modal aeroviário é caracterizado por ter:',
                options: [
                    'Baixa segurança e baixa pontualidade',
                    'Agilidade, pontualidade e segurança',
                    'Transporte lento e barato',
                    'Restrição para transporte de passageiros'
                ],
                correct: 1
            }
        ]
    }
};

// Gerenciador de estado do quiz
class QuizManager {
    constructor() {
        this.scores = this.loadScores();
    }

    loadScores() {
        const stored = localStorage.getItem('quiz-scores');
        const defaultScores = {
            dutoviario: { score: 0, completed: false },
            ferroviario: { score: 0, completed: false },
            hidroviario: { score: 0, completed: false },
            rodoviario: { score: 0, completed: false },
            aereo: { score: 0, completed: false }
        };
        return stored ? JSON.parse(stored) : defaultScores;
    }

    saveScores() {
        localStorage.setItem('quiz-scores', JSON.stringify(this.scores));
    }

    updateScore(modalType, score) {
        this.scores[modalType] = { score, completed: true };
        this.saveScores();
    }

    getTotalScore() {
        return Object.values(this.scores).reduce((sum, quiz) => sum + quiz.score, 0);
    }

    getCompletedCount() {
        return Object.values(this.scores).filter(quiz => quiz.completed).length;
    }

    getPrizesEarned() {
        return Object.values(this.scores).filter(quiz => quiz.completed && quiz.score >= 3).length;
    }

    isAllCompleted() {
        return Object.values(this.scores).every(quiz => quiz.completed);
    }

    updateUI() {
        // Atualizar estatísticas gerais
        const totalScoreEl = document.getElementById('total-score');
        const completedQuizzesEl = document.getElementById('completed-quizzes');
        const prizesEarnedEl = document.getElementById('prizes-earned');
        const totalCompletedEl = document.getElementById('total-completed');
        const totalProgressBarEl = document.getElementById('total-progress-bar');
        const completeChallengeBtn = document.getElementById('complete-challenge-btn');
        const prizeModal = document.getElementById('prize-modal');

        if (totalScoreEl) totalScoreEl.textContent = this.getTotalScore();
        if (completedQuizzesEl) completedQuizzesEl.textContent = this.getCompletedCount();
        if (prizesEarnedEl) prizesEarnedEl.textContent = this.getPrizesEarned();
        if (totalCompletedEl) totalCompletedEl.textContent = `${this.getCompletedCount()}/5`;
        if (totalProgressBarEl) {
            totalProgressBarEl.style.width = `${(this.getCompletedCount() / 5) * 100}%`;
        }

        // Atualizar progresso individual
        Object.keys(this.scores).forEach(modalType => {
            const progressEl = document.getElementById(`progress-${modalType}`);
            const progressBarEl = document.getElementById(`progress-bar-${modalType}`);

            if (progressEl) {
                const quiz = this.scores[modalType];
                progressEl.textContent = quiz.completed ? `${quiz.score}/5` : '0/5';
            }

            if (progressBarEl) {
                const quiz = this.scores[modalType];
                const progress = quiz.completed ? (quiz.score / 5) * 100 : 0;
                progressBarEl.style.width = `${progress}%`;
            }
        });

        // Atualizar botão do desafio completo
        if (completeChallengeBtn) {
            if (this.isAllCompleted()) {
                completeChallengeBtn.disabled = false;
                completeChallengeBtn.style.opacity = '1';
                completeChallengeBtn.style.cursor = 'pointer';
            } else {
                completeChallengeBtn.disabled = true;
                completeChallengeBtn.style.opacity = '0.5';
                completeChallengeBtn.style.cursor = 'not-allowed';
            }
        }
    }

    showPrizeModal(message) {
        document.getElementById('prize-message').innerHTML = message.replace(/\n/g, '<br>');
        document.getElementById('prize-modal').style.display = 'flex';
    }

    showCompleteChallengePrize() {
        const message = `🏆 DESAFIO COMPLETO! 🏆
Você completou todos os 5 quiz dos modais de transporte!
Pontuação total: ${this.getTotalScore()}/25
Parabéns! Você é um expert em modais de transporte!`;

        this.showPrizeModal(message);
    }
}

// Inicializar o quiz manager quando a página carregar
let quizManager;
document.addEventListener('DOMContentLoaded', () => {
    quizManager = new QuizManager();
    quizManager.updateUI();

    const completeChallengeBtn = document.getElementById('complete-challenge-btn');
    if (completeChallengeBtn) {
        completeChallengeBtn.addEventListener('click', () => {
            if (quizManager.isAllCompleted()) {
                quizManager.showCompleteChallengePrize();
            }
        });
    }
});

// Função para fechar modal de prêmio
function closePrizeModal() {
    document.getElementById('prize-modal').style.display = 'none';
}

console.log('Sistema de Quiz carregado com sucesso!');