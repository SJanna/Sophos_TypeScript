"use strict";
class Figura2 {
    getarea() {
        return this.area;
    }
    getperimetro() {
        return this.perimetro;
    }
}
class Cuadrado extends Figura2 {
    constructor(lado) {
        super();
        this.lado = lado;
        this.volumen = 8;
    }
}
let cuadrado1 = new Cuadrado(5);
