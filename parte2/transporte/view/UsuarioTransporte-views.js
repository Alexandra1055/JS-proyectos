export class UsuarioTransporteView {
    pintarUsuarios(usuarios) {
        const app = document.querySelector("#app");
        const table = document.createElement('TABLE');


        for (const usuario of usuarios) {
            const trHeader = document.createElement('TR');
            const tdUsername = document.createElement('TD');
            tdUsername.innerText = "Nombre de usuario";

            const tdApellidos = document.createElement('TD');
            tdApellidos.innerText = "Apellidos";

            const tdTransporte = document.createElement('TD');
            tdTransporte.innerText="Transporte";

            table.appendChild(trHeader)
            trHeader.appendChild(tdUsername);
            trHeader.appendChild(tdApellidos);
            trHeader.appendChild(tdTransporte);
        }

        app.appendChild(table);
    }
}