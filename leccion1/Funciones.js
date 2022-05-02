//Hosting nos ayuda a que la funcion se ejecute desde cualquier posicion ya que pone arriba a todas las funciones
//TODO: declaracion de la Funcion
function mifuncion(a,b){
    console.log("Suma: "+( a + b ));
}
//TODO: Llamar una funcion
mifuncion(4,5);
//TODO: RETURN
function funcion2 ( c, d){
    return c + d;
}
let resultado=funcion2(2,3);
console.log(resultado);
//TODO: Funciones de Tipo Expresion
let x=function(a,b){ return a + b };
resultado=x(8,1);
console.log(resultado);
//TODO: Funciones Self-Invoking
//se mandan a llamar asi mismas
(function(a,b){
    console.log("Ejecutando la funcion " + ( a + b ));
})(3,6);
//no se puede reutilizar ni llamar
//TODO: Funciones con Objetos
function funObj(a,b) {
    console.log(arguments.length);
    return a+b;
}
console.log(funObj(4,5));
//TODO: metodo ToString
var mifuncionTexto = funObj.toString();
console.log(mifuncionTexto);
//TODO: (ARROW)Funciones Flechas 
const restarFuncionTipoFlecha = (a, b) => a-b;
console.log(restarFuncionTipoFlecha(3,5));
//TODO: Parametros y Argumentos
//la diferencia es que un argumento es lo que le pasamos a la funcion, la funcion recibe las variables como parametros
let multiplicacion =function(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a*b;
}
console.log(multiplicacion(4,5))
let sumarArreglo =sumarArray(5,9,6,4,2,3);
console.log(sumarArreglo);
function sumarArray(){
    let suma=0;
    for (let l = 0; l < arguments.length; l++) {
        suma += arguments[l];
    }
    return suma;
}
//TODO: Paso por valor
//cuando no usamos valores tipo objetos
let y=10; //valor primitivo
function cambiarValor(a){
    a=20
}
cambiarValor(y)
console.log(y);
//solo paso el valor de la variable, no cambio el valor de y 
//TODO: Paso por referencia
const persona={
    nombre: "patricio", apellido: "Paz"
}
console.log(persona)
function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido="Lara"
}
cambiarValorObjeto(persona);
console.log(persona)
