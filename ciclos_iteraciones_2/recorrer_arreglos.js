const recorrer_arreglo = () => {

    let nombres = ['Pepe','Juan','José','Jaime'];

    //primera forma
    for(indice in nombres){
        console.log(nombres[indice]);
    }
    
    //segunda forma
    /*
    nombres.forEach(element => {
        console.log(element);
    });
    */
}

const boton2 = document.getElementById("btn_recorrer_arreglo");

boton2.addEventListener("click", recorrer_arreglo);