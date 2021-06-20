var mis_tareas = [
    {
        tarea:'Trabajo Práctico de matemáticas',
        tiempo:'15min'
    },

    {
        tarea:'TP Evaluativo Prog. 1',
        tiempo:'1:20HS'
    }

];

const listar_tareas = () => {

    let lista_de_items = [];

    mis_tareas.forEach(element => {
        
        let item = `
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${element.tarea}</div>
            </div>
            <span class="badge bg-primary rounded-pill">${element.tiempo}</span>
        </li>
        `;

        lista_de_items.push(item);

    });

    document.getElementById('mis_tareas').innerHTML = lista_de_items.join('');
}

const guardar = () => {
    //Acá guardaremos nuevas tareas

    const inp_tareas = document.getElementById('inp_tareas').value;
    const inp_tiempo = document.getElementById('inp_tiempo').value;

    const nueva_tarea = {
        tarea:inp_tareas,
        tiempo:inp_tiempo
    }

    mis_tareas.push(nueva_tarea);

    listar_tareas();

}

//Acá obtenemos el bototn a travéz de su ID
const btn = document.getElementById('btn_guardar');
//Al hacer click sobre el mismo, se ejecutará la función Guardar
btn.addEventListener('click', guardar);