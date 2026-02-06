// Funciones

// Sintaxis general

// Se coloca la palabra clave function, seguido del nombre de la función
// Luego se colocarán parentesis, colocando los parametros que recibirá
// En la función, luego de ello se abre llaves que contienen el código que ejecutará la función
function nombre_de_la_funcion(parametro1,parametro2){
    return "Valor a regresar"
}

/// Llamada a la función con valores reales
nombre_de_la_funcion("parametro real 1", "parametro real 2");

// Ejemplo: Sumar 2 números

function sumar(a,b){
    return a+b;
}

// Podemos guardar el resultado de una función
let resultado = sumar(2,3);

console.log("Resultado de la suma", resultado);
