class Persona{
    static contadorPersonas=0;
    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.idPersona=++Persona.contadorPersonas;
    }
    get getIdPersona(){
        return this.idPersona;
    }
    get getNombre(){
return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }
    get getApellido(){
        return this.apellido;
    }
    set setApellido(apellido){
    }
    get getEdad(){
        return this.edad;
    }
    set setEdad(edad){
        this.edad=edad;
    }
    toString(){
        return this.getIdPersona+", "+this.getNombre+", "+this.getApellido+", "+this.getEdad;
    }
}
let persona1=new Persona("Patricio","Dioquilima","22");
console.log(persona1.toString());
class Empleado extends Persona{
    static contadorEmpleado=0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this.idEmpleado=++Empleado.contadorEmpleado;
        this.sueldo=sueldo;
    }
    get getIdEmpleado(){
        return this.idEmpleado;
    }
    get getSueldo(){
        return this.sueldo;
    }
    set setSueldo(sueldo){
     this.sueldo=sueldo;
    }
    toString(){
        return super.toString()+", "+this.getSueldo+", "+this.getIdEmpleado;
    }
}
let empleado1=new Empleado("Dennis","Gubio","27",1200);
console.log(empleado1.toString());
class Cliente extends Persona{
    static contadorCliente=0;
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this.fechaRegistro=fechaRegistro;
        this.idCliente=++Cliente.contadorCliente;
    }
    get getIdCliente(){
        return this.idCliente;
    }
    get getFechaRegistro(){
    return this.fechaRegistro;
}
set setFechaRegistro(fecha){
    this.fechaRegistro=fecha;
}
toString(){
    return super.toString()+", "+this.idCliente+", "+this.fechaRegistro;
}
}
let cliente1=new Cliente("Francisco","Gonzales","37",new Date());
console.log(cliente1.toString());
/*
TODO: instance of
nos sirve para preguntar si un objeto pertenece a una clase, devuelve un tru o false sea el caso
debe ir así: (if "objeto" instanceof "clase")
*/