const ley_ohm = () => {

    const metodo_calcular = document.querySelector("#slt_que_calcular").value;

    const dato1 = document.querySelector("#inp_1").value;

    const dato2 = document.querySelector("#inp_2").value;

    const parrafo = document.querySelector("#parrafo");

    if(metodo_calcular == 0){
        const resultado = dato1 / dato2;
        parrafo.textContent = `La Intensidad es = ${resultado}`; 
    }else{
        if(metodo_calcular == 1){
            const resultado = dato1 * dato2;
            parrafo.textContent = `La Tensión es = ${resultado}`;
        }else{
            const resultado = dato1 / dato2;
            parrafo.textContent = `La Resistencia es = ${resultado}`;
        }
    }
}

const cambiar_label = () =>{

    let metodo_calcular = document.querySelector("#slt_que_calcular").value;

    const label_1 = document.querySelector("#lb_1");
    const label_2 = document.querySelector("#lb_2");

    if(metodo_calcular == 0){
        label_1.textContent = 'Voltaje';
        label_2.textContent = 'Resistencia';
    }else{
        if(metodo_calcular == 1){
            label_1.textContent = 'Intensidad';
            label_2.textContent = 'Resistencia';
        }else{
            label_1.textContent = 'Voltaje';
            label_2.textContent = 'Intensidad';
        }
    }


}

const metodo_calcular = document.querySelector("#slt_que_calcular");

metodo_calcular.addEventListener("click", cambiar_label);

const btn_calcular = document.querySelector("#btn_calcular");

btn_calcular.addEventListener("click", ley_ohm);