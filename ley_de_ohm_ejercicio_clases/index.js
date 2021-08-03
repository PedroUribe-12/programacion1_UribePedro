import Ohm from "./ley_ohm.js";

const calcularOhm = () => {
    
    const metodoCalcular = document.getElementById('select_opciones').value;

    const dato1 = document.getElementById('inp_dato1').value;

    const dato2 = document.getElementById('inp_dato2').value;

    const ohm = new Ohm (dato1, dato2);

    if(metodoCalcular == 0){
        ohm.calcularTension();
    }else{
        if(metodoCalcular == 1){
            ohm.calcularCorriente();
        }else{
            ohm.calcularResistencia();
        }
    }
}

const calcular = document.getElementById('calcular');
calcular.addEventListener('click', calcularOhm);

const cambiarLabel = () => {

    const metodoCalcular = document.getElementById('select_opciones').value;

    const label1 = document.getElementById('label1');
    const label2 = document.getElementById('label2');

    if(metodoCalcular == 0){
        label1.textContent = 'Corriente';
        label2.textContent = 'Resistencia';
    }else{
        if(metodoCalcular == 1){
            label1.textContent = 'Tension';
            label2.textContent = 'Resistencia';
        }else{
            label1.textContent = 'Tension';
            label2.textContent = 'Corriente';
        }
    }

}

const metodoCalcular = document.getElementById('select_opciones');

metodoCalcular,addEventListener('change',cambiarLabel);
