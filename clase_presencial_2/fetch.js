//uso de async y await
const obtener_pokemones = async () => {
    //buscon los pokemones a travez de una peticion HTTP
    const pokemones = await fetch('https://pokeapi.co/api/v2/pokemon');

    //almaceno los pokemones en JSON e indico que llegan en ese formato, y tambien debo utilizar await
    const data = await pokemones.json();


    //Forma moderna
    //generamos un simple array de nombres de pokemones
    const nombres_pokemones = data.results.map( (pokemon) => pokemon.name )

    //Forma tradicional
    let nombre_poke = [];
    data.results.forEach(pokemon => {
        nombre_poke.push(pokemon.name)
    });
    
    //se imprime el array de nombres construido manualmente FORMA2
    console.log(nombre_poke);

    //se imprime el array de los nombres de pokemones construido por MAP = FORMA1 
    console.log(nombres_pokemones);
}

//ejecutar la funcion de arriba
obtener_pokemones();