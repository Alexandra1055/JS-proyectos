export function paintResult(gatos){
    const lista = document.querySelector('#lista');


    let result = '<ul>';
    for(const gato of gatos) {
        result += `<li><img style="width:200px" src="${gato.url}"  alt="gato"> ${gato.raza} </li>`;
    }
    result += '</ul>';
    
    lista.innerHTML = result;
   
}

export function paintBtn(){
    const app = document.querySelector('#app');
    const divLista = document.createElement('div');
    divLista.id = 'lista';
    const divPag = document.createElement('DIV');
    const btnSig = document.createElement('BUTTON');
    const btnAnt = document.createElement('BUTTON');
    divPag.id="paginacion";
    btnSig.textContent="👉";
    btnAnt.textContent="👈";
    btnSig.id="siguiente";
    btnAnt.id="anterior";

    divPag.appendChild(btnAnt);
    divPag.appendChild(btnSig);
    app.appendChild(divLista);
    app.appendChild(divPag);

}