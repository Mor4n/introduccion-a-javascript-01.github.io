
// Objetos anidados
const empresa = {
    nombre: "TechCorp",
    empleados:{
        jefe: "Ana",

    }

}

console.log(empresa.empleados); // Representa al objeto empleados


console.log(`La empresa se llama ${ empresa.empleados.jefe}`); // Accedo al objeto con un .


// Destructuración

const persona = {
    nombre:"Brayan",
    edad:25,
}

// Hay veces que ncesitamos sacar propiedades de objetos y asignarlos a variables, por ello se hace la destructuración
const { nombre } = persona;  
console.log(nombre);


// Es equivalente a...
// const nombre = persona.nombre; // Saca el nombre 
// console.log(nombre);


// Destructuración con múltiples propiedades

const {edad, profesion } = persona;

console.log(edad, profesion);

// Mucho más sencillo que 

// const nombre = persona.nombre;
// const edad = persona.edad;
// const profesion = persona.profesion;

