
const calcular_hipotenusa = (cateto_a,cateto_b) => {

    let cateto_a_cuadrado = Math.pow(cateto_a,2);
    let cateto_b_cuadrado = Math.pow(cateto_b,2);

    let suma = cateto_a_cuadrado + cateto_b_cuadrado;

    let raiz = Math.sqrt(suma);

    return(raiz);
}

const mostrar_resultado = () => {

    const inp1 = document.getElementById('inp1').value;

    const inp2 = document.getElementById('inp2').value;

    let cateto_opuesto = parseInt(inp1);
    let cateto_adyacente = parseInt(inp2);

    const resultado = calcular_hipotenusa(cateto_opuesto,cateto_adyacente)

    document.getElementById('mensaje').textContent = resultado;

}

const boton = document.getElementById('btn_calcular');
boton.addEventListener('click', mostrar_resultado);