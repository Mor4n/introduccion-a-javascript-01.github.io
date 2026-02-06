// Funciones

// Sintaxis general

// Se coloca la palabra clave función, seguido del nombre de la función
// Luego se colocarán parentesis, colocando los parametros que se usarán
// En la función, luego de ello se abre llaves para indicar...
function nombre_de_la_funcion(parametro1,parametro2){
    return "Valor a regresar"
}

nombre_de_la_funcion("parametro real 1", "parametro real 2");

// Ejemplo: Sumar 2 números

function sumar(a,b){
    return a+b;
}

// Podemos guardar el resultado de una función
let resultado = sumar(2,3);

console.log("Resultado de la suma", resultado);
