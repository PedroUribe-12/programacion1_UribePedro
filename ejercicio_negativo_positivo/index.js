
const nulo_positivo_negativo = () => {

    const inp = document.getElementById('inp_numero').value;

    if(inp == 0){
        alert(`El número ${inp} es nulo`);
    }else{
        if(inp > 0){
            alert(`El número ${inp} es positivo`);
        }else{
            alert(`El número ${inp} es negativo`);
        }
    }

}

const boton = document.getElementById('btn_guardar');
boton.addEventListener('click', nulo_positivo_negativo);