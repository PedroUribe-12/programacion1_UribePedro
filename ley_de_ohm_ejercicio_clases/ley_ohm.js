export default class Ohm {

    dato1;
    dato2;
    tension;
    corriente;
    resistencia;

    constructor (d1,d2) {
        this.dato1 = d1;
        this.dato2 = d2
    }

    calcularTension(){
        this.tension = this.dato1 * this.dato2;
        console.log(`La tension es: ${this.tension}`);
    }

    calcularCorriente(){
        this.corriente = this.dato1 / this.dato2;
        console.log(`La corriente es: ${this.corriente}`);
    }
    
    calcularResistencia(){
        this.resistencia = this.dato1 / this.dato2;
        console.log(`La resistencia es: ${this.resistencia}`);
    }
}

