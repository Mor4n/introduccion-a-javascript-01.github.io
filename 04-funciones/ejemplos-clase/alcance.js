
/**
 * Scope:
 * Local:
 * Global
 */

function escuela(){
    let estudiante = "Adriana";
    console.log(estudiante);

}


let x=1; // viene siendo variable global en este caso
function myFunc(){
    let x=2;
    console.log(x); //2 dentro de la función
}
myFunc(); // Aquí imprimirá 2 por el console.log(x)
console.log(x);// Pero aquí imprimirá 1 porque es la variable del scope global
