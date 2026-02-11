

// Creación de objeto libro
const libro = {
    titulo: "Solanin",
    autor: "Inio Asano",
    anio:2005,
    estado:"disponible",
    capitulos:[],
    describirLibro(){
        console.log(`Nombre del libro: ${this.titulo}, escrito por ${this.autor}, lanzado el ${this.anio}. El estado de este libro es: ${this.estado}.`);
    },
    agregarCapitulo(capitulo){
        this.capitulos.push(capitulo); //Añado con el push que vimos, el capitulo que hayamos pasado al llamar al método
    },
    eliminarCapitulo(){
        this.capitulos.pop(); //Borro el último capítulo con pop
    }
}

// Objeto libro2
const libro2 = {
    titulo: "Vagabond",
    autor: "Takehiko Inoue",
    anio:1998,
    estado:"prestado", 
    capitulos:["01 - Agradecimientos","02 - Introducción a Vagabond","03 - El inicio de la historia"],
    describirLibro(){
        console.log(`Nombre del libro: ${this.titulo}, escrito por ${this.autor}, lanzado el ${this.anio}. El estado de este libro es: ${this.estado}.`);
    },
    agregarCapitulo(capitulo){
        this.capitulos.push(capitulo); 
    },
    eliminarCapitulo(){
        this.capitulos.pop();
    }
}

// Llamada al método describir libro para mostrar los datos del libro en la consola
libro.describirLibro();
libro2.describirLibro();

// Llamada al método agregar capitulo del objeto libro para agregar un nuevo capitulo al array del objeto
libro.agregarCapitulo("01 - Introducción"); 
libro.agregarCapitulo("02 - El inicio de la historia"); 
libro.agregarCapitulo("03 - Un nuevo día"); 

console.log(`Los capítulos del libro 1 son: ${libro.capitulos}`);

// Llamada al método eliminar capitulo, para borrar los últimos capítulos agregados

libro.eliminarCapitulo(); 
libro.eliminarCapitulo();

console.log(`Los capítulos del libro 1 son: ${libro.capitulos}`); // 01 - Introducción

libro2.agregarCapitulo("04 - Protagonista nuevo"); // Se agrega el capítulo 04

console.log(`Los capítulos del libro 2 son: ${libro2.capitulos}`); // 01 - Agradecimientos,02 - Introducción a Vagabond,03 - El inicio de la historia,04 - Protagonista nuevo

libro2.eliminarCapitulo(); // Se elimina el último capítulo agregado

console.log(`Los capítulos del libro 2 son: ${libro2.capitulos}`); // 01 - Agradecimientos,02 - Introducción a Vagabond,03 - El inicio de la historia


