const mensaje = (numero) => {
    // let texto = 'El resultado de la suma es: '+numero; forma antigua de concatenar un string
    let texto = `El resultado de la suma es: ${numero}`;
    return texto;
}

//aca se ejecuta la funcion e inmediatamente nos entrega una resuesta
const respuesta = mensaje(25);
console.log(respuesta);

