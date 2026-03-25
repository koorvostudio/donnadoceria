const mapElement = document.getElementById('google-map');
const buttons = document.querySelectorAll('.tab-btn');

export default function ChangeMap() {
    buttons.forEach((element, i, arr) => {
        element.addEventListener("click", () => {
            const location = element.dataset.location
            arr.forEach(btn => btn.classList.remove('active'));
            element.classList.add('active');

            // URLs oficiais de Embed com marcação (Pins)
            const maps = {
                vicente: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.1776869280425!2d-48.0447868!3d-15.794582100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a333772ca6f65%3A0x9ab053bc39cee2d5!2sDonna%20Doceria!5e0!3m2!1spt-BR!2sbr!4v1774361958252!5m2!1spt-BR!2sbr",
                jk: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.889864224218!2d-48.09385100000001!3d-15.809760299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bccc77f7d7197%3A0xc44eda07a6e73937!2sJK%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1774362051071!5m2!1spt-BR!2sbr"
            };

            mapElement.src = maps[location];
        })
    });
}