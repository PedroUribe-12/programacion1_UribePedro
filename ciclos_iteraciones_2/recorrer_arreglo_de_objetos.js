const recorrer_objetos = () => {
    let misobjetos = [
        {
            nombre:'Pepe',
            apellido:'Argento'
        },
        {
            nombre:'Juan',
            apellido:'Perez'
        }
    ]

    misobjetos.forEach(element => {
        console.log(`
            Mi Nombre es: ${element.nombre}
            Mi Apellido es: ${element.apellido}
        `);
    });
}

const boton3 = document.getElementById("btn_recorrer_arreglo_objetos");

boton3.addEventListener("click", recorrer_objetos);