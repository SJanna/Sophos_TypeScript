"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Otro archivo
const taller5_11_1 = require("./taller5.11");
let cubo = new taller5_11_1.Figura(0, 2);
console.log('Volumen del cubo: ', cubo.calcularVolumenCubo());
let prisma = new taller5_11_1.Figura(4, 6);
console.log('Volumen del prisma: ', prisma.calcularVolumenPrisma());
let cilindro = new taller5_11_1.Figura(3, 5);
console.log('Volumen del cilindro: ', cilindro.calcularVolumenCilindro());
let esfera = new taller5_11_1.Figura(0, 0, 4);
console.log('Volumen de la esfera: ', esfera.calcularVolumenEsfera());
