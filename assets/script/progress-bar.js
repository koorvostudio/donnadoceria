const scrollBar = document.getElementById('scrollBar');

export default function ProgressBar() {
    // Quanto o usuário já desceu
    const windowScroll = document.documentElement.scrollTop;

    // Altura total rolável (Altura total - Altura da tela visível)
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Cálculo da porcentagem
    const scrolled = (windowScroll / height) * 100;
    // Aplica a largura no CSS
    if (scrollBar) {
        scrollBar.style.width = scrolled + "%";
    }
}