export class Usuario{
    #username;
    #nombre;
    #apellidos;
    #transporte;
    constructor(username,nombre,apellidos,transporte){
        this.#username=username;
        this.#nombre=nombre;
        this.#apellidos=apellidos;
        this.#transporte=transporte;
    }

    get username(){ return this.#username; }
    set username(value){ this.#username=value; }

    get nombre(){ return this.#nombre; }
    set nombre(value){ this.#nombre=value; }
    
    get apellidos(){ return this.#apellidos; }
    set apellidos(value){ this.#apellidos=value; }
    
    get transporte(){ return this.#transporte; }
    set transporte(value){ this.#transporte=value; }

}