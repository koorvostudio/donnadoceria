const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target); // Para de observar após aparecer (Salva bateria!)
        }
    });
}, {
    threshold: 0, 
    rootMargin: "0px 0px -20px 0px"
});

export default function Reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
        observer.observe(el);
    });
}