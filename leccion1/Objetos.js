//TODO: definir objeto
let persona={
    nombre: "Luis",
    apellido: "Pila",
    email: "luisp@gmail.com",
    edad: 22
}
console.log(persona.nombre);
console.log(persona);
//TODO: agregar metodos a los objetos

let persona2={
    nombre: "Luis",
    apellido: "Pila",
    email: "luisp@gmail.com",
    edad: 22,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona2.nombreCompleto());
//TODO: Crear Objeto
let persona3=new Object();
persona3.nombre="Patricio";//agregar atributos
//TODO: Acceder a las Propiedades
console.log(persona.nombre);
console.log(persona["apellido"]);
//TODO: Agregar y Eliminar Propiedades
persona2.tel="0939557088"
persona2.tel="0939555555"//modificamos
console.log(persona2);
delete persona2.tel;//eliminar propiedad
console.log(persona2);
//TODO: Imprimir un objeto
//concatenar cada valor
console.log( persona.nombre + " " + persona.apellido + " " + persona.email+" "+persona.edad);
//for in 
for (obj in persona){
console.log(persona[obj]);
}
//convertir a un Array
let personaArray=Object.values(persona);
console.log(personaArray);
//convertir a JSON
let personaString= JSON.stringify(persona);
console.log(personaString);
//TODO: Metodo get
let persona4={
    nombre: "Luis",
    apellido: "Pila",
    email: "luisp@gmail.com",
    edad: 22,
    idioma: "es_mx",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
    this.idioma=lang.toUpperCase();
},
get nombreCompleto(){
    return this.nombre + " " + this.apellido;
}

}
console.log(persona4.nombreCompleto);
console.log(persona4.lang);
persona4.lang="en";
console.log(persona4.lang);
console.log(persona4.idioma);
//TODO: metodo constructor
//Funcion constructor de objetos de tipo Persona
function Persona(nombre,apellido,email){
    this.nombre= nombre;
    this.apellido=apellido;
    this.email=email;
}
let padre =new Persona("pedro","Almeida","pedro@gmail.com");
let madre =new Persona("Carmen","Rosas","carmen@gmail.com");
console.log(madre);
//TODO: agregar metodos a un constructor
function Persona2(nombre,apellido,email){
    this.nombre= nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto=function(){
        return this.nombre + " " + this.apellido;
    }
}
let madre2 =new Persona2("Carmen","Rosas","carmen@gmail.com");
console.log(madre2.nombreCompleto());
//TODO: Distintas formas de crear Objetos
let miObjeto= {};//new Object() = {}
let miArreglo=[];
let mifuncionNueva=function(){};
//TODO: uso de Prototype
//agregar una propiedad al constructor
Persona2.prototype.tel="0939557088"
console.log(madre2.tel);
madre2.tel="0123456789"//si solo queremos modificar dicho objeto
console.log(madre2.tel);
//TODO: Uso de call
let person1={
    nombre:"Lenin",
    apellido:"Diaz",
    nombreCompleto:function(){
        return this.nombre + " " + this.apellido;
    }
}
let person2={
    nombre:"Edgar",
    apellido:"Velez",
}
console.log(person1.nombreCompleto());
console.log(person1.nombreCompleto.call(person2));//si tiene los mismos atributos funca
//TODO: paso de args a Call
let person3={
    nombre:"Lenin",
    apellido:"Diaz",
    nombreCompleto:function(titulo, tel){
        return titulo+" "+this.nombre + " " + this.apellido+" "+tel;
    }
}
let person4={
    nombre:"Edgar",
    apellido:"Velez",
}
console.log(person3.nombreCompleto("Lic","0939557000"));
console.log(person3.nombreCompleto.call(person4,"ing:","0939557088"));//si tiene los mismos atributos funca
//TODO: Metodo apply
//se pasa en formato de arreglo
//console.log(person3.nombreCompleto.apply(person4,["ing","0939557088"]));//si tiene los mismos atributos funca
