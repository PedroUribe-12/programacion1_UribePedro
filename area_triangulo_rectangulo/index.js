
const calcular_area_triangulo_rectangulo = () => {
    
    const cateto1 = parseInt(document.getElementById('inp_cateto1').value);
    const cateto2 = parseInt(document.getElementById('inp_cateto2').value); 

    const area_triangulo_rectangulo = (cateto1 * cateto2)/2; 

    const resultado = `El area del triangulo rectangulo es: ${area_triangulo_rectangulo}`

    alert(resultado);

}

const boton = document.getElementById('btn-calcular');
boton.addEventListener('click', calcular_area_triangulo_rectangulo);