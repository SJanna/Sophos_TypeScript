abstract class Operacion {
    public valor1: number;
    public valor2: number;
    public valor3: number = 0;

    constructor(valor1: number, valor2: number) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    abstract operar(): void; // El método pertenece a esta clase pero no sabemos qué va a hacer, por eso es abstracto

    imprimir()  {
        console.log('Resultado: ', this.valor3);
    }
}

class Suma extends Operacion {
    constructor(valor1: number, valor2: number) {
        super(valor1, valor2);
    }
    operar() {
        this.valor3 = this.valor1 + this.valor2;
    }
}

let suma1: Suma = new Suma(10, 5);
suma1.operar();
suma1.imprimir();