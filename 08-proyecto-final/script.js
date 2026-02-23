
// Variables del dom

const comment_form = document.querySelector("#comment-form")
const username_input = document.querySelector("#username");
const content_input = document.querySelector("#content");
const user_image_input = document.querySelector("#user_image");
const comments_container = document.querySelector(".comments-container");
// const submit_button = document.querySelector("#submit-btn");

// Event listener del formulario

comment_form.addEventListener("submit", (e) => {

    e.preventDefault();
    // console.log(username.value,content.value);
    
    // creo el elemento contenedor del comentario
    const comment_div = document.createElement("div");
    comment_div.classList.add("author");
    
    // Creo elemento de imagen de pfp
    const profile_pic = document.createElement("img");
    profile_pic.classList.add("user-pfp");
    profile_pic.setAttribute("src",user_image_input.value || "https://avatars.githubusercontent.com/u/61915148?v=4");

    // creo otro elemento contenedor para el nombre de usuario y el comentario
    const comment_information = document.createElement("div");
    comment_information.classList.add("comment-flex-div");


    // creo otro elemento para almacenar el nombre y la fecha
    const username_date_container  = document.createElement("div");
    username_date_container.classList.add("op-txt-date-container");

    // creo otro elemento para almacenar el comentario
    const comment_description_container = document.createElement("div");
    comment_description_container.classList.add("comment-description-container");



    // creo otro elemento para el nombre de perfil
    const comment_username = document.createElement("p");
    comment_username.classList.add("op-txt")
    
    // Le añado el valor del input
    comment_username.textContent = username_input.value;

    // fecha
    const date_time = document.createElement("p");
    date_time.setAttribute("class","op-date");
    date_time.textContent = new Date().toLocaleString();

    // el nombre de usuario y fecha los guardaré en su contenedor
    username_date_container.appendChild(comment_username);
    username_date_container.appendChild(date_time);



    // creo otro elemento para la descripción
    const comment_content = document.createElement("p");
    comment_content.classList.add("comment-content");
    comment_content.textContent = content_input.value;

    // creo un último contenedor para guardar detalles del comentario en especifico
    const comment_details = document.createElement("div");
    comment_details.classList.add("comment-details");

    
    // Indicador de like
    const like = document.createElement("p");
    like.setAttribute("class", "interaction");
    like.textContent = "Me gusta";

    // indicador de responder, aunque estos ultimos 2 son solo visuales
    const reply = document.createElement("p");
    reply.setAttribute("class","interaction");
    reply.textContent ="Responder";

    // Botón para borrar comentario
    const delete_comment = document.createElement("button");
    delete_comment.setAttribute("class","delete-comment");
    delete_comment.textContent ="Borrar comentario";

    // Anexos:

    comment_div.appendChild(profile_pic); // Meto profile pic al contenedor padre del comentario

    comment_information.appendChild(comment_username); // El contenedor del nombre de usuario y el comentario, le anexo el nombre de usuario y la descripción
    comment_information.appendChild(comment_content); 

    // Este contenedor lo anexaré a su vez al contenedor padre del comentario
    comment_div.appendChild(comment_information);

    /// anexo los detalles de un comentairo a su contenedor, guardaré en este la fecha, likes, responder y borrar comentario

    comment_details.appendChild(date_time);
    comment_details.appendChild(like);
    comment_details.appendChild(reply);
    comment_details.appendChild(delete_comment);

    // por último, este lo anexo al contenedor padre

    comment_div.appendChild(comment_details);

    // Este comentario lo guardaré en su contenedor original del html, donde estará junto a los otros comentarios
    comments_container.appendChild(comment_div);


})