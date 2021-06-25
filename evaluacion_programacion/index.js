let lenguajes = ['Python' , 'JavaScript' , 'Csharp' , 'C++' , 'Java' , 'PHP' , 'Ruby'];

const recorrer_arreglo = () => {

    lenguajes.forEach(element => {
        console.log(element);
    });

    lenguajes.push('Go');

    lenguajes.shift();

    lenguajes.unshift('Kotlin');

    let cantidad_a_borrar = 2;

    let pos = 4;

    lenguajes.splice(pos, cantidad_a_borrar);
    
    console.log(lenguajes);

}

const mostrar_parrafo = () => {
    let longitud = lenguajes.length;

    let ultimo_elemento = lenguajes[longitud-1];

    let tercer_elemento = lenguajes[2];

    let mensaje = [];

    let resultado = `
    <p>
        La longitud del arreglo es: ${longitud}<br/>
        El ultimo elemento del arreglo es: ${ultimo_elemento}<br/>
        El tercer elemento del arreglo es: ${tercer_elemento}
    </p>
    `;

    mensaje.push(resultado);

    document.getElementById('parrafo').innerHTML = mensaje.join('');

    recorrer_arreglo();
    
}
const boton = document.getElementById('btn_mostrar');
boton.addEventListener('click', mostrar_parrafo);

