// Dados dos modais para a maquete
const maqueteData = {
    dutoviario: {
        name: 'Dutoviário',
        color: '#000000',
        icon: '🏭',
        description: 'Sistema de tubulações para transporte de petróleo, gás natural e derivados.',
        stats: '1,5% da matriz brasileira'
    },
    ferroviario: {
        name: 'Ferroviário',
        color: '#8B4513',
        icon: '🚂',
        description: 'Transporte sobre trilhos para commodities e grandes volumes.',
        stats: '20% da matriz brasileira'
    },
    hidroviario: {
        name: 'Hidroviário',
        color: '#0066CC',
        icon: '🚢',
        description: 'Transporte aquático por rios, lagos e oceanos.',
        stats: '13% da matriz brasileira'
    },
    rodoviario: {
        name: 'Rodoviário',
        color: '#808080',
        icon: '🚛',
        description: 'Transporte por estradas e rodovias - modal dominante.',
        stats: '65% da matriz brasileira'
    },
    aereo: {
        name: 'Aéreo',
        color: '#CC0000',
        icon: '✈️',
        description: 'Transporte aéreo para cargas de alto valor e passageiros.',
        stats: '0,5% da matriz brasileira'
    }
};

class MaqueteController {
    constructor() {
        this.selectedModal = null;
        this.bindEvents();
        this.initializeHotspots();
    }

    bindEvents() {
        // Event listeners para hotspots
        document.querySelectorAll('.maquete-hotspot').forEach(hotspot => {
            hotspot.addEventListener('click', (e) => {
                const modalType = e.target.getAttribute('data-modal');
                this.highlightModal(modalType);
            });

            // Efeito hover nos hotspots
            hotspot.addEventListener('mouseenter', (e) => {
                e.target.style.transform = 'scale(1.3)';
                e.target.style.boxShadow = '0 0 20px rgba(255,255,255,0.8)';
            });

            hotspot.addEventListener('mouseleave', (e) => {
                if (e.target.getAttribute('data-modal') !== this.selectedModal) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                }
            });
        });

        // Event listeners para controles da maquete
        document.querySelectorAll('.maquete-control').forEach(control => {
            control.addEventListener('click', (e) => {
                const modalType = e.target.closest('.maquete-control').getAttribute('data-modal');
                this.highlightModal(modalType);
            });
        });

        // Event listener para esconder overlay inicial
        document.getElementById('maquete-viewer').addEventListener('click', (e) => {
            if (e.target.closest('.maquete-hotspot')) return;
            
            const overlay = document.getElementById('maquete-overlay');
            if (overlay.style.display !== 'none') {
                overlay.style.display = 'none';
            }
        });
    }

    initializeHotspots() {
        // Adicionar pulsação aos hotspots para chamar atenção
        document.querySelectorAll('.maquete-hotspot').forEach(hotspot => {
            setInterval(() => {
                if (hotspot.getAttribute('data-modal') !== this.selectedModal) {
                    hotspot.style.animation = 'pulse 2s ease-in-out';
                    setTimeout(() => {
                        hotspot.style.animation = '';
                    }, 2000);
                }
            }, 5000);
        });
    }

    highlightModal(modalType) {
        this.selectedModal = modalType;
        const modalData = maqueteData[modalType];
        
        if (!modalData) return;

        // Ocultar overlay inicial
        document.getElementById('maquete-overlay').style.display = 'none';

        // Resetar todos os hotspots
        document.querySelectorAll('.maquete-hotspot').forEach(hotspot => {
            hotspot.style.transform = 'scale(1)';
            hotspot.style.boxShadow = 'none';
            hotspot.style.zIndex = '10';
        });

        // Destacar hotspot selecionado
        const selectedHotspot = document.querySelector(`[data-modal="${modalType}"]`);
        if (selectedHotspot && selectedHotspot.classList.contains('maquete-hotspot')) {
            selectedHotspot.style.transform = 'scale(1.5)';
            selectedHotspot.style.boxShadow = '0 0 25px rgba(255,255,255,1)';
            selectedHotspot.style.zIndex = '20';
        }

        // Mostrar informações do modal
        this.showModalInfo(modalData, modalType);

        // Destacar controle correspondente
        document.querySelectorAll('.maquete-control').forEach(control => {
            control.style.opacity = '0.6';
        });
        
        const selectedControl = document.querySelector(`.maquete-control[data-modal="${modalType}"]`);
        if (selectedControl) {
            selectedControl.style.opacity = '1';
            selectedControl.style.transform = 'scale(1.05)';
            setTimeout(() => {
                selectedControl.style.transform = 'scale(1)';
            }, 300);
        }
    }

    showModalInfo(modalData, modalType) {
        const infoPanel = document.getElementById('modal-info-panel');
        const iconEl = document.getElementById('info-modal-icon');
        const nameEl = document.getElementById('info-modal-name');
        const descEl = document.getElementById('info-modal-description');
        const statsEl = document.getElementById('info-modal-stats');
        const detailBtn = document.getElementById('info-detail-btn');
        const quizBtn = document.getElementById('info-quiz-btn');

        // Atualizar conteúdo
        iconEl.style.backgroundColor = modalData.color;
        iconEl.innerHTML = `<i class="fas fa-${this.getIconClass(modalType)}" style="color: white;"></i>`;
        nameEl.textContent = `Modal ${modalData.name}`;
        descEl.textContent = modalData.description;
        statsEl.textContent = modalData.stats;

        // Configurar botões
        detailBtn.onclick = () => window.location.href = `${modalType}.html`;
        quizBtn.onclick = () => window.location.href = `quiz.html`;

        // Mostrar painel com animação
        infoPanel.style.display = 'block';
        infoPanel.classList.add('fade-in');
    }

    getIconClass(modalType) {
        const iconMap = {
            dutoviario: 'industry',
            ferroviario: 'train',
            hidroviario: 'ship',
            rodoviario: 'truck',
            aereo: 'plane'
        };
        return iconMap[modalType] || 'circle';
    }

    reset() {
        this.selectedModal = null;
        
        // Resetar todos os hotspots
        document.querySelectorAll('.maquete-hotspot').forEach(hotspot => {
            hotspot.style.transform = 'scale(1)';
            hotspot.style.boxShadow = 'none';
            hotspot.style.zIndex = '10';
        });

        // Resetar controles
        document.querySelectorAll('.maquete-control').forEach(control => {
            control.style.opacity = '1';
        });

        // Ocultar painel de informações
        document.getElementById('modal-info-panel').style.display = 'none';
    }
}

// Função global para fechar informações
function closeMaqueteInfo() {
    if (window.maqueteController) {
        window.maqueteController.reset();
    }
}

// Adicionar efeitos visuais para pulsação
const pulseStyle = `
@keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
}

.maquete-hotspot {
    transition: all 0.3s ease;
}

.maquete-hotspot:hover {
    cursor: pointer;
}

.maquete-control {
    transition: all 0.3s ease;
}

.fade-in {
    animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// Adicionar CSS das animações
if (!document.getElementById('maquete-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'maquete-styles';
    styleSheet.textContent = pulseStyle;
    document.head.appendChild(styleSheet);
}

// Inicializar controlador da maquete
document.addEventListener('DOMContentLoaded', () => {
    window.maqueteController = new MaqueteController();
    console.log('Maquete 3D Interativa carregada com sucesso!');
});

// Adicionar instruções de uso
setTimeout(() => {
    const overlay = document.getElementById('maquete-overlay');
    if (overlay && overlay.style.display !== 'none') {
        const instruction = document.createElement('div');
        instruction.style.cssText = `
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 14px;
            animation: pulse 2s ease-in-out infinite;
        `;
        instruction.textContent = '💡 Dica: Clique nos pontos coloridos!';
        overlay.appendChild(instruction);
    }
}, 3000);