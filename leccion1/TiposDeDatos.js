// TODO: Ejemplos de tipos de dato
// Tipo de dato String
var nombre="Patricio";
console.log(nombre);
// Tipo de dato numerico
var numero=11;
console.log(numero);
var objeto={
    nombre: "juan",
    apellido: "Paz",
    telefono: "0939557088"
};
console.log(objeto);
//saber que tipo de dato es
nombre=12
console.log(typeof nombre);
// Tipo de dato Booleano
var bandera=true;
console.log(typeof bandera);
// Tipo de dato Function
function mifuncion(){}
console.log(typeof mifuncion)
// Tipo de daro Symbol
var simbolo=Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);
// Tipo Clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(typeof Persona);
// Tipo Undefined
var x;
console.log(typeof x);
x=undefined;
console.log(x);
// Tipo de dato null
var y=null;
console.log(y);
console.log(typeof y);
//Tipo Array es object aqui
var autos=["bmw","audi","Mazda"];
console.log(autos);
console.log(typeof autos);
//tipo cadena vacia
var z="";
console.log(z);
console.log(typeof z);
// TODO concatenacion de cadenas
var nombre="Lenin";
var apellido="Dioquilima";
var nombreCompleto=nombre+" "+apellido;
console.log(nombreCompleto)
var a=nombre+2+8;
console.log(a)
//despues del = se evalua de izq a derecha siempre
a=nombre+(2+8);
console.log(a)
a=2+8+nombre
console.log(a);
//TODO: Uso de LET, VAR, CONST
//let para declarar una variable
let nuevoNombre="Estuardo";
console.log(nuevoNombre);
let p,q;
p=25,q=63;
let w=p+q;
console.log(w);
//const para una constante
const nuevoApellido="Perez";
console.log(nuevoApellido);
//TODO: Operadores Aritmeticos
/*
+       suma
-       resta
*       multiplicacion
**      exponente
/       division
%       modulo
++      incremento
--      decremento
*/
let ab=3, b=2;
let za=ab+b;
console.log("Resultado de la suma es: "+za)
za=ab-b;
console.log("Resultado de la resta es: "+za)
za=ab*b;
console.log("Resultado de la multiplicacion es: "+za)
za=ab/b;
console.log("Resultado de la division es: "+za)
za=ab**b;
console.log("Resultado de "+ab+" con exponente "+b+" es: "+za)
za=ab%b;
console.log("El modulo(residuo) de "+ab+" / "+b+" es: "+za)
za=10;
za++;
console.log("con incremento "+za);
za--;
console.log("con decremento "+za);
//TODO operador de asignacion 
// son +=,-=,*=,/=,%=
//TODO operador de comparacion
let v1=3,v2=2,v3="3";
let r=v1==v3;//revisa el valor sin importar el tipo de dato
console.log(r);
r=v1===v3;//revisa el valor y tambien el tipo de dato
console.log(r);
r=v1!=v2;//diferente de, sin importar los tipos
console.log(r);
r=v1!==v2;//diferente de, y revisa los tipos
console.log(r);
//TODO: Operadores Relacionales
//Son: < > <= >= <>
//TODO: Operadores Logicos
//&& AND(y), || OR(o)
//TODO: Operador terneario
let resultado=(3<2)? "verdadero":"falso";
console.log(resultado)
//TODO: Precedencia de Operadores
// Van: ++x(se incrementa en el momento) --x x++ x--
// usar parentesis (para las operaciones)