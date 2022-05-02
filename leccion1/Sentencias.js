//TODO: IF ELSE
let condicion = true;
if (2 > 3) {
  console.log("Condicion Verdadera");
} else {
  console.log("Condicion Falsa");
}
//ELSE IF
let numero = 3;
if (numero == 1) {
  console.log("Numero Uno");
} else if (numero == 2) {
  console.log("Numero Dos");
} else if (numero == 3) {
  console.log("Numero Tres");
} else if (numero == 4) {
  console.log("Numero Cuatro");
} else {
  console.log("Numero Desconocido");
}
//TODO: SWITCH
let numeroTexto="valor desconocido";
switch( numero){
case 1:
    numeroTexto="numero uno";
    break;
case 2:
    numeroTexto="numero dos";
    break;
case 3:
    numeroTexto="numero tres";
    break;
case 4:
    numeroTexto="numero cuatro";
    break;
default: 
numeroTexto="caso no encontrado";
}
console.log(numeroTexto);
// Ciclos
//TODO: while
let contador=0;
while ( contador < 3 ) {
    console.log(contador);
    contador++;
}
//TODO: DO WHILE
let contador2=0;
do {
    console.log(contador2);
    contador2++;
} while ( contador2<3 );
//TODO: FOR
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// TODO: BREAK romper ciclo
for(let j=1; j<10;j++){
    if(j%2==0){
        console.log(j);
        break;//encuentra el primer par y termina
    }
}
//TODO: CONTINUE continuar ciclo
for( k=0; k<10 ; k++){
    if( k%2 !==0){
        continue;//ir a la siguiente iteracion
    //}else{
    }
        console.log(k);
}
//TODO: LABELS(no es recomendable)
inicio:
for( k=0; k<=10 ; k++){
    if( k%2 !==0){
        // continue inicio;//apunta a la etiqueta
        break inicio;//apunta a la etiqueta
    //}else{
    }
        console.log(k);
}
//TODO: FOR IN
let persona={
    nombre: "Luis",
    apellido: "Pila",
    email: "luisp@gmail.com",
    edad: 22
}
for( nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona.nombrePropiedad); //así no
    console.log(persona[nombrePropiedad]);

}

