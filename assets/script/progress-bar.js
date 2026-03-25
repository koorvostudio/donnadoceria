const scrollBar = document.getElementById('scrollBar');

// Quanto o usuário já desceu
const windowScroll = document.documentElement.scrollTop;

// Altura total rolável (Altura total - Altura da tela visível)
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

// Cálculo da porcentagem
const scrolled = (windowScroll / height) * 100;

export default function ProgressBar() {
    // Aplica a largura no CSS
    if (scrollBar) {
        scrollBar.style.width = scrolled + "%";
    }
}