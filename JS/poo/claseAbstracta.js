"use strict";
class Operacion {
    constructor(valor1, valor2) {
        this.valor3 = 0;
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    imprimir() {
        console.log('Resultado: ', this.valor3);
    }
}
class Suma extends Operacion {
    constructor(valor1, valor2) {
        super(valor1, valor2);
    }
    operar() {
        this.valor3 = this.valor1 + this.valor2;
    }
}
let suma1 = new Suma(10, 5);
suma1.operar();
suma1.imprimir();
