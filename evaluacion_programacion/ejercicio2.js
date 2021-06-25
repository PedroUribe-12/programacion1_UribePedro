const tecnologías = {
    titulo: 'Frameworks utilizados en la actualidad',
    framework_1: {
        nombre: 'Angular',
        caracteristicas: {
            lenguaje: 'TypeScript',
            patron: 'MVVM',
            spa: 'si'
        },
    },
    framework_2: {
        nombre: 'React',
        caracteristicas: {
            lenguaje:'JSX',
            patron: 'Flux',
            spa:'si'
        },
    },
    framework_3: {
        nombre: 'VueJS',
        caracteristicas: {
            lenguaje: 'JavaScript',
            patron: 'MVC',
            spa: 'si'
        },
    },
}

const mostrar_datos = () => {

    let mensaje1 = [];

    let parrafo1 = `
        Nombre: ${tecnologías.framework_1.nombre}<br/>
        Caracteristicas:<br/>
        Lenguaje: ${tecnologías.framework_1.caracteristicas.lenguaje}<br/>
        Patron : ${tecnologías.framework_1.caracteristicas.patron}<br/>
        Spa: ${tecnologías.framework_1.caracteristicas.spa}
    
    `

    mensaje1.push(parrafo1);
    document.getElementById('parrafo').innerHTML = mensaje1;

    let mensaje2 = [];

    let parrafo2 = `
        Nombre: ${tecnologías.framework_2.nombre}<br/>
        Caracteristicas:<br/>
        Lenguaje: ${tecnologías.framework_2.caracteristicas.lenguaje}<br/>
        Patron : ${tecnologías.framework_2.caracteristicas.patron}<br/>
        Spa: ${tecnologías.framework_2.caracteristicas.spa}
    `

    mensaje2.push(parrafo2);
    document.getElementById('parrafo2').innerHTML = mensaje2;

    let mensaje3 = [];

    let parrafo3 = `
        Nombre: ${tecnologías.framework_3.nombre}<br/>
        Caracteristicas:<br/>
        Lenguaje: ${tecnologías.framework_3.caracteristicas.lenguaje}<br/>
        Patron : ${tecnologías.framework_2.caracteristicas.patron}<br/>
        Spa: ${tecnologías.framework_3.caracteristicas.spa}
    `
    mensaje3.push(parrafo3);
    document.getElementById('parrafo3').innerHTML = mensaje3;
}

const boton = document.getElementById('btn_mostrar');
boton.addEventListener('click', mostrar_datos);