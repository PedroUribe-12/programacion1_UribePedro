//objetos complejos 

const web = {
    nombre:'Sitio Webs',
    enlace:'www.programacion.com',
    redes_sociales:{
        facebook:'www.facebook.com',
        youtube:'www.youtube.com'
    }
}

//forma tradicional

const youtube_tradicional = web.redes_sociales.youtube;
const facebook_tradicional = web.redes_sociales.facebook;
const enlace_tradicional = web.enlace;

console.log(enlace_tradicional);
console.log(youtube_tradicional);
console.log(facebook_tradicional);


//forma moderna

const { facebook,youtube } = web.redes_sociales;

//comillas invertidas ``, termino tecnico backtick

console.log(`Forma moderna, Enlace: ${facebook}
Forma moderna, Enlace: ${youtube}`);



