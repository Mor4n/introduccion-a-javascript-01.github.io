
// variables iniciales
const formulario = document.querySelector("#formulario"); // formulario general
const nombre = document.querySelector("#nombre"); // input de nombre
const comentario = document.querySelector("#comentario"); // textarea de comentario
const boton_enviar = document.querySelector("#boton_enviar"); // boton de enviar

let idComentario = 0;


function enviarFormulario (event){
    event.preventDefault(); 
    // console.log(`${nombre.value} - ${comentario.value}`);

    //creo nuevo parrafo
    const nuevoComentario = document.createElement("p");

    // agrego este texto al parrafo creado
    nuevoComentario.textContent = `El usuario ${nombre.value} dice: ${comentario.value}`;

    nuevoComentario.setAttribute("id",idComentario);
    idComentario++;

    //creo un boton para borrar el comentario
    const borrarComentario = document.createElement("button");
    
    borrarComentario.textContent = `Eliminar comentario`

    nuevoComentario.appendChild(borrarComentario);

    // este elemento lo anexo al body
    document.body.appendChild(nuevoComentario);

}

formulario.addEventListener("submit",enviarFormulario);