
// Funcion normal o declaración tradicional

function funcion_normal(a,b){
    return a+b;
}

// Función como variable: Usamos const (en general para que no tenga comportamiento extraño)
const funcion_como_variable = function (a,b) {
    return a+b;
}

// Arrow function: 
// Una función también son variables en JS, entonces, esta función como variable la puedo hacer una arrow function: declaro la variable,  
const funcion_flecha = (a,b) => {
    return a+b;
}

// Se puede simplificar más, ya que es SOLO UNA línea la que se ejecuta en el arrow function

const funcion_simplificada = (a,b) => a+b;

// Si queremos ir más allá: Funciones con un solo parámetro, no necesitan paréntesis

const funcion_con_un_parametro = a => a*a;

// ¿Cómo saber cuando aplicar cada función?
// Ve de abajo hacia arriba: Si solo tienes un parametro usas la función con un sólo parámetro, si tienes más parámetros, puedes hacer la versión simplificada, si tienes más de una línea en el bloque de código, puedes usar la función flecha, que es el más normal


console.log(funcion_normal(2,3));
console.log(funcion_como_variable(2,3));
console.log(funcion_flecha(2,3));
console.log(funcion_simplificada(2,3));
console.log(funcion_con_un_parametro(2.5));

