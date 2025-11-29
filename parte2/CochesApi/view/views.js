import { buscar, search } from "../service/services.js";
import { findByName, buscar } from "../service/services.js";

export function searchCoche(coches) {
    const app = document.querySelector('#app');
    const btnSearch = document.createElement("BUTTON")
    let inputName = document.createElement("INPUT");
    btnSearch.textContent = "Buscar";
    app.innerHTML = '';

    /*inputName.addEventListener('input', function(){
        console.log(this.value)
    })
    inputName.addEventListener('input', ()=> {
        const valor = document.querySelector("input").value
        console.log(valor)
    })*/

    //NOMBRE
    const labelNombre = document.createElement('LABEL');
    labelNombre.innerText ='Nombre';
    app.appendChild(labelNombre);

    //POTENCIA
    const inputMin = document.createElement('INPUT');
    inputMin.innerText ='Min HP';
    app.appendChild(inputMin);

    const inputMax = document.createElement('INPUT');
    inputMax.innerText ='Max HP';
    app.appendChild(inputMax);

    btnSearch.addEventListener('click', function () {
        const cochesFiltrados =  buscar(coches, inputNombre.name, inputMin.value, inputMax.value)
        paintListCar(cochesFiltrados)
    });

    app.appendChild(btnSearch);


    app.appendChild(inputName);

    // app.appendChild(inputName);

    // let result = '<ul>';
    // for(const coche of coches) {
    //     result += `<h3> Nombre: ${coche.name} </h3>`;
    //     result += `<li> Caballos: ${coche.horsePower} </li>`;
    //     result += `<li> Año: ${coche.year} </li>`;
    // }
    // result += '</ul>';

    // app.innerHTML += result;

}

function paintListCar(coches) {
    const app = document.querySelector('#app');
    const lista = document.createElement('DIV');
    app.appendChild(lista);
    lista.innerHTML = '';

    const ul = document.createElement("UL");
    for (const coche of coches) {
        const li = document.createElement("LI");
        li.innerText += ` Nombre: ${coche.name} - ${coche.horsePower} CV - ( Año: ${coche.year} )`;
        ul.appendChild(li);

    }

    lista.appendChild(ul);
}

