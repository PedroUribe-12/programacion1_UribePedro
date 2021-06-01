/*var apellido = 'Perez';

var apellido = 'Rodriguez';

console.log(apellido);

var numero = 0;

if(numero == 0){
    var apellido = 'Martinez';
    console.log(apellido);
}

//si yo pongo un console log, al final como uso var se se sobreescribe Martinez por Rodriguez.

console.log(apellido);
*/
//uso de let

let apellido = 'Perez';

//en caso de let no hace falta poner let para sobreescribirla
apellido = 'Rodriguez';

console.log(apellido);

var numero = 0;

if(numero == 0){
    let apellido = 'Martinez';
    console.log(apellido);
}

/*en caso de let, las variables que nacen en una condicion, funcion, etc. su ciclo de vida termina ahí,*/
console.log(apellido);

//uso de constantes

const valor = 5;/* una constante no se puede sobreescribir, solo se le puede agregar*/

const miarray = [4,15,22,54];

miarray.push(100);

console.log(miarray);
