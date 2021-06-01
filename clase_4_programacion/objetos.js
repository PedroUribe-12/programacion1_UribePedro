// es una forma de alojar datos pero con propiedades 
const mascota = {
    nombre:'Tom',
    edad:2,
    color:'blanco',
    caracteristicas:['peludo','delgado']
};

//forma tradicional de acceder al objeto y mostrarlo 
/*const nombre = mascota.nombre;
const caracteristicas = mascota.caracteristicas[0];


console.log(mascota.nombre);
console.log(mascota.caracteristicas);
*/

//forma moderna, destructuring object
const { color,edad } = mascota;

console.log(color);
console.log(edad);

//oobjetos complejos

const web = {
    nombre:'Sitios webs',
    link:{
        enlace:'www.programacion1.com'
    },
    redes_sociales:{
        youtube:{
            enlace:'www.youtube.com',
            nombre:'Youtube'
        },
        facebook:{
            enlace:'www.facebook.com',
            nombre:'Facebook'
        }
    }
};

//mostremos utilzando el metodo tradicional
const enlace_youtube = web.redes_sociales.youtube.enlace;
const nombre_red_social = web.redes_sociales.youtube.nombre;
console.log(enlace_youtube);
console.log(nombre_red_social);

//mostramos usando destructuring object

const { enlace,nombre } = web.redes_sociales.facebook;
console.log(`Enlace: ${enlace}`);
console.log(`Red social: ${nombre}`);