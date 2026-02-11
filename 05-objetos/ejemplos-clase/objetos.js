
/* Un objeto es una colección de pares clave-valor
* Nos deja agrupar información que está relacionada entre sí y modelar entidades del mundo real
* Como un formario: "En la parte llamada 'nombre' ingresa tu nombre, en la parte 'apellido', ingresa tu apellido"*/


// Objeto literal <- forma más común

// Sintaxis:

let objeto = {
    clave1:"valor1",
    clave2:"valor2",
}

// Ejemplo:

let persona = {
    nombre: "Brayan",
    edad: 25,
    profesion: "Estudiante",
    telefono: "6241231234"
}

console.log(persona); // Imprimirá el objeto



// Acceder a propiedad con "."

console.log(`Nombre: ${persona.nombre}`); // objeto.propiedad

// Otra forma de acceder a las propiedades es con [ ]

console.log(`Edad: ${ persona["edad"] }`); // objeto["propiedad"];

// Manipulando edad

console.log(`Cumpleaños: ${2026 - persona.edad}`);

// Modificando telefono

persona.telefono = 6241234564; // <- Podemos actualizar el valor con un =, no con ":" en ete caso

console.log(`Telefono actualizado: ${persona.telefono}`);

// Agregar una propiedad

persona.ciudad = "Awa Prieta"; // Podemos agregar una propiedad con la notación de punto

console.log(`Ciudad: ${persona.ciudad}`);

// Métodos
// Los métodos son funciones dentro de un objeto, funciones específicas dentro de los objetos

let libro = {
    titulo: "1984",
    autor: "Orwell",
    info() {
        console.log(`${this.titulo} de ${this.autor}`);
        
    }

}


libro.info(); // Se manda a el método info de libro

// Libro2
let libro2 = {
    titulo: "Cumbres Borrascosas",
    autor: "Emily Bronthe",
    info() {
        console.log(`${this.titulo} de ${this.autor}`); // el título de mi mismo (eso es el this)
        
    }

}

libro2.info();