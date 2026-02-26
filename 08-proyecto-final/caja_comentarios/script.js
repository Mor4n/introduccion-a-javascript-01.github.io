
// Variables del dom

const comment_form = document.querySelector(".comment-form")
const username_input = document.querySelector("#username");
const content_input = document.querySelector("#content");
const user_image_input = document.querySelector("#user_image");
const comments_container = document.querySelector(".comments-container");
// const submit_button = document.querySelector("#submit-btn");

// arreglo para guardar comments
let comments = [];

// comment es el nuevo comentario a crear, el cual es un objeto con nombre de usuario, foto de perfil, contenido del comentario y fecha
const create_comment = (comment) =>{
    // creo el elemento contenedor del comentario
    const comment_div = document.createElement("div");
    comment_div.classList.add("author");
    
    // Creo elemento de imagen de pfp
    const profile_pic = document.createElement("img");
    profile_pic.classList.add("author-avatar");
    profile_pic.setAttribute("src",comment.profilepic || "https://avatars.githubusercontent.com/u/61915148?v=4");

    //! anexo la foto de perfil al contenedor principal
    comment_div.appendChild(profile_pic); // Meto profile pic al contenedor padre del comentario


    // creo otro elemento contenedor para el nombre de usuario y el comentario completo
    const author_body = document.createElement("div");
    author_body.classList.add("author-body");


    // creo otro elemento para almacenar el nombre y la fecha
    const author_data  = document.createElement("div");
    author_data.classList.add("author-data");

    
    // creo otro elemento para el nombre de perfil
    const comment_username = document.createElement("p");
    comment_username.classList.add("author-name")
    
    // Le añado el valor del input
    comment_username.textContent = comment.username;

    // fecha
    const date_time = document.createElement("p");
    date_time.setAttribute("class","author-date");
    date_time.textContent = new Date().toLocaleString();
    
    //! Anexo nombre y fecha a su contenedor

    author_data.appendChild(comment_username);
    author_data.appendChild(date_time);
    

    // creo otro contenedor para almacenar el comentario
    const author_content = document.createElement("div");
    author_content.classList.add("author-content");

    const comment_content = document.createElement("p");
    comment_content.classList.add("author-text")
    
    // Le añado el valor del input
    comment_content.textContent = comment.content;

    // ! anexo el conteniedo del comentairo a su contenedor
    author_content.appendChild(comment_content);

    //! Anexo ambos contenedores a su contenedor padre

    author_body.appendChild(author_data);//Anexo el data
    author_body.appendChild(author_content);// anexo el content

    //? creo un último contenedor para guardar interacción del comentario en especifico  (aunque no funcionará)
    const interaction = document.createElement("div");
    interaction.classList.add("comment-interaction");

    
    // Indicador de like
    const like = document.createElement("p");
    like.setAttribute("class", "interaction");
    like.textContent = "Me gusta";

    // indicador de responder, aunque este y like solo son visuales
    const reply = document.createElement("p");
    reply.setAttribute("class","interaction");
    reply.textContent ="Responder";

    // Botón para borrar comentario
    const delete_comment = document.createElement("button");
    delete_comment.setAttribute("class","delete-comment");
    delete_comment.innerHTML = `
    <i class="fa-solid fa-trash" style="color: rgb(204, 38, 38);"></i>`;

    
    delete_comment.addEventListener("click",()=>{
        comment_div.remove();

    });



    // cada uno de estos, los anexo a su contenedor
    interaction.appendChild(like);
    interaction.appendChild(reply);
    interaction.appendChild(delete_comment);


    // Anexo el cuerpo del comentario a su contenedor principal
    comment_div.appendChild(author_body);

    // anexo el contenedor de interacción con el contenedor principal
    author_body.appendChild(interaction); 

    
    // Este comentario lo guardaré en su contenedor original del html, donde estará junto a los otros comentarios
    comments_container.appendChild(comment_div);

}


// Event listener del formulario

comment_form.addEventListener("submit", (e) => {

    e.preventDefault();
    // console.log(username.value,content.value);
    
    // creo el objeto del nuevo comentario con los valores de los inputs más el valor de la fecha
    const new_comment = {
        username: username_input.value,
        content: content_input.value,
        profilepic: user_image_input.value,
        date: new Date().toLocaleString()
    }

    // lo añado al arreglo de comentarios el objeto del nuevo comentario
    comments.push(new_comment);

    // lo pongo en el local storage
    localStorage.setItem("comments", JSON.stringify(comments));

    // creo el comentario en el dom
    create_comment(new_comment);

   

});

// cargar comentairos al cargar la pagina como vimos en clase
comments = JSON.parse(localStorage.getItem("comments")) || [];
// creo cada comentario
for (let i = 0; i < comments.length; i++) {
    create_comment(comments[i]);
}