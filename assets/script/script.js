import Header from "./header.js";
import ChangeMap from "./map.js";
import ProgressBar from "./progress-bar.js";
import Reveal from "./reveal.js";

Header();
ChangeMap();
Reveal();
ProgressBar();

window.addEventListener("scroll", () => {
    ProgressBar();
});