// Parámetros por default
// En caso de que un parámetro no sea ingresado al momento de llamar una función, podemos hacer que este tenga un valor por defecto mediante el '='
function saludo(nombre, apellido="Apellido no ingresado"){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludo("Brayan","Moran"); // Dirá: Hola Brayan Moran, funcionamiento normal, en este caso el valor por default se ignora

saludo("Brayan"); // Dirá: Hola Brayan Apellido no ingresado debido a que no declaré el valor del apellido


/**
 * Existe el function declaration y el function expression
 */

// Function declaration se define por medio de la palabra clave función, seguido del nombre, parámetros y el bloque de código que hará la función.

nombre_function_declaration();

function nombre_function_declaration(parametro1,parametro2){
    console.log(`Hola desde function declaration`);
    
}



// Function expression es una función que se guarda dentro de una variable, como si fuera un dato.
// El nombre de la función lo toma la variable o constante que la contiene.
// Notese abajo que no es necesario escribir function nombre_function_expression,
// porque el nombre ya se está asignando al crear la variable.


nombre_function_expression();

const nombre_function_expression = function (parametro1, parametro2) {
    console.log(`Hola desde function expression`);
    
}


/**
 * Diferencia principal y punto importante:
 * Normalmente en programación, nosotros no podríamos mandar a llamar una función antes de crearla.
 * 
 * En el ejemplo puesto, ambas funciones se están llamando ANTES de que se declare la función.
 * nombre_function_expression() no funciona, que es lo normal
 * Sin embargo,nombre_function_declaration() si funciona.
 * 
 * Esto es por el hoisting:
 * Javascript se ejecuta en dos vueltas: una de creación y otra de ejecución: la primer vuelta, javascript se podría decir que escanea el archivo .js y registra todas las funciones y variables en la memoria, con esto determina que variables va a crear, esta etapa es la etapa de creación por así decirlo, por lo tanto:
 * 
 * En el primer escaneo javascript observa que existe la función declarativa nombre_function_declaration y por ello "la registra", para en la segunda vuelta, que la etapa de ejecución, ya que tiene registrado que existe una función llamada nombre_function_declaration, entonces, puede ejecutar la llamada nombre_function_declaration(); a pesar de que está antes que la declaración.
 * 
 * Por ello, es que la function expression no se ejecuta y da error, en la etapa 1 de hoisting Javascript sí registra la variable, pero aún no tiene asignada la función, por eso no se puede ejecutar, a diferencia de la function_declaration.
 * Es como si pensara lo siguiente:
 * 
 * const nombre_function_expression; <- se crea la variable pero no se inicializa
 *  y después manda a llamar a 
 *  nombre_function_expression(); 
 */