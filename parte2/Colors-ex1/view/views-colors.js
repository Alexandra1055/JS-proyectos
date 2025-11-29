import { getColors } from "../service/services-colors.js";

const min = 0;
const max = 200;

function catchColors(colors) {
    const body = document.querySelector("body");
    const rect = document.querySelector("#rectangulo");

    body.style.backgroundColor = "#" + colors.background;
    rect.style.backgroundColor = "#" + colors.color;
    rect.style.width = colors.width + "px";
    rect.style.height = colors.height + "px";
}

function findColors() {
    getColors(min, max)
        .then(colors => {
            catchColors(colors);
        });
}

export function botonColor() {
    document.addEventListener("DOMContentLoaded", () => {
        const app = document.querySelector("#app");
        const boton = document.createElement("button");
        boton.innerHTML = "coloreame";

        boton.addEventListener("click", findColors);
        app.appendChild(boton);


        findColors();
    });
}

