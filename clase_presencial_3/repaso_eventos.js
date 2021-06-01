//logro identificar el elemento html cuyo id es "btn_cal"
const btn = document.querySelector("#btn-cal");

//funcion encargada de calcular la multiplicación
const producto = () => {
    const dato1 = document.querySelector("#dato1").value;
    const dato2 = document.querySelector("#dato2").value;
    
    const resultado = dato1 * dato2;

    alert('El resultado de la multiplicación es: '+resultado);
}

//cuando se escuche el evento click se ejecuta la funcion producto()
btn.addEventListener("click",producto);