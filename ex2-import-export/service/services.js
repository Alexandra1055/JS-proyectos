/*
Esto solo es la promesa de que nos devolverá una persona
return Promise<Persona>
*/

import {Persona} from '../model/models.js';

export function getPersona() {
    return fetch("https://randomuser.me/api/")
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (result) {
            //respuesta = JSON de randomuser -> Persona
                return new Persona(
                    result.results[0].name.first,
                    result.results[0].name.last,
                    result.results[0].email,
                    result.results[0].gender,
                    'NO DNI'
                );
            }
        )
}