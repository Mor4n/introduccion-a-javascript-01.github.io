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
