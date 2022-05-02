'use strict'
try {
    // TODO: try
    let x=10;
    throw "mi error";
} catch (error) {
    // TODO: catch
    console.log(error);
    
}
// TODO: finally (opcional)
finally{
    //siempre se ejecuta despues del error y asi no haya error
    console.log('termina la revision de errores');
    
}
console.log("continuamos...");
//console.log(x);
console.log('');
// TODO: Throw
//nosostros podemos arrojar nuestros propios errores

// TODO: Ejercicio: es Positivo?
let resultado=-4;
try {
    if(isNaN(resultado)) throw "no es un numero";
    else if (resultado==="") {
        throw "es una cadena vacia";
    } else if(resultado>=0){
        throw "valor positivo";
    } else if(resultado<0){
    throw "valor negativo";
    }
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    
}

