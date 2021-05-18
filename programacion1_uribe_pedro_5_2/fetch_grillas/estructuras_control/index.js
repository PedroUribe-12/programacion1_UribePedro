const saber_edad = () => {

    let edad = document.querySelector("#inp_edad").value;

    if(edad == 0){
        alert('La edad ingresada no es valida');
    }else{
        if(edad>=1 && edad<=13 ){
            alert('Su edad està entre 1 a 13 años de edad');
        }else{
            if(edad>=14 && edad<=21){
                alert('Su edad està entre los 14 y 21 años de edad');
            }else{
                alert('La edad ingresada es mayor a 21');
            }
        }
    }
}

const boton = document.getElementById("btn_validar");

boton.addEventListener("click", saber_edad);