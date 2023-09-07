"use strict";
// Parte 1
let variable1 = "Curso Typescript";
let variable2;
variable2 = [1, 3, 5, 7];
const variable3 = ['futbol', 45, false, [3, 'basket', 5]];
let variable4 = ['Hola', 'Mundo', 'desde', 'Typescript'];
// Parte 2
//1
const phoneNumber = '0999999999';
console.log('mi numero de telefono es:', phoneNumber);
//2
let booleano;
let booleano2 = true;
console.log('entontré el error antes tenia:', booleano, 'y ahora tengo:', booleano2);
//3
let varNula = null;
console.log('No entiendo por que mi variable está:', typeof varNula);
//4
let numero3 = '12345';
let numero4 = numero3;
console.log(`Que ventaja antes tenía: "${numero3}" \nLo pude convertir a: ${numero4}`);
//5
let listaVariables = ['archivo', 404, true];
console.log('Mi lista de variables son:', listaVariables);
//6
var Posicion;
(function (Posicion) {
    Posicion[Posicion["Arriba"] = 10] = "Arriba";
    Posicion["Abajo"] = "Abajo";
    Posicion[Posicion["Derecha"] = 1] = "Derecha";
    Posicion[Posicion["Izquierda"] = 2] = "Izquierda";
})(Posicion || (Posicion = {}));
;
console.log('Quiero saber cual es Posicion.Arriba de mi objeto:', Posicion.Arriba);
//7
console.log('Imprimir Posicion.Abajo de mi segundo objeto:', Posicion.Abajo);
