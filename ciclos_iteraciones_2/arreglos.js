const mostrar_arreglo= () => {

    let mi_arreglo = [25,88,100,11];

    console.log(mi_arreglo[3]);

} 

const boton = document.querySelector("#btn_mostrar_arreglo");

boton.addEventListener("click",mostrar_arreglo);

