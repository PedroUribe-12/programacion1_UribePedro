let vacunas = ['Pfizer','Moderna','AztraZeneca','Sinopharm','Sputnik V','Sinovac','Covishield'];

const mostrar_arreglo = () => {
    
    let tamano = vacunas.length;

    let ultimo_elemento = vacunas[tamano-1];

    let tercer_elemento = vacunas[2];

    let respuesta = (`
        La longitud del arreglo es: ${tamano}
        El ultimo elemento del arreglo es: ${ultimo_elemento}
        El tercer elemento del arreglo es: ${tercer_elemento}
    `);

    document.getElementById('parrafo').textContent = respuesta;
}

mostrar_arreglo();

const recorrer_arreglo = () => {
    
    vacunas.forEach(element => {
        console.log(element)
    });

    vacunas.push('Johnson & Johnson');

    let vacuna_eliminada = vacunas.shift();

    vacunas.unshift('Novavax');

    let cantidad_a_borrar = 2;

    let pos = 2;

    let vacunas_eliminadas_splice = vacunas.splice(pos, cantidad_a_borrar);

    const nuevas_vacunas = vacunas;

    console.log(nuevas_vacunas);

    let proceso = (`
        La vacuna agregada al final fue: ${vacunas[vacunas.length-1]}
        La vacuna eleminida fue: ${vacuna_eliminada}
        La vacuna agregada al inicio fue: ${vacunas[0]}
        Las vacunas eleminadas por el splice fueron: ${vacunas_eliminadas_splice}
    `);

    console.log(proceso);
}

const boton = document.getElementById('btn_calcular');
boton.addEventListener('click', recorrer_arreglo);
