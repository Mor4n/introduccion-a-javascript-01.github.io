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

/**
 * miniidea que tengo:
 * Tener un arreglo, donde tendrá de limite de tamaño el rango, en un for, verifico de forma random cada posicion del arreglo, 
 * si tiene un valor añadido, paso
 * si no tiene, verifico si ya fue añadido al menos 1 vez ya sea uppercase, lowercase, number, symbols, de no ser añadido, agarro uno de estos de forma aleatoria y lo añado, si ya todos fueron una vez, lo vuelvo a poner pero en otro lugar
 * O sea xd tipo: posicion random inicial para poner un valor en el arreglo, si tiene un dato, paso a otra posicion random, si no tiene un valor, verifico cual de las 4 opciones ya fue añadida (ya sea uppercase, lowercase, number, symbols) y añado una de estas de forma aleatoria, si ya todas fueron añadidas, vuelvo a añadir una de estas
 */

const generate_password = (length, uppercase,lowercase, number,  symbols) =>{


    console.log(`Generando una contraseña:
        Con longitud: ${length}, 
        Con mayusculas: ${uppercase},
        Con minusculas: ${lowercase},
        Con numeros: ${number},
        Con simbolos: ${symbols} `);


    // Inicializo el arreglo con el tamaño fijo, pero vacio
    const password_array = new Array(Number(length)); // El tamaño del array será el valor de length, lo convierto a number porque con el input es string y si lo dejo como string, en realidad LO METE en la posición 0 el valor de length, lo que yo requiero es ponerlo de tamaño para mi idea
    // console.log(password_array);
    
    
    // Si ninguno de estas opciones es true, no puedo hacer la contraseña
    if(!uppercase && !lowercase && !number && !symbols){
        return "Por favor, seleccione al menos una opción para brindarle una contraseña";
    }
    else{



    }


    return "CONTRASEÑA GENERADA";
    
}