export function paintResult(persona) {
    const nombre= persona.nombre;
    const apellidos= persona.apellidos;
    const email= persona.email;
    const genero= persona.genero;

    console.log(nombre,apellidos,email,genero);

    let genereMap = "Femenino";
    let isFemenino = true;
    if (genero === "male") {
        genereMap = "Masculino"
        isFemenino = false;
    }

    document.querySelector('#app p:nth-child(1) span').innerHTML= nombre;
    document.querySelector('#app p:nth-child(2) span').innerHTML = apellidos;
    document.querySelector('#app p:nth-child(3) span').innerHTML = email;
    document.querySelector('#app p:nth-child(4) span').innerHTML = genereMap;

    if (isFemenino) {
        document.querySelector('#app p:nth-child(4) span').style.color = "orange";
    }
    document.querySelector('#app p:nth-child(4) span').style.color = "yellow";


}
