
// variables iniciales
const formulario = document.querySelector("#formulario"); // formulario general
const nombre = document.querySelector("#input-nombre"); // input de nombre
const comentario = document.querySelector("#input-comentario"); // textarea de comentario
const boton_enviar = document.querySelector("#boton-enviar"); // boton de enviar

let idComentario = 0;


function enviarFormulario (event){
    event.preventDefault(); 
    // console.log(`${nombre.value} - ${comentario.value}`);

    // creo un div como contenedor del comentario, este guardará tanto el texto del comentario, como el botón de eliminar
    const nuevoComentario = document.createElement("div");
    // le agrego la clase contenedor-comentario para editarle el estilo
    nuevoComentario.setAttribute("class","contenedor-comentario");

    // le agrego el id al comentario
    nuevoComentario.setAttribute("id",idComentario);

    // creo un div texto comentario, aqui es donde voy a guardar el usuario y el contenido del comentario
    const textoComentario = document.createElement("div");
    textoComentario.setAttribute("class","texto-comentario");

    // creo el nombre del usuario
    const nombreComentario = document.createElement("h3");
    nombreComentario.setAttribute("class","nombre-usuario");
    nombreComentario.textContent = `@${nombre.value}`;

    //creo un parrafo con el comentario escrito
    const contenidoComentario = document.createElement("p");
    contenidoComentario.setAttribute("class","texto-comentario");
    // agrego el texto del input al parrafo recien creado de comentario
    contenidoComentario.textContent = `${comentario.value}`;

    // agrego el usuario y el contenido del comentario al contenedor del comentario
    textoComentario.appendChild(nombreComentario);
    textoComentario.appendChild(contenidoComentario);

    // y agrego todos estos al contenedor general del comentario,el cual incluirá el botón de eliminar en unos momentos
    nuevoComentario.appendChild(textoComentario);


    //creo un boton para borrar el comentario
    const borrarComentario = document.createElement("button");
    // le agrego la clase de boton-eliminar para estilizarlo
    borrarComentario.setAttribute("class","boton-eliminar");


    borrarComentario.textContent = `Eliminar comentario`

    
    // funcionalidad de borrar comentario
    borrarComentario.addEventListener("click",
        (e) => 
            {
            const div_a_borrar = e.target.parentElement;
            div_a_borrar.remove();
            }
    );


    nuevoComentario.appendChild(borrarComentario);

    // este elemento lo anexo al body
    document.body.appendChild(nuevoComentario);

}

formulario.addEventListener("submit",enviarFormulario);

