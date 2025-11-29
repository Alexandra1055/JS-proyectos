import { Colors } from "../model/models-colors.js";

export function getColors(min, max) {
   
    return fetch("https://theteacher.codiblau.com/public/exercicis/other/color?min=" + min + "&max=" + max)
        .then(r => r.json())
        .then(data => {
            return new Colors(
                data.background,
                data.color,
                data.width,
                data.height
            );
        });
}
