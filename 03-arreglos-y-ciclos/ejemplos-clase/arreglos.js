// Los arreglos son una forma de almacenar datos, desde productos, nombres de usuarios, datos de formularios, etc.
// Para crear uno, se usan los "[]"

// Creación de arreglo
let nombres = ["Adriana","Benjamin","Reyna","Brayan"];

// Acceder a arreglo en base a la posición

// Nombre el posición 0
console.log("Nombre en posición 0",nombres[0]); // 0 es el primer elemento
// Nombre el posición 3
console.log("Nombre en posición 3",nombres[3]); // 3 es el ultimo elemento en nuestro arreglo

// Arreglo completo
console.log("Arreglo completo: ",nombres);


// Métodos de arreglos 


// push()
nombres.push("Jorge"); // Vamos a agregar un nombre al final del arreglo
console.log("Push: ",nombres)

// pop()
nombres.pop(); //Quitamos un nombre al final del arreglo
console.log("Pop: ",nombres);

// unshift()
nombres.unshift("Jorge"); //Agrego el nombre al inicio del arreglo
console.log("Unshift: ",nombres);

// shift()
nombres.shift(); //Quito el nombre que está en el inicio del arreglo
console.log("Shift: ",nombres);

console.log("Antes de splice: ",nombres);


// sort()

let numeros = [1,5,87,2,6,8,3];
numeros.sort(); // Ordenará los números PERO EN ORDEN ALFABETICO

numeros.sort((a,b)=>a-b); //ordenará los número de menor a mayor

console.log(numeros);


// map() -> No modifica el arreglo original
let arreglo_menos_uno = numeros.map(a=>a-1); //Tenemos que guardar el resultado en algún lado y será en nuesta variable arreglo_menos_uno: Agarrará cada elemento del arreglo y les restará uno

console.log(arreglo_menos_uno);

