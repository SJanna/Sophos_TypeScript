"use strict";
// Los arreglos en TypeScript son muy similares a los arreglos en JavaScript, pero en TypeScript se pueden declarar 
// los tipos de datos que se van a almacenar en el arreglo, y si se intenta almacenar un tipo de dato diferente,
// TypeScript mostrará un error.
// // Declaración de un arreglo de tipo string
let frutas = ['Pera', 'Manzana', 'Plátano', 'Fresa', 'Durazno', 'Uva', 'Sandía', 'Melón', 'Mango', 'Kiwi'];
let colores = ['Rojo', 'Azul', 'Verde'];
// Buquedas en arreglos, buqles, for each, for in, for of, map, filter, reduce, etc.
for (let i = 0; i < frutas.length; i++) {
    console.log('for', frutas[i]);
}
console.log('------------------------');
for (const index in colores) {
    console.log('for in', colores[index]);
}
colores.pop();
colores.push('Amarillo');
console.log('resultado', colores);
