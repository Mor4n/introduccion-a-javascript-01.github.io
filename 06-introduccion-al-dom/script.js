
// variables iniciales
const formulario = document.querySelector("#formulario"); // formulario general
const nombre = document.querySelector("#nombre"); // input de nombre
const comentario = document.querySelector("#comentario"); // textarea de comentario
const boton_enviar = document.querySelector("#boton_enviar"); // boton de enviar

let idComentario = 0;


function enviarFormulario (event){
    event.preventDefault(); 
    // console.log(`${nombre.value} - ${comentario.value}`);

    // creo un div como contenedor del comentario
    const nuevoComentario = document.createElement("div");
    
    // le agrego el id al comentario
    nuevoComentario.setAttribute("id",idComentario);
    idComentario++; // aumento el contador para el siguiente comentario

    //creo nuevo parrafo
    const contenidoComentario = document.createElement("p");

    // agrego este texto al parrafo creado
    contenidoComentario.textContent = `El usuario ${nombre.value} dice: ${comentario.value}`;

    // agrego el contenido del comentario al contenedor del comentario

    nuevoComentario.appendChild(contenidoComentario);

    //creo un boton para borrar el comentario
    const borrarComentario = document.createElement("button");

    borrarComentario.textContent = `Eliminar comentario`

    nuevoComentario.appendChild(borrarComentario);

    // este elemento lo anexo al body
    document.body.appendChild(nuevoComentario);

}

formulario.addEventListener("submit",enviarFormulario);