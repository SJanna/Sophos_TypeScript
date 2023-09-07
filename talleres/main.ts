//Otro archivo
import {Figura} from './taller5.11';

let cubo: Figura = new Figura(0, 2);
console.log('Volumen del cubo: ', cubo.calcularVolumenCubo());

let prisma: Figura = new Figura(4, 6);
console.log('Volumen del prisma: ', prisma.calcularVolumenPrisma());

let cilindro: Figura = new Figura(3,5);
console.log('Volumen del cilindro: ', cilindro.calcularVolumenCilindro());

let esfera: Figura = new Figura(0, 0, 4);
console.log('Volumen de la esfera: ', esfera.calcularVolumenEsfera());
