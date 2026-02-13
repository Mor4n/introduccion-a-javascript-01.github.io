
// Modificar un elemento existente
const parrafo = document.querySelector("p");

parrafo.textContent ="nuevo texto"
parrafo.innerHTML = "<b>nuevo</b>"
parrafo.style.color = "red"


// Agregar un nuevo elemento
const nuevoComentario = document.createElement("p");

nuevoComentario.textContent ="Nuevo comentario agregado"

// appendChild() agrega un nodo hijo al nodo padre
document.body.appendChild(nuevoComentario);  

// Agregando un eventListener

const boton = document.querySelector("button");

boton.addEventListener(
    "click", () =>{
        alert("Hiciste clic en el botón")
    }


);
