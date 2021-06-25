const productos = {
    compania: 'Google',
    productos:{
        oficce:{
            prod1: 'Google Docs',
            prod2: 'Google Sheets',
            prod3: 'Google Slides'
        }, 
        general:{
            prod1: 'Youtube',
            prod2: 'Google Drive',
            prod3: 'Google Meet'
        }
    }
}

const google_ofimaticos = () => {

    let producto1 = productos.productos.oficce.prod1;
    let producto2 = productos.productos.oficce.prod2;
    let producto3 = productos.productos.oficce.prod3;

    let mensaje = [];

    let mostrar = `
        Los productos ofimaticos son: <br/>
        ${producto1}<br/>
        ${producto2}<br/>
        ${producto3}<br/>
    `;
    mensaje.push(mostrar);
    document.getElementById('parrafo1').innerHTML = mensaje.join('');
}

const btn_ofimaticos = document.getElementById('btn_ofimaticos');
btn_ofimaticos.addEventListener('click', google_ofimaticos);

const google_generales = () => {

    let producto1 = productos.productos.general.prod1;
    let producto2 = productos.productos.general.prod2;
    let producto3 = productos.productos.general.prod3;

    let mensaje = [];

    let mostrar = `
        Los productos ofimaticos son: <br/>
        ${producto1}<br/>
        ${producto2}<br/>
        ${producto3}<br/>
    `;

    mensaje.push(mostrar);
    document.getElementById('parrafo2').innerHTML = mensaje.join('');
}

const btn_generales = document.getElementById('btn_generales');
btn_generales.addEventListener('click', google_generales);