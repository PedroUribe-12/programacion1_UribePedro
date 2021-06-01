
const btn = document.querySelector("#btn_prob");

const sumar = () => {
    
    //accedo a los valores de cada INPUT haciendo uso querySelector
    const dato1 = document.querySelector("#n1").value;
    const dato2 = document.querySelector("#n2").value;

    //comvierto a numeros enteros para que el simbolo (+) actue como suma y no concatenación
    const resultado = parseInt(dato1) + parseInt(dato2);

    alert(resultado);
}

btn.addEventListener('click', sumar);

