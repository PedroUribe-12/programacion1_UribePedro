const calcular_perimetro = (radio,pi) => {

    let perimetro = 2*(radio * pi);

    return perimetro;

}

const mostrar = () => {
    
    const inp_radio = document.getElementById('inp_radio').value;

    const radio = parseInt(inp_radio);

    const pi = 3.14; 

    const resultado = calcular_perimetro(radio,pi);

    alert(resultado);
}

const btn_calcular = document.getElementById('btn_calcular');
btn_calcular.addEventListener('click', mostrar);