
const numeros = [88,11,21,25,36];

const prom_arreglo = (arreglo) => {

    let suma = 0;

    let prom = 0;

    let result = '';

    if(arreglo.length === 0){
        result = 'El arreglo esta vacio';
    }else{
        numeros.forEach(element => {
        
            suma += element;  

        });

        prom = suma / numeros.length;

        result = `El promedio del arreglo es: ${prom}`;
    }

    return result;
}

const mostrar = () => {

    const resultado = prom_arreglo(numeros);

    alert(resultado);
}

const boton = document.getElementById('btn_calcular');
boton.addEventListener('click', mostrar);