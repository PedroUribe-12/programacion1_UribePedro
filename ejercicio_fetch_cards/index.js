const mostrar_catalogo = async () => {
    const resultado = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
    
    const datos = await resultado.json();

    const total_columnas = [];

    datos.forEach(element => {
        
        console.log(element);

        const columna = `
        <div class="col-lg-3">
            <div class="card">
                <img src="${element.url}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <button class="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>
        </div>
        `
        
        total_columnas.push(columna);

    });

    document.getElementById('row_1').innerHTML = total_columnas.join('');



}

const boton = document.getElementById('btn_mostrar');

boton.addEventListener('click', mostrar_catalogo);