
// variables iniciales
const formulario = document.querySelector("#formulario"); // formulario general
const nombre = document.querySelector("#nombre"); // input de nombre
const comentario = document.querySelector("#comentario"); // textarea de comentario
const boton_enviar = document.querySelector("#boton_enviar"); // boton de enviar




function enviarFormulario (event){
    event.preventDefault(); 
    console.log(`${nombre.value} - ${comentario.value}`);


}

formulario.addEventListener("submit",enviarFormulario);