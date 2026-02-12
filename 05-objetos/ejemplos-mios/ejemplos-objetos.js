

const persona = {
    nombre: "Adriana",
    edad: 25,
    ocupacion:"Estudiante",
    tieneCarro:false,
}

const datosAdicionales = {
    hobbies: ["Jugar videojuegos","Escuchar música","Cocinar"],
    altura: 1.60,
    ultimoPromedio:95,
}

// Para agregar una nueva propiedad:
persona.tieneLicencia = false;
console.log(persona);


// Para borrar una propiedad usamos la palabra clave "delete"
delete persona["tieneCarro"]; //delete objeto.propiedad / objeto["propiedad"]

console.log(persona);

// Como unir 2 objetos
// Para unir 2 objetos podemos usar el 'spread operator', ponemos '...' seguido del objeto

const resultado = { ...persona,...datosAdicionales }; // Copia el objeto persona y el objeto datos adicionales, guardalo en resultado
console.log(resultado);


