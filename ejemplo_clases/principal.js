import ohm from './ohm.js';

const calcular_v_i = () =>{

    //crear la instancia de la clase Ohm
    const ohm_instancia = new ohm();
    //aca estoy ejecutando el metodo calcular_tension
    const tension = ohm_instancia.calcular_tension(4,20);

    /*aca estoy ejecutando el metodo calcular_corriente y le envio los
    necesarios para el calculo
    */
    const corriente = ohm_instancia.calcular_corriente(220,20);

    document.write(`
        Tension = ${tension} Volt;
        Corriente = ${corriente} Amper;
    `);

    alert(`
        Tension = ${tension} Volt;
        Corriente = ${corriente} Amper;
    `);
}

const btn_calcular = document.querySelector("#btn_calcular");

btn_calcular.addEventListener("click", calcular_v_i);

