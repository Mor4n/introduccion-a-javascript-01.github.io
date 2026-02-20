/* hacer un abecedario? tipo, array de abecedario? array de minusculas y mayusculas y simbolos y numeros?
y de que hacer un random(), que el random sea una posiicon entre 0 y el tamaño del arreglo total?
y esto agregarlo en un arreglo letra por letra y juntarlo al final?
*/


const generate_btn = document.querySelector("#generate_btn");
const password_range = document.querySelector("#password_range");
const uppercase_checkbox = document.querySelector("#uppercase_checkbox");
const lowercase_checkbox = document.querySelector("#lowercase_checkbox");
const numbers_checkbox = document.querySelector("#numbers_checkbox");
const symbols_checkbox = document.querySelector("#symbols_checkbox");
const generated_password = document.querySelector("#generated_password");

/* Lista de valores */
const uppercase_letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowercase_letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const symbols = ['!','#','$','%','&'];



generate_btn.addEventListener("click", () => {
    // console.log("Presionaste este boton");

    
    const result = generate_password(password_range.value,
        uppercase_checkbox.checked,
        lowercase_checkbox.checked, 
        numbers_checkbox.checked, 
        symbols_checkbox.checked);
        
    generated_password.innerHTML = result;
});


const generate_password = (length, uppercase,lowercase, number,  symbols) =>{
    console.log(`Generando una contraseña:
        Con longitud: ${length}, 
        Con mayusculas: ${uppercase},
        Con minusculas: ${lowercase},
        Con numeros: ${number},
        Con simbolos: ${symbols} `);

    return "CONTRASEÑA GENERADA";
    
}