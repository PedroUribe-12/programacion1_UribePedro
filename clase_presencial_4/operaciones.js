import Canino from './canino';

//llevo a cabo la extraccion de los datos de cada INPUT
const raza = document.querySelector('#inp_raza').value;
const peso = document.querySelector('#inp_peso').value;
const vac = document.querySelector('#inp_vac').value;

//Se crea la instancia pero tambien se ejecuta el constructor
const canino = new Canino (raza,peso,vac);

//identificar el boton

const btn_guardar = document.querySelector("#btn_guardar"); 

//al hacer click sobre el boton ejecuto el metodo guardar_canino

btn_guardar.addEventListener("click",canino.guradar_canino());

