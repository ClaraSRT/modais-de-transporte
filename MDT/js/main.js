// Navegação mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Redirecionamento para páginas de modais
document.querySelectorAll('.modal-card[data-modal]').forEach(card => {
    card.addEventListener('click', function() {
        const modal = this.getAttribute('data-modal');
        window.location.href = `${modal}.html`;
    });
});

// Redirecionamento para maquete
const maqueteCard = document.querySelector('.maquete-card');
if (maqueteCard && !maqueteCard.hasAttribute('data-modal')) {
    maqueteCard.addEventListener('click', function() {
        window.location.href = 'maquete.html';
    });
}

// Animações ao scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.modal-card, .feature-item, .stat-item, .content-section').forEach(el => {
    observer.observe(el);
});

// Adicionar estilo ao modal
const modalStyle = `
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
}

.modal-content {
    background: white;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
    max-height: 90%;
    overflow-y: auto;
}
`;

// Adicionar CSS do modal ao head
if (!document.getElementById('modal-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'modal-styles';
    styleSheet.textContent = modalStyle;
    document.head.appendChild(styleSheet);
}

console.log('Site de Modais de Transporte carregado com sucesso!');