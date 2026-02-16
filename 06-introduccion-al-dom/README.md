# Lección 6 - Introducción al DOM: Caja de Comentarios (Simple Comment Box)

En este lección se practicó con el DOM en Javascript, como el añadir elementos HTML por medio de Javascript o modificar los elementos que existan en HTML, así como también se practicó con el eventListener.


## Archivos del proyecto

- **index.html**: Archivo HTML donde está la base de la práctica de la lección 6: Caja de Comentarios (Simple Comment Box)
- **script.js**: Archivo de Javascript con la funcionalidad para realizar la caja de comentarios
- **style.cs**: Archivo de CSS con el diseño del index.html
- **README.md**: Documentación y explicación de la lección 6

- **ejemplos-clase**: Carpeta con notas y ejemplos de vistos en clase sobre
- **ejemplos-clase/index.html**: Archivo base para poder ejecutar el script.js
- **ejemplos-clase/script.js**: Notas acerca del DOM en javascript vistos en clase

- **hola_dom**: Carpeta con notas del ejemplo de "Hola usuario" con el DOM y javascript
- **hola_dom/index.html**: Archivo HTML base para ejecutar el script.js
- **hola_dom/script.js**: Archivo de Javascript con la funcionalidad para modificar el DOM

- **ejemplos-clase/index.html**: Archivo base para poder ejecutar el script.js
- **ejemplos-clase/script.js**: Notas acerca del DOM en javascript vistos en clase

- **img/Captura.png**: Captura de pantalla inicial
- **img/Captura 1.png**: Captura de pantalla con comentarios
- **img/Captura 2.png**: Captura de pantalla con el comentario 1 eliminado

## Aprendizajes:

- Qué es el DOM y cómo lo puedo manipular con JavaScript
- Cómo puedo seleccionar y modificar elementos HTML desde JavaScript
- Uso de addEventListener para manejar eventos (como un clic en un botón o un submit en un formulario)
- Práctica con el proyecto de caja de comentarios



## Evidencia visual

A continuación se muestra una captura de pantalla del código funcionando en la consola del navegador:

![Captura inicial del programa](./img/Captura.png)

![Captura con datos añadidos ](./img/Captura1.png)

![Captura con el primer comentario eliminado ](./img/Captura2.png)


## Ejemplo de uso

Abra el archivo 
```index.html```
en su navegador y revise el sitio web para probar la funcionalidad del mismo

También puede mirar el código de JavaScript abriendo el archivo
```script.js```
dentro de su editor de código preferido o dentro de Github.

## Despliegue

Se desplegó en Github Pages a partir de este repositorio, puedes ver la página a través del siguiente link:
https://mor4n.github.io/introduccion-a-javascript-01.github.io/06-introduccion-al-dom/index.html



## Como conclusión personal:
En esta práctica pude aprender demasiado sobre el DOM, siento que en parte la práctica fue muy parecida a lo que estuvimos haciendo en clase, lo clave siento yo fue la mini pista que nos dijo sobre que en el formulario se iba a hacer diferente a como lo estuvimos haciendo por el submit, en este caso, en lugar de hacer el eventListener en el botón, debe de ser en el formulario.
Usé el e.preventDefault() para evitar que se recargara la pagina, que tengo entendido que es algo que pasaría porque el formulario mandaría los datos a donde le hayamos especificado en el atributo "action", de ahí perdón de verdad si puse muchos comentarios o hice un revoltijo en el script.js :( primero que nada, obtuve el elemento con el querySelector de cada dato: desde el input de nombre, del comentario, de la foto de perfil, así como del formulario en sí.
Luego creé diferentes elementos con el createElement y le añadí su clase con setAttribute (esto para poder estilizarlo con css), esto lo hice con un contenedor que almacenara en sí todo el comentario.
Quise hacer un diseño parecido a twitter, por ejemplo, con la foto de perfil a la izquierda, a lado de ello el nombre del usuario, al lado del nombre de usuario estaría la fecha y hora, y abajo de esto puse el comentario. 
A la derecha de todo puse un botón de eliminar para que no tuviera espacio faltante ;u;
Por lo tanto:
- El nuevoComentario engloba el comentario en si, siendo el contenedor de todo, adentro se guarda:
    - Foto de perfil (Está a la izquierda de todo)
    - Contenido comentario, el cual almacena el contenido del comentario, siendo estos elementos:
        - Usuario + fecha y hora (Lo guardo en su propio div para que pueda ponerlo en forma horizontal)
        - Texto Comentario : es el comentario ingresado en el input (Está colocado asi para que quede debajo del usuario + fecha y hora)
    - Botón de eliminar (Este queda a la derecha de todo).


Todo lo mencionado anteriormente y por lo que pido disculpas ;n; es que siento que se ve muy embarañoso mi código (pido perdón, es la primera vez que intento esto), se realizó con appendChild para guardar cada cosa en nuevoComentario como un nodo hijo por así decirlo.
A cada elemento, le llegué a insertar texto con .textContent y le ponía el value del elemento que declaré al inicio de los inputs.
Para obtener la fecha y hora pude encontrar en StackOverflow un código que me sirvió bastante, el que fue new Date().toLocaleString(), donde directamente obtiene la fecha y hora y lo convierte a string formateado en nuestra región, lo cual se me hizo demasiado chido y muy práctico.
Para la funcionalidad de borrar comentario fue donde siento que me trabé demasiado, en un inicio pensé en algo como "ponerle id's a cada elemento con un contador" y que de alguna forma al dar clic en el botón, como que viera en que id había cliqueado y que directamente borrara el contenedor del nuevoComentario, entonces, el borrar el contenedor pude encontrar más o menos rápido en la documentación de mozilla que era con un .remove(), sin embargo, mi problema fue el como le hago para irme atrás, o que vea la capa superior o nodo superior por así decirlo de donde estoy dando clic.
Pido perdón también porque siento que probablemente esta no sea la solución óptima otra vez q-q pero como le pude encontrar y lo que entiendo de esto fue de que el e.target es el elemento exacto que le di clic, que viene siendo el button, el parentElement sería como "sube un nodo y dime que elemento es ahora al que apuntas", entonces, en lugar de ahora apuntar al botón, va a apuntar al contenedor del nuevo comentario, y al hacer el .remove, va a eliminar el elemento del DOM.
Pude aprender demasiado con esta práctica, mil gracias y de verdad, una disculpa por la cajeteada 😿 


## Fuentes:
https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
https://stackoverflow.com/questions/4744299/how-to-get-datetime-in-javascript
