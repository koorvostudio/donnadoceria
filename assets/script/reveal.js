const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Adiciona um delay dinâmico para o efeito de cascata
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('active');
            }, delay * 200); // 200ms de delay entre cada card
        }
    });
}, {
    threshold: 0.1 // O card precisa estar 10% visível para animar
});

export default function Reveal() {
    reveals.forEach((el, index) => {
        // Define um atributo data-delay com o índice do card
        el.dataset.delay = index;
        observer.observe(el);
    });
}