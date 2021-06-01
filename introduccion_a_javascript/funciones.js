//fucion normal, los () parentesis se les llama el argumento de la funcion
function sumar(){
    console.log('la suma de 2 + 2 = 4');
}


//-----------------------------------------------------------------------------------------------

//funcion flecha, no se necesita la palabra function
const restar = () => console.log('8');


//------------------------------------------------------------------------------------------------

//funcion flecha, se utiliza la llave, ya que hay mas de una instruccion dentro de la funcion

const producto = () => {
    alert('Hola mundo');
    alert('Me llamo Pedro');
}


const operar = (dato1,dato2) => {
    let sumatoria = dato1+dato2;
    console.log(sumatoria);
}

