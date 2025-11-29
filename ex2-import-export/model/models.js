export function Persona(nombre, apellidos, email, genero, dni){
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.email=email;
    this.genero=genero;
    this.dni=dni;
    this.nombreCompleto= function(){
        return this.nombre + " " + this.apellidos;
    }
}