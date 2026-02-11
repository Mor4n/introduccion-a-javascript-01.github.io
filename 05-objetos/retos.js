
const avengers = [
    { name: "Iron man", age: 48, movies: ["Iron man", "Avengers", "End game"] },
    { name: "Captain America", age: 101, movies: ["Captain America", "Avengers", "End game"] },
    { name: "Thor", age: 1500, movies: ["Thor", "Avengers", "End game"] },
    { name: "Hulk", age: 49, movies: ["Hulk", "Avengers", "End game"] },


]

// Acceder a la segunda pelicula de thor
console.log(avengers[2].movies[1]);


const rocky_movies = {
    "Rocky": {
        year: 1976,
        director: "John G. Avildsen",
    },
    "Rocky II": {
        year: 1979,
        director: "Sylvester Stallone",
    },
    "Rocky III": {
        year: 1982,
        director: "Sylvester Stallone",
    }
}

// Obtener el año de grabación de rocky III
const { year } = rocky_movies["Rocky III"]
console.log(year);

//console.log(rocky_movies["Rocky III"].year);


const tierra = {
    continentes: {
        America: {
            Mexico: {
                estados: ["CDMX", "Guadalajara", "Monterrey", "SLP"],
            },
            "Estados Unidos": {
                estados: ["California", "Texas", "Florida", "New York"],
            },
        },
        Europa: {
            España: {
                ciudades: ["Madrid", "Barcelona", "Valencia", "Sevilla"],
            },
            Francia: {
                ciudades: ["París", "Lyon", "Marsella", "Niza"],
            },
        },
    },
    contintentes() {
        continentes_list = [];
        for (continente in this.continentes) {
            continentes_list.push(continente)
        }
        console.log(`Continentes: ${continentes_list}`)

    },

    paises() {
        paises_list = []; // arreglo para guardar los paises

        
        for (continente in this.continentes) { // primero recorro cada continente
            for (pais in this.continentes[continente]) { // y ahora voy a acceder a lo que tenga el continente actual (x ejemplo america) al ponerlo dentro del corchete del objeto continentes, que viene siendo el país
                paises_list.push(pais); // lo agrego al arreglo
            }

        }
        console.log(`Paises: ${paises_list}`) // imprimo el arreglo
    },

    estados() {

    },

    ciudades() {

    },
};
/**
 * Imprimir de la siguiente forma: 
 * Continentes: America, Europa,
 * Paises: México, Estados Unidos, ...
 * Estados: CDMX, Guadalajara, Monterrey, SLP, California, Florida, Texas, New York ...
 * Ciudades: Madrid, barcelona
 */


tierra.contintentes();
tierra.paises();
tierra.estados();
tierra.ciudades();