const btn = document.querySelector("#btn_i");

const calcular_intensidad = () => {
    const tension = document.querySelector("#voltaje").value;
    const resistencia = document.querySelector("#resistencia").value;

    const resultado = tension / resistencia; 

    alert('La Intensidad es: '+resultado);
}
btn.addEventListener("click",calcular_intensidad);

const btn2 = document.querySelector("#btn_v");

const calcular_tension = () => {
    const intensidad = document.querySelector("#intensidad").value;
    const resistencia2 = document.querySelector("#resistencia2").value;

    const resultado2 = intensidad * resistencia2; 

    alert('La tension es: '+resultado2);
}
btn2.addEventListener("click",calcular_tension)
