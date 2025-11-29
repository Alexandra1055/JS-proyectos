import { Usuario } from "../model/models-Usuario.js";
import { Transporte } from "../model/models-Transporte.js";

export class UsuarioTransporteService {

    async findAll() {

        const resultFetch = await fetch("https://theteacher.codiblau.com/public/exercicis/other/usuaris/list")
        const usuaris = await resultFetch.json();
        return usuaris.map( u => this.#clientToUsuari(u));

    }

    async getTransportById(id) {
        const promise= [];
        const transportFetch = await fetch("https://theteacher.codiblau.com/public/exercicis/other/usuaris/transport",
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: 'idtransport ' + id
            }
        )
        .then(x => x.text())
                promises.push(promise);

            }
            //importante, los await no estan en los bucles
            const resultados = await Promise.all(promises);
        const transport = await transportFetch.json();
        return this.#clientToTransport(transport);
    }

    #clientToUsuari(json) {
        const transporte = this.getTransportById(json.transport_idtransport);

        return new Usuario(
            json.username,
            json.nom,
            json.cognom1 + ' ' + json.cognom2,
            transporte
        );
    }

    #clientToTransport(json) {
        return new Transporte(
            json.id,
            json.nom,
            json.url
        );
    }
}
