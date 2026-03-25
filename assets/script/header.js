const openBtn = document.getElementById('open-btn');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const links = document.querySelectorAll('.menu-drawer a');


const toggleMenu = () => {
    if (window.innerWidth <= 992) {
        drawer.classList.toggle('active');
        overlay.classList.toggle('active');
        openBtn.classList.toggle('active'); // Adiciona/remove a classe no botão para o efeito do X

        const isActive = drawer.classList.contains('active');
        document.body.style.overflow = isActive ? 'hidden' : 'auto';
    }
};

export const RedefineMenu = () => {
    if (window.innerWidth > 992) {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        openBtn.classList.remove('active');

        document.body.style.overflow = "auto";
    }
};

export default function Header() {
    openBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', e => e.target.classList.contains("menu-overlay") && toggleMenu());

    links.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}