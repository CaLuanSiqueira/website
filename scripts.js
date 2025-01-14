// Aguarda até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Referência ao formulário de contato
    const form = document.querySelector('.contact-form');

    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o envio padrão do formulário
        alert('Obrigado por entrar em contato! Entraremos em breve.');
        form.reset(); // Limpa os campos do formulário após o envio
    });

    // Exemplo: Animação simples ao rolar a página
    const heroTitle = document.querySelector('.hero-title');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            heroTitle.style.transform = `translateY(${scrollY * 0.5}px)`;
        } else {
            heroTitle.style.transform = 'translateY(0)';
        }
    });
});
