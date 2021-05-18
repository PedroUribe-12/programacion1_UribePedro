const saber_edad = () => {

    let edad = document.querySelector("#inp_edad").value;
    let parrafo1 = document.getElementById("texto");

    if(edad == 0){
        parrafo1.textContent = ('La edad ingresada no es valida');
    }else{
        if(edad>=1 && edad<=13 ){
            parrafo1.textContent = ('Su edad està entre 1 y 13 años de edad');
        }else{
            if(edad>=14 && edad<=21){
                parrafo1.textContent = ('Su edad està entre los 14 y 21 años de edad');
            }else{
                parrafo1.textContent = ('La edad ingresada es mayor a 21');
            }
        }
    }
}

const boton = document.getElementById("btn_validar");

boton.addEventListener("click", saber_edad);