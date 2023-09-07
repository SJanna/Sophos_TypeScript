"use strict";
// Explicación del tipo de dato number: En TypeScript se puede declarar el tipo de dato de una variable, 
// en este caso se declara el tipo de dato number, y se le asigna un valor. Si se intenta asignar un valor de 
// otro tipo de dato, TypeScript mostrará un error. También se puede declarar una variable sin asignarle un valor, 
// y luego asignarle un valor, pero este valor debe ser del mismo tipo de dato que se declaró la variable.
// Declaración de tipo number
let altura = 100;
console.log('altura', altura);
// Declaración literal
let ancho = 80;
console.log('ancho', ancho);
//Reasignación a través de Clase
altura = Number('1000');
console.log('Constructor', altura);
console.log('tipo de dato', typeof altura);
