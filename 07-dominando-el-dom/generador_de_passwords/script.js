

const generate_btn = document.querySelector("#generate_btn");
const password_range = document.querySelector("#password_range");
const uppercase_checkbox = document.querySelector("#uppercase_checkbox");
const lowercase_checkbox = document.querySelector("#lowercase_checkbox");
const numbers_checkbox = document.querySelector("#numbers_checkbox");
const symbols_checkbox = document.querySelector("#symbols_checkbox");
const generated_password = document.querySelector("#generated_password");
const character_length_span = document.querySelector("#character_length_span");
const copy_password_button = document.querySelector("#copy_password_button");
const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");
const bar4 = document.querySelector("#bar4");
const level_span = document.querySelector("#level_span");


// Cambio de valor de character length
password_range.addEventListener("change",() => {
    // Puedo usar change cuando quiero usarlo en una lista o como este que es de rango
    character_length_span.innerHTML= password_range.value;
})

// Copiar la contraseña
copy_password_button.addEventListener("click", () => {
    let password = document.querySelector("#generated_password"); // obtengo el valor de generated_password
    
    navigator.clipboard
    .writeText(password.innerHTML)
    .then(() => {
    alert(`Contraseña: ${password.innerHTML} copiada!`);
    })
    .catch(() => {
        console.log(`No se pudo copiar la contraseña`);
    });

});

/* Lista de valores */
const uppercase_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowercase_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const numbers_array = ['0','1','2','3','4','5','6','7','8','9'];
const symbols_array = ['!','#','$','%','&'];





generate_btn.addEventListener("click", () => {
    // console.log("Presionaste este boton");

    
    const result = generate_password(password_range.value,
        uppercase_checkbox.checked,
        lowercase_checkbox.checked, 
        numbers_checkbox.checked, 
        symbols_checkbox.checked);
        
    generated_password.innerHTML = result;
});


const generate_password = (length, uppercase,lowercase, number,  symbol) =>{


    console.log(`Generando una contraseña:
        Con longitud: ${length}, 
        Con mayusculas: ${uppercase},
        Con minusculas: ${lowercase},
        Con numeros: ${number},
        Con simbolos: ${symbol} `);


    // Inicializo el arreglo con el tamaño fijo, pero vacio
    const password_array = new Array(Number(length)); // El tamaño del array será el valor de length, lo convierto a number porque con el input es string y si lo dejo como string, en realidad LO METE en la posición 0 el valor de length, lo que yo requiero es ponerlo de tamaño para mi idea
    // console.log(password_array);
    
    
        
    // Reseteo de colores de la validación
    color_reset(bar1,bar2,bar3,bar4,level_span);

    // Si ninguno de estas opciones es true, no puedo hacer la contraseña
    if(!uppercase && !lowercase && !number && !symbol){
        return "Por favor, seleccione al menos una opción para brindarle una contraseña";
    }
    else if (length>8){
        return "Por favor, seleccione una longitud superior o igual a 8";
    }
    // Empiezo la generación de la contraseña
    else{
        
        let generalCounter = 0;
        // Se iterará mientras existan espacios vacios, si el valor es null, quiere decir que no hay espacios vacios
        while (get_empty_position(password_array) !== null) {

            // Si no está activado el checkbox, entonces aumenta el contador y ve a la siguiente posición
            if (generalCounter === 0 && !uppercase) generalCounter++;
            if (generalCounter === 1 && !lowercase) generalCounter++;
            if (generalCounter === 2 && !number) generalCounter++;
            if (generalCounter === 3 && !symbol) generalCounter = 0;



            
            // Mayusculas
            // Si contador general es igual a 0 quiere decir que no ha pasado por aqui, entonces qiuero que pase a la siguietne
            
            if(generalCounter === 0 && uppercase){
                
                // En una posición random vacía del arreglo
                let empty_position = get_empty_position(password_array);

                // Si llegara a devolver nulo, quiere decir que ya se llenó el array, por lo tanto, rompe el ciclo
                if (empty_position === null) {
                    break;
                }

                // vas a añadir una letra mayuscula random
                random_uppercase_position = Math.floor(Math.random() * uppercase_array.length); // posición random de mayusculas

                // En la posición random vacia del arreglo de password, añade un valor random del array de mayusculas
                password_array[empty_position]= uppercase_array[random_uppercase_position];

                console.log([...password_array]);
                
                // Aumento el contador para que no vuelva a repetir este paso
                generalCounter++;

            }

            // Minusculas
            if(generalCounter === 1 && lowercase){
                // En una posición random vacía del arreglo
                let empty_position = get_empty_position(password_array);

                // Si llegara a devolver nulo, quiere decir que ya se llenó el array, por lo tanto, rompe el ciclo
                if (empty_position === null) {
                    break;
                }

                // vas a añadir una letra minuscula random
                random_lowercase_position = Math.floor(Math.random() * lowercase_array.length); // posición random de minusculas

                // En la posición random vacia del arreglo de password, añade un valor random del array de minusculas
                password_array[empty_position]= lowercase_array[random_lowercase_position];

                console.log([...password_array]);
                
                // Aumento el contador para que no vuelva a repetir este paso
                generalCounter++;

            }

            // Números

            if(generalCounter === 2 && number){
                // En una posición random vacía del arreglo
                let empty_position = get_empty_position(password_array);

                // Si llegara a devolver nulo, quiere decir que ya se llenó el array, por lo tanto, rompe el ciclo
                if (empty_position === null) {
                    break;
                }

                // vas a añadir un numero random
                random_numbers_position = Math.floor(Math.random() * numbers_array.length); // posicion random del arreglo de numeros

                // En la posición random vacia del arreglo de password, añade un valor random del array de numeros
                password_array[empty_position]= numbers_array[random_numbers_position];

                console.log([...password_array]);
                
                // Aumento el contador para que no vuelva a repetir este paso
                generalCounter++;

            }

            // Simbolos

            if(generalCounter === 3 && symbol){
                // En una posición random vacía del arreglo
                let empty_position = get_empty_position(password_array);

                // Si llegara a devolver nulo, quiere decir que ya se llenó el array, por lo tanto, rompe el ciclo
                if (empty_position === null) {
                    break;
                }       

                // vas a añadir un simbolo random
                random_symbols_position = Math.floor(Math.random() * symbols_array.length); // posición random del array de simbolos
                
                // En la posición random vacia del arreglo de password, añade un valor random del array de symbols
                password_array[empty_position]= symbols_array[random_symbols_position];

                console.log([...password_array]);
                
                // Reinicio el contador para que vuelva a empezar desde mayusculas
                generalCounter = 0;

            }




            
        }

        
    }
    
    let password = password_array.join("");// uno todo el arreglo en un texto sin espacios

    // Lo mando a la validación de fuerza
    strength_validation(password,length,uppercase,lowercase,symbol,number,bar1,bar2,bar3,bar4,level_span);

    return password; // le mando la contraseña final
    
}

// Función para encontrar una posición vacía del arreglo
const get_empty_position = (password_array) => {

    // Aqui guardaré las posiciones vacias
    const empty_positions = [];

    // Recorre el arreglo de la contraseña guardada
    for (let i = 0; i < password_array.length; i++) {

        // Si encuentras un espacio vacio
        if (password_array[i] === undefined) {
            // Guardala su indice o posición del arreglo en el arreglo de posiciones vacias
            empty_positions.push(i);
        }
    }

    // En dado caso que esté vacio el arreglo de posiciones vacias, quiere decir que el arreglo está lleno y no tiene espacios vacios
    if (empty_positions.length === 0) {
        return null; // por lo tanto devuelve null, para que con la condición se rompa el ciclo
    }

    // encuentra una posición random dentro del arreglo de posiciones vacias
    const random_position = Math.floor(Math.random() * empty_positions.length);

    return empty_positions[random_position]; // devuelve la posición random para que ahi guarde el dato
}




const color_reset = (bar1,bar2,bar3,bar4,level_span) =>{
        const default_color = "#18171f";
        bar1.style.backgroundColor = default_color;
        bar2.style.backgroundColor = default_color;
        bar3.style.backgroundColor = default_color;
        bar4.style.backgroundColor = default_color;
        level_span.innerHTML = "";
}


// Esto es para ver la seguridad o fuerza de la contraseña
const strength_validation = (password, range, uppercase,lowercase,symbol, number, bar1,bar2,bar3,bar4,level_span) =>{
    // obtengo las 4 barritas
  
    const strong_color = "#00ffb3";
    const medium_color = "#f9cb64";
    const weak_color = "#ffb347";
    const very_weak_color = "#ff4d4d";

    // Suma de cuantos checkbox se seleccionaron
    let checkboxCounter = 0;

    // Verificacion de true de cada checkbox
    if(uppercase){
        checkboxCounter++; // si es verdadero, que se sume
    }
    if(lowercase){
        checkboxCounter++;
    }
    if(symbol){
        checkboxCounter++;
    }
    if(number){
        checkboxCounter++;
    }




    console.log(range);
    
    // Si está todo seleccionado (siendo 4 el maximo) y la contraseña es igual o mayor a 12 digitos, es fuerte
    if(range>=12 && checkboxCounter==4){
        bar1.style.backgroundColor = strong_color;
        bar2.style.backgroundColor = strong_color;
        bar3.style.backgroundColor = strong_color;
        bar4.style.backgroundColor = strong_color;
        level_span.innerHTML = "Strong";
        level_span.style.color = strong_color;

    }
    else if (range>= 10 && checkboxCounter>=3){
        bar1.style.backgroundColor = medium_color;
        bar2.style.backgroundColor = medium_color;
        bar3.style.backgroundColor = medium_color;
        level_span.innerHTML = "Medium";
        level_span.style.color = medium_color;

    }
    else if (checkboxCounter>=2){
        bar1.style.backgroundColor = weak_color;
        bar2.style.backgroundColor = weak_color;
        level_span.innerHTML = "Weak";
        level_span.style.color = weak_color;

    }
    else{
        bar1.style.backgroundColor = very_weak_color;
        level_span.innerHTML = "Very weak";
        level_span.style.color = very_weak_color;

    }



}
