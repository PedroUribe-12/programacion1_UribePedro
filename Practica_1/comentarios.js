const obtenerComentarios = async () => {

    //obtenemos la lista de comentarios en formato Json, Almacenamos la misma en una constante respuesta
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/comments");

    //ahora tengo que indicar que voy a recibir en formato en Json
    const datos = await respuesta.json();

    //recorrer el objeto y obtener los emails
    /*let arreglo_emails = []
    datos.forEach( objeto => {
        arreglo_emails.push(objeto.email);
    });

    console.log(arreglo_emails);
    */
   
    //obtener los email con uso del map
    const array_correos = datos.map((objeto) => objeto.email);
    console.log(array_correos);
    
   
}

//identificar el boton atravez de su id
const btn_comment = document.querySelector("#btn_comentario");

//al escuchar el elemento click ejecuto la función "obtener comentario"
btn_comment.addEventListener('click', obtenerComentarios);