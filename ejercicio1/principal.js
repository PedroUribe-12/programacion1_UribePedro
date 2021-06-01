import Datos from './datos.js';

const imprimir = () => {
    
    const datos_instancia = new Datos();

    datos_instancia.mostrar();
}

const btn_mostrar = document.querySelector("#btn_mostrar");

btn_mostrar.addEventListener("click", imprimir);