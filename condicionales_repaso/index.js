
const mensaje_clima = () => {

    //identificamos el selec a travez de su id
    const valor_clima = document.querySelector("#slt_clima").value;

    //identificamos el parrafo a travez de su id
    const parrafo = document.querySelector("#p_descripcion_clima");

    if(valor_clima == 0){
        let mensaje = 'cielo despejado, si probilidad de nubosidad';
        parrafo.textContent = mensaje;
    }else{
        if(valor_clima == 1){
            let mensaje = 'Fuertes lluvias, con posibilidad de mejora durante la noche';
            parrafo.textContent = mensaje;
        }else{
            let mensaje = 'Cielo parcialmente nublado, con posibilidad de precipitaciones';
            parrafo.textContent = mensaje;
        }
    }

}

//aca simplemente encontramos a nuestro select, para despues escuchar sus cambios 
const select = document.querySelector("#slt_clima");

//escuchamos al seleccionar una opcion distinta del select, lo que implica un cambio (change)
//y cuando suceda ese cambio, quiero ejecutar la funcion mensaje_clima()

select.addEventListener("change", mensaje_clima);