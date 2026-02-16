
// variables de los elementos html
const nombre = document.querySelector("#nombre");
const enviar_btn = document.querySelector("#enviar_btn");
const saludo_p = document.querySelector("#saludo_p");

// botón estate pendiente si te hacen click
enviar_btn.addEventListener("click", () =>{
    console.log(nombre.value); // obtener valor del input
    
    // saludo_p.textContent
    saludo_p.innerHTML = `Hola ${nombre.value}!`;

}

)