const scrollBar = document.getElementById('scrollBar');

// 1. CACHE DAS DIMENSÕES (Calculamos apenas quando necessário)
let totalScrollableHeight = 0;

/**
 * Função para calcular a altura total rolável.
 * Deve ser chamada no carregamento e no evento de 'resize'.
 */
export function CalculateScrollHeight() {
    totalScrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
}

// Calcula pela primeira vez assim que o script é carregado
CalculateScrollHeight();

/**
 * Função que manipula a barra de progresso do header (Otimizada)
 */
export default function ProgressBar() {
    // Se não houver barra ou não houver rolagem, não faz nada
    if (!scrollBar || totalScrollableHeight === 0) return;

    // Apenas LÊ a posição atual (Rápido)
    const windowScroll = document.documentElement.scrollTop;

    // Calcula a proporção (de 0 a 1) em vez de porcentagem
    const scrollProportion = windowScroll / totalScrollableHeight;

    // ESCREVE usando CSS Transform (Processado pela GPU, zero reflow)
    scrollBar.style.transform = `scaleX(${scrollProportion})`;
}