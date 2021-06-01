const btn_mostrar = document.getElementById('btn_mostrar');

const mostrar_usuarios = async () => {
    
    const ul = document.getElementById('ul_usuarios');

    const respuesta = await fetch ('https://jsonplaceholder.typicode.com/users');

    const data = await respuesta.json();

    const total_items = [];

    data.forEach( element => {
        
        let name = element.name;

        //conformamos un item con el nombre del usuario 
        let item = `<li class="list-group-item">${name}</li>`;

        //llenamos el array con un item
        total_items.push(item);
        
    });
    //llenamos el ul usando innerHTML. Pero aplicamos un .join para eliminar las comillas al array total_items.
    ul.innerHTML = total_items.join('');
    console.log(total_items);
}

btn_mostrar.addEventListener('click', mostrar_usuarios)