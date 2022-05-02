//TODO: Ejercicio de Par o Impar
let a=10;
if(a%2==0){
    console.log("ES UN NUMERO PAR")
}else{
    console.log("ES UN NUMERO IMPAR")
}
//TODO Ejercicio es mayor de edad?
let edad=20,adulto=18;
if(edad>=adulto){
    console.log("Es mayor de edad");
}else{
    console.log("NO es mayor de edad");
}
// TODO: Ejercicio esta en el rango?
a=5;
let valMin=0,valMax=10;
if (a>=valMin && a<=valMax) {
    console.log("Dentro del Rango")
}else{
    console.log("Fuera de Rango");
}
// TODO: Ejercicio un padre puede asistir al juego del hijo
let vacaciones=true,diaDescanso=false;
if (vacaciones||diaDescanso) {
    console.log("SI puede asistir");
}else{
    console.log("NO puede asistir");
}
//TODO: edad con Operador Terneario
let nuemero=10;
resultado=(nuemero%2==0)?"numero par":"numero impar";
console.log(resultado);
//TODO: Convertir de string a Number
//Number(la variable string)
let miNumero="10";
console.log(miNumero);
console.log(typeof miNumero);
let miEdad=Number(miNumero);
console.log(typeof miEdad);
resultado=(miEdad>=18)?"sipuede votar":"aun no puede votar";
console.log(resultado);
// TODO: Verificar que una variable sea NUMBER
//NaN = not a number
let miNumero2="18x";
let miEdad2=Number(miNumero2);
console.log(miEdad2);
//preguntar si es un numero
if (isNaN(miNumero2)) {
    console.log("NO es un numero")
} else {
    console.log("SI es un numero")
}
//TODO: Ejercicio estación
let mes=4;
//comparacion estricta si ponemos mes="4" no compara string con number
let estacion="Estacion desconocida";
switch (mes) {
    case 1: case 2: case 12:
        estacion="invierno";
     break;
     case 3: case 4: case 5:   
     estacion="primavera";
     break;
     case 6: case 7: case 8:
    estacion="verano";
    break;
    case 9: case 10: case 11:
    estacion="otoño";
        break;
    default:
        estacion="valor incorrecto";
        break;
}
console.log(estacion)