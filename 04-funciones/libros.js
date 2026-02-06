
// Declaración de variables y funciones

// Arreglo inicial para guardar los libros
let librosLeidos = [];

// Función tipo Arrow para agregar un libro

const agregarLibro = (titulo) =>{
    
    // Método push del arreglo para añadir el título
    librosLeidos.push(titulo);
}

// Función tipo Arrow para mostrar los libros
const mostrarLibrosLeido = () =>{

    // Ciclo for para recorrer todos los libros y mostrarlos
    for (let i = 0; i < librosLeidos.length; i++) { 
        
        // Se imprime el valor del libro en la posición del array 
        console.log(`Libro ${i} - ${librosLeidos[i]}`);
        
    }
    
}

// Llamadas de funciones

// Funciones de agregar libro
agregarLibro("Solanin");
agregarLibro("Tokyo Ghoul");
agregarLibro("I am a hero");
agregarLibro("Chainsaw Man");
agregarLibro("Gintama");

// Función para mostrar los libros
mostrarLibrosLeido();
