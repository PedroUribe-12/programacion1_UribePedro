export default class Ohm {

    constructor() {
        
    }

    calcular_tension(i,r){
        //La tension se calcula como: I * R
        this.intensidad = i;
        this.resistencia = r;
        const resultado_tension = this.intensidad * this.resistencia;

        //entregar una respuesta
        return resultado_tension;
    }

    calcular_corriente(v,r){

        //La corriente se calcula como: v / R
        const resultado_corriente = v / r;

        return resultado_corriente;
    }
}