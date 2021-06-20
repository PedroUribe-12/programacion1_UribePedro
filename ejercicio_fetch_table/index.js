const mostrar_datos_usuarios = async () => {

    const info = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await info.json();

    const total_filas = [];

    data.forEach(element => {

        let nombre_usuario = element.username;
        let correo = element.email;
        let telefono = element.phone;

        let fila = `
            <tr>
                <td>${nombre_usuario}</td>
                <td>${correo}</td>
                <td>${telefono}</td>
            </tr>
        `;

        total_filas.push(fila);
        
    });

    document.getElementById('td_body').innerHTML = total_filas.join('');
}

const btn = document.getElementById('btn_mostrar');

btn.addEventListener('click', mostrar_datos_usuarios);