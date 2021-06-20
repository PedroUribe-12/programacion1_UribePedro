let marca_de_autos = ['Ford','Renault','Volksvagen','Seat','Peugeot','Chevrolet','Fiat','Toyota','Chery'];

const mostrar_cantidad_de_marcas = () => {
    console.log(marca_de_autos.length);
}

const btn_1 = document.getElementById('btn_mostrar_cantidad');
btn_1.addEventListener('click', mostrar_cantidad_de_marcas);

const mostrar_primer_elemento = () => {
    console.log(marca_de_autos[0]);
}

const btn2 = document.getElementById('btn_mostrar_primer_marca');
btn2.addEventListener('click', mostrar_primer_elemento);

const recorrer_marcas = () => {
    marca_de_autos.forEach(element => {
        console.log(element);
    });
}

const btn3 = document.getElementById('btn_mostrar_marcas');
btn3.addEventListener('click', recorrer_marcas);

const añadir_elemento_al_final = () => {
    marca_de_autos.push('Audi');
    let nuevo_arreglo = marca_de_autos;
    console.log(nuevo_arreglo);
}

const btn4 = document.getElementById('btn_mostrar_nuevo_arreglo');
btn4.addEventListener('click', añadir_elemento_al_final);

const eliminar_ultimo_elemento = () => {
    marca_de_autos.pop(marca_de_autos[0]);
    console.log(marca_de_autos);
}

const btn5 = document.getElementById('btn_mostrar_arreglo_sin_ultimo_elemento');
btn5.addEventListener('click', eliminar_ultimo_elemento);

const anadir_elemento_al_principio = () => {
    marca_de_autos.unshift('Ferrari');
    let nuevo_arreglo2 = marca_de_autos;
    console.log(nuevo_arreglo2);
}

const btn6 = document.getElementById('btn_mostrar_nuevo_arreglo2');
btn6.addEventListener('click', anadir_elemento_al_principio);

const eliminar_elemento_del_array = () => {
    marca_de_autos.shift(marca_de_autos[0]);
    let primero =  marca_de_autos;
    console.log(primero);
}

const btn7 = document.getElementById('btn_mostrar_arreglo_sin_primer_elemento');
btn7.addEventListener('click', eliminar_elemento_del_array);

const encontrar_indice_del_elemento = () => {
    let pos = marca_de_autos.indexOf('Peugeot');
    console.log(pos);
}

const btn8 = document.getElementById('btn_mostrar_indice_del_elemento');
btn8.addEventListener('click', encontrar_indice_del_elemento);

const eliminar_elemento_a_partir_de_una_posicion = () => {
    let pos = 1;
    let numElementos = 6;

    let elementos_eliminados = marca_de_autos.splice(pos, numElementos)

    console.log(`
    elementos borrados = ${elementos_eliminados}
    elementos no borrados = ${marca_de_autos}
    `);
}

const btn9 = document.getElementById('btn_mostrar_elementos_eliminados');
btn9.addEventListener('click', eliminar_elemento_a_partir_de_una_posicion);

const copiar_arreglo = () => {
    let copia_de_marcas = marca_de_autos.slice();

    console.log(copia_de_marcas);
}

const btn10 = document.getElementById('btn_mostrar_copi_de_arreglo');
btn10.addEventListener('click', copiar_arreglo);