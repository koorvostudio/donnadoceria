const openBtn = document.getElementById('open-btn');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const links = document.querySelectorAll('.menu-drawer a');

const toggleMenu = () => {
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
    openBtn.classList.toggle('active'); // Adiciona/remove a classe no botão para o efeito do X

    const isActive = drawer.classList.contains('active');
    document.body.style.overflow = isActive ? 'hidden' : 'auto';
};

openBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

links.forEach(link => {
    link.addEventListener('click', toggleMenu);
});


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

reveals.forEach((el, index) => {
    // Define um atributo data-delay com o índice do card
    el.dataset.delay = index;
    observer.observe(el);
});


// SEÇAO LOCALIZAÇÃO / MAPA
function changeMap(unidade, element) {
    const mapElement = document.getElementById('google-map');
    const buttons = document.querySelectorAll('.tab-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    // URLs oficiais de Embed com marcação (Pins)
    const maps = {
        vicente: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.1776869280425!2d-48.0447868!3d-15.794582100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a333772ca6f65%3A0x9ab053bc39cee2d5!2sDonna%20Doceria!5e0!3m2!1spt-BR!2sbr!4v1774361958252!5m2!1spt-BR!2sbr",
        jk: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.889864224218!2d-48.09385100000001!3d-15.809760299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bccc77f7d7197%3A0xc44eda07a6e73937!2sJK%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1774362051071!5m2!1spt-BR!2sbr"
    };

    mapElement.src = maps[unidade];
}