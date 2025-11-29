import { Gato } from '../model/models.js';
import { paintResult } from '../view/views.js';

export function getGatos(page) {
    console.log(page);
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_flWqXmexfMHpOORyFSHyjmcv8hrYLwDQ4VZSc48z4Dj7RPmuM6LNr0fOxeEUCLsa"
    });

    const requestOptions = {
        method: 'GET',
        headers: headers
    };

    return fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=${page}&limit=3`, requestOptions)
        .then(response => response.json()
            .then(result => {
                // return result.map(jsonCat => clientToCat(jsonCat))
                return result
                    .map(clientToCat)
                    .filter(gato => gato.raza && gato.raza.trim() !== '');
            })
            .catch(error => console.log('error', error))
        )
}

function clientToCat(result) {
    return new Gato(result.url, (result.breeds) ? result.breeds[0].name : '');
}

export function iniciarPaginacion() {

    let paginaActual = 0;

    const btnSig = document.querySelector('#siguiente');
    const btnAnt = document.querySelector('#anterior');

    btnAnt.setAttribute("disabled", true);

    function cargar() {
        getGatos(paginaActual).then(gatos => {
            paintResult(gatos);

            if (paginaActual === 0) {
                btnAnt.setAttribute("disabled", true);
            } else {
                btnAnt.removeAttribute("disabled");
            }
            if (gatos.length < 3) {
                btnSig.setAttribute("disabled", true);
            } else {
                btnSig.removeAttribute("disabled");
            }
        })
            .catch(error => console.log(error));
    }

    btnSig.addEventListener('click', () => {
        paginaActual++;
        cargar();
    });

    btnAnt.addEventListener('click', () => {
        if (paginaActual > 0) {
            paginaActual--;
            cargar();
        }
    });

    cargar();
}
