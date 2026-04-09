import { FloatingWhatsAppButton, ShowOnApproachWhatsAppButton, ShowOrHideWhatsAppButton } from "./floating-button.js";
import Header, { RedefineMenu } from "./header.js";
import ChangeMap from "./map.js";
// V MUDANÇA AQUI: Importamos a CalculateScrollHeight junto com o ProgressBar
import ProgressBar, { CalculateScrollHeight } from "./progress-bar.js"; 
import Reveal from "./reveal.js";

// --- 1. INICIALIZAÇÃO BASE ---
Header();
ChangeMap();
Reveal();
ProgressBar();
FloatingWhatsAppButton();


// --- 2. OTIMIZAÇÃO DE SCROLL (Throttle com requestAnimationFrame) ---
// Impede que a função seja chamada mais vezes do que a tela consegue desenhar (60fps)
let tickingScroll = false;

window.addEventListener("scroll", () => {
    if (!tickingScroll) {
        window.requestAnimationFrame(() => {
            ProgressBar();
            ShowOrHideWhatsAppButton();
            tickingScroll = false;
        });
        tickingScroll = true;
    }
});


// --- 3. OTIMIZAÇÃO DE MOUSEMOVE (Throttle) ---
// Mesma lógica do scroll: evita sobrecarga de cálculo de distância do mouse
let tickingMouse = false;

document.addEventListener('mousemove', (e) => {
    if (!tickingMouse) {
        window.requestAnimationFrame(() => {
            ShowOnApproachWhatsAppButton(e.clientX, e.clientY);
            tickingMouse = false;
        });
        tickingMouse = true;
    }
});


// --- 4. OTIMIZAÇÃO DE RESIZE (Debounce) ---
// O usuário só precisa redefinir o menu QUANDO PARAR de girar a tela/redimensionar.
// Esperamos 250ms de "silêncio" antes de recalcular.
let resizeTimeout;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        RedefineMenu();
        CalculateScrollHeight(); 
    }, 250); 
});