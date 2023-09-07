// Se requiere realizar una calculadora para obtener el volumen de 4 figuras sólidas,(se adjunta 
// gráfico), usando el lenguaje de programación typescript. Para ello se necesita una sola clase padre con 
// un método que sea capaz de calcular el volumen según corresponda, que estara comprendido en un 
// archivo y exportado para ser usado en cualquier lugar de un proyecto. Crear un archivo main.ts donde 
// se va a importar los respectivos recursos para crear estas 4 figuras, y obtener el volumen de las 
// mismas. 
// Adicionalmente crear el archivo de declaración de tipos (.d.ts) de forma manual y luego realizar un 
// comparación con el archivo creado con el compilador.

//Figuras: Cubo, Prisma, cilindro, Esfera

//Volumen del cubo: V = a^3
//Volumen del prisma: V = Ab * h
//Volumen del cilindro: V = Ab * h
//Volumen de la esfera: V = 4/3 * pi * r^3

export class Figura{
    areaBase?: number;
    altura?: number;
    pi?: number = 3.1416;
    radio?: number;

    constructor(areaBase?: number, altura?: number, radio?: number){
        this.areaBase = areaBase;
        this.altura = altura;
        this.radio = radio;
    }

    calcularVolumenCubo(): number{
        return Math.pow(this.altura!, 3);
    }

    calcularVolumenPrisma(): number{
        return this.areaBase! * this.altura!;
    }

    calcularVolumenCilindro(): number{
        return this.areaBase! * this.altura!;
    }

    calcularVolumenEsfera(): number{
        return (4/3) * this.pi! * Math.pow(this.radio!, 3);
    }
}

//Otro archivo
// import {Figura} from './Figura';

let cubo: Figura = new Figura(0, 2);
console.log('Volumen del cubo: ', cubo.calcularVolumenCubo());

let prisma: Figura = new Figura(4, 6);
console.log('Volumen del prisma: ', prisma.calcularVolumenPrisma());

let cilindro: Figura = new Figura(3,5);
console.log('Volumen del cilindro: ', cilindro.calcularVolumenCilindro());

let esfera: Figura = new Figura(0, 0, 4);
console.log('Volumen de la esfera: ', esfera.calcularVolumenEsfera());
