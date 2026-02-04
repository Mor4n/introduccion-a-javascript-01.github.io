
// Contador de frutas
let sandias = 0;
let uvas = 0;
let naranjas = 0;

// Arreglo con frutas
const arreglo = ["🍉","🍇","🍇","🍉","🍊","🍉","🍉"];

console.log("Las frutas son las siguientes: ",arreglo);


// Iteración en el arreglo de frutas
for (let i = 0; i < arreglo.length; i++) {
    
    // Evaluación
    if (arreglo[i]=="🍉") {
        // Si el valor encontrado es igual a sandía, aumenta el contador de sandías en 1
        sandias++;
    }else if(arreglo[i]=="🍇"){
        // Si no es sandía viene para acá y evalua si es uva, si es así aumenta el contador de uvas en 1
        uvas++;
    }else{
        // Si no es ni sandía ni uvas, entonces debe ser naranja, por lo tanto, aumenta el contador de naranjas en 1
        naranjas++;
    }
    
}

console.log("Con ciclo for:");

console.log("En total, hubo:");
console.log("Sandías: ",sandias);
console.log("Uvas", uvas);
console.log("Naranjas", naranjas);



