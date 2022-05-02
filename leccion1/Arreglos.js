//let autos=new Array("bmw","mazda","audi");
//TODO: Declaracion de arreglos
// ARREGLO CONSTANTE
const autos=["bmw","mazda","audi"];
console.log(autos);
//TODO: Recorre arreglo
console.log(autos[1]);
for (let i = 0; i < autos.length; i++) {
    console.log(i+" "+autos[i]);
}
//TODO: Modificar Elementos
autos[1]="MAZDA"
console.log(autos[1]);
//autos.push() para añadir nuevos valores
//TODO: agregar elementos
autos.push("Ferrari")
console.log(autos);
autos[autos.length]="cadillac";
//TODO: tamaño del arreglo
console.log(autos.length);
//TODO: Es un arreglo?
console.log(Array.isArray(autos));
console.log(autos instanceof Array);
