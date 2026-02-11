
let estudiante = {
    nombre: "Adriana",
    apellido: "Perez",
    edad: 25,
    curso:"Introducción a Javascript"

}

// Se puede iterar con for con la siguiente sintaxis:
// propiedad (cada clave del objeto)
// objeto[propiedad]  (cada propiedad del objeto) (con notación . no agarra)
// in <- el objeto a recorrer
for( propiedad in estudiante ){
    console.log(`Clave: ${propiedad} - Valor: ${estudiante[propiedad]}`); 
}

// Es equivalente a ...

console.log(`Clave es: ${"nombre"} y el valor es ${estudiante["nombre"]}`);
console.log(`Clave es: ${"apellido"} y el valor es ${estudiante["apellido"]}`);
console.log(`Clave es: ${"edad"} y el valor es ${estudiante["edad"]}`);
console.log(`Clave es: ${"curso"} y el valor es ${estudiante["curso"]}`);    
