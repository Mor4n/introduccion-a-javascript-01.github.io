

// Creación de objeto libro
const libro = {
    titulo: "Solanin",
    autor: "Inio Asano",
    año:2005,
    estado:"disponible",
    describirLibro(){
        console.log(`Nombre del libro: ${this.titulo}, escrito por ${this.autor}, lanzado el ${this.año}. El estado de este libro es: ${this.estado}.`);
    },
}

// Objeto libro2
const libro2 = {
    titulo: "Vagabond",
    autor: "Takehiko Inoue",
    año:1998,
    estado:"prestado", 
    describirLibro(){
        console.log(`Nombre del libro: ${this.titulo}, escrito por ${this.autor}, lanzado el ${this.año}. El estado de este libro es: ${this.estado}.`);
    }
}

libro.describirLibro();
libro2.describirLibro();
