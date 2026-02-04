// While
// Imprimir 5 veces 

console.log("Usando if's:");

//Inicializar contador
let i = 0;

// i = 0;
if(i < 5) {
    console.log("Contador:",i, " Hola");
    i = i + 1; 
}


// i = 1;
if(i < 5) {
    console.log("Contador:",i, " Hola");
    i = i + 1; 
}


// i = 2;
if(i < 5) {
    console.log("Contador:",i, " Hola");
    i = i + 1; 
}


// i = 3;
if(i < 5) {
    console.log("Contador:",i, " Hola");
    i = i + 1; 
}


// i = 4;
if(i < 5) {
    console.log("Contador:",i, " Hola");
    i = i + 1; 
}

//! i = 5;
if(i < 5) {
    // No va a agarrar esto porque 5 no es menor que 5, es igual que 5.
    console.log("Contador:",i, " Hola");
    i = i + 1; 
}


//! i = 6;
if(i < 5) {
    // No va a correr esto tampoco, porque 6 es mayor a 5 y la condición debe ser menor a 5
    console.log("Contador:",i, " Hola");
    i = i + 1; 
}


// Implementación con ciclo while
console.log("Ahora usando while");

// Inicialización de contador
let j = 0;

// Si j es menor a 5, entonces ejecuta esto
while (j < 5) {
    console.log("Contador: ",j," Hola desde while!");
    j = j + 1; // Aumento del contador
}


// Tip para el uso de While

// Inicio del contador
let k = 0;

// Siempre se va a ejecutar, es un ciclo infinito por el true
while(true) {  

    // Si el contador llega a ser igual a 7
    if(k == 7) {
        break; // Termina el ciclo,sin esto, va a ser bucle infinito
    }
    // Si no es igual a 7, entonces aumenta el contador
    k = k + 1;

}

// Negación en la condición
// Este ciclo se ejecuta mientras k sea diferente a 7, 
// se detiene cuando alcance el valor de 7
while(k != 7) {
    k = k + 1;
}