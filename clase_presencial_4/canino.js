export default class Canino {

    constructor(raza,peso,vac){
        this.raza = raza;
        this.peso = peso;
        this.vac = vac;        
    }

    guradar_canino(){
        //identificar un elemento por id
        document.querySelector("#p_datos").innerHTML = `
        
            Raza: ${this.raza};
            Peso: ${this.peso};
            vacunación: ${this.vac};
        `
    }
}

//visibilizo la clase canino




