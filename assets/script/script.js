import { FloatingWhatsAppButton, ShowOnApproachWhatsAppButton, ShowOrHideWhatsAppButton } from "./floating-button.js";
import Header, { RedefineMenu } from "./header.js";
import ChangeMap from "./map.js";
import ProgressBar from "./progress-bar.js";
import Reveal from "./reveal.js";

Header();
ChangeMap();
Reveal();
ProgressBar();
FloatingWhatsAppButton();

window.addEventListener("scroll", () => {
    ProgressBar();
    ShowOrHideWhatsAppButton();
});

document.addEventListener('mousemove', (e) => {
    ShowOnApproachWhatsAppButton(e.clientX, e.clientY);
});

window.addEventListener("resize", () => {
    RedefineMenu();
});