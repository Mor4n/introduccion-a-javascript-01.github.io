// Imprimir 5 veces un mensaje usando ciclo for

// i++ es una forma corta de incrementar el contador en 1

// For tiene 3 partes: (inicializacion; condición; actualización del contador)
// En inicialización se crea el contador y en este caso, se inicia en cero
// Como condición indica que el ciclo se va a ejecutar mientras que se cumpla la condición, 
// que en este caso es mientras que el contador sea MENOR a 5
// En cada vuelta, se actualiza el contador
// En este caso se aumenta en 1 el contador, pero aquí podría ser i-- (i menos uno), i+=2 (i mas 2), etc
for(let i = 0; i < 5; i++) {
    // Mientras la condición se cumpla, se muestra esto
    console.log("Contador: ",i," Hola desde ciclo for!");
}

// Se puede modificar el contador para que vaya de dos en dos

for(let i = 0; i < 30; i+=2) {
    console.log("Contador: ", i, " De dos en dos");
}

// O también se puede hacer por decrementos
for(let i = 0; i >= -10; i-=2) {
    console.log("Contador: ", i, " De dos en dos por decremento");
}