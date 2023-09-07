"use strict";
// Las interfaces son una forma poderosa de definir "contratos" tanto para tu proyecto, como para el código externo del mismo.
// Sirven para definir las reglas que deben cumplir los objetos que se creen a partir de ellas.
let objeto1 = { clave: 1, valor: 'uno' };
let objeto2 = { clave: 2, valor: 'dos' };
console.log('objeto1', objeto1);
console.log('objeto2', objeto2);
let sumax = (y, x) => {
    return y + x;
};
console.log('sumax(3,6)', sumax('3', 6, ['any'])); // 36 (concatena los valores como string)
