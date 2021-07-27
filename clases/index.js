import Auto from './auto.js';

const ejecutar = () => {

    const autito = new Auto(); 

    autito.kilometro = '44.000km';

    autito.mantenimientoRealizado();


}

const boton = document.getElementById('btn_mantenimiento');
boton.addEventListener('click', ejecutar);