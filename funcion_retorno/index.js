const funcion_parImpar = (numero) => {

    let resto = numero % 2;

    let respuesta = '';

    if(resto == 0){
        respuesta = `El ${numero} Es par`;
    }else{
        respuesta = `El ${numero} Es impar`;
    }

    return respuesta
}


const funcion_receptora = () => {

    const numero = document.getElementById('inp_numero').value;

    const par_o_impar = funcion_parImpar(numero);

    const parrafo = document.getElementById('p_resultado')

    parrafo.textContent = par_o_impar;

}

const btn_calcular = document.getElementById('btn_calcular');

btn_calcular.addEventListener('click', funcion_receptora);
