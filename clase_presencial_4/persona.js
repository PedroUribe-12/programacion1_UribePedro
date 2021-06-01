class Persona {

    //declarando los atributos de la clase
    dni;
    edad;
    fecha_nacimiento;

    //el constructor se ejecuta cuando se crea la instancia de la clase
    constructor(nombre,apellido){
        //console.log('Ejecutando el constructor');

        this.nombre = nombre;
        this.apellido = apellido;
    }

    //Metodo de la clase
    caminar(){
        console.log('Caminando...');
    }



    mostrar_datos_personales(){
        console.log(this.nombre + ',  '+ this.apellido);
        console.log(this.dni);
    }

}

//voy a crear la instancia de la clase
//atravez de la instancia podemos acceder a los metodos y atributos de una Clase
const persona = new Persona('Pepe','Argento');


//se invoca el metodo caminar()
persona.caminar();

persona.dni = '84738847';

//se invoca el metodo mostrar_datos...()
persona.mostrar_datos_personales();
