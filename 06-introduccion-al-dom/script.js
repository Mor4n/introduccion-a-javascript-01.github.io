
// variables iniciales
const formulario = document.querySelector("#formulario"); // formulario general
const nombre = document.querySelector("#input-nombre"); // input de nombre
const comentario = document.querySelector("#input-comentario"); // textarea de comentario
const boton_enviar = document.querySelector("#boton-enviar"); // boton de enviar

let idComentario = 0;


function enviarFormulario (event){
    event.preventDefault(); 
    // console.log(`${nombre.value} - ${comentario.value}`);

    // creo un div como contenedor del comentario, este guardará TODO el comentario en sí
    const nuevoComentario = document.createElement("div");
    // le agrego la clase contenedor-comentario para editarle el estilo
    nuevoComentario.setAttribute("class","contenedor-comentario");

    // le agrego el id al comentario
    nuevoComentario.setAttribute("id",idComentario);

    // creo un div contenido comentario, aqui es donde voy a guardar el contenido como: usuario, fecha y el texto del comentario
    const textoComentario = document.createElement("div");
    textoComentario.setAttribute("class","contenido-comentario");

    // creo un div usuario-fecha, donde guardaré el nombre de usuario y fecha
    const usuarioFechayHora = document.createElement("div");
    usuarioFechayHora.setAttribute("class","usuario-fecha");

    // creo el nombre del usuario
    const nombreComentario = document.createElement("h3");
    nombreComentario.setAttribute("class","nombre-usuario");
    nombreComentario.textContent = `@${nombre.value || "Usuario sin nombre" }`;

    // creo la fecha y hora
    const fechaHora = document.createElement("p");
    fechaHora.setAttribute("class","fecha-hora");
    fechaHora.textContent = new Date().toLocaleString();

    // anexo el usuario y la fecha a su contenedor usuarioFechayHora

    usuarioFechayHora.appendChild(nombreComentario);
    usuarioFechayHora.appendChild(fechaHora);


    //creo un parrafo con el contenido del comentario escrito
    const contenidoComentario = document.createElement("p");
    contenidoComentario.setAttribute("class","contenido-comentario");
    // agrego el texto del input al parrafo recien creado de comentario
    contenidoComentario.textContent = `${comentario.value}`;

    // agrego el usuario-fechayhora y el contenido del comentario al contenedor del comentario, asi el usuario y fecha y hora los puedo estilizar de forma horizontal arriba y que el comentario posteado quede abajo
    textoComentario.appendChild(usuarioFechayHora);
    textoComentario.appendChild(contenidoComentario);

    // y agrego todos estos al contenedor general del comentario,el cual incluirá el botón de eliminar en unos momentos, entonces será a la izquierda el usuario fecha y hora, teniendo abajo el comentario y a la derecha el botón de eliminar
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

