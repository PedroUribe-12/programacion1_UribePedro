
const suma_y_positivo_negativo = (dato1,dato2) => {

    const suma = dato1 + dato2;

    const positivo_negativo_nulo = Math.sign(suma);

    let mensaje = '';

    if(positivo_negativo_nulo == 0){
        mensaje = `
            El resultado de la suma es: ${suma}
            El número ${suma} es nulo
        `;
    }else{
        if(positivo_negativo_nulo > 0){
            mensaje = `
                El resultado de la suma es: ${suma}
                El número ${suma} es positivo
            `;
        }else{
            mensaje = `
                El resultado de la suma es: ${suma}
                El número ${suma} es negativo
            `;
        }
    }

    return mensaje; 
}

const funcion_receptora = () => {

    let inp1 = document.getElementById('inp_numero1').value;
    let inp2 = document.getElementById('inp_numero2').value;

    const dato1 = parseInt(inp1);
    const dato2 = parseInt(inp2);

    const resultado = suma_y_positivo_negativo(dato1,dato2);

    alert(resultado);

}

const boton = document.getElementById('btn_guardar');
boton.addEventListener('click', funcion_receptora);