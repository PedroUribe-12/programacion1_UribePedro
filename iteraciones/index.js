//variable

let valor = 4;

//arreglos - bucles
const miarreglo = [4,25,'Probando'];

/*muestro valores individuales del array
console.log(miarreglo[2]);
console.log(miarreglo[0]);
*/

//recorremos todo el array - ciclo for
/*
//el in se utiliza cuando es un simple arreglo
for(indice in miarreglo){
    console.log(miarreglo[indice]);
}
*/
/*
    Array de objetos 
*/
/*
let miobjeto = {
    nombre:'Pepe',
    dni:35474674,
    correo:'pepe@gmail.com'
}
*/

//mostramos en consola una propiedad del objeto

//console.log(miobjeto.correo);


let miarreglo_objetos = [
    {
        taller:'Programación 2',
        docente:'Walter Hidalgo'
    },
    {
        taller:'Web',
        docente:'Walter Esparza'
    }
];


//primera forma
//se utiliza of cuando el array posee objetos
for(objeto of miarreglo_objetos){
    console.log(objeto.taller);
}

//segunda opción 

miarreglo_objetos.forEach(objeto => {
    console.log(`
        Taller: ${objeto.taller}
        Docente a cargo: ${objeto.docente}
    `);
});
