"use strict";
// las aserciones de tipo son una forma de decirle al compilador de TypeScript
// que confíe en nosotros y que el tipo de dato que estamos usando es el correcto.
// Ejemplo 1 - any
let nombreUsuario;
nombreUsuario = 'Sjanna01';
nombreUsuario = 12345;
let nombreUsuario2 = nombreUsuario;
let nombreUsuario3 = nombreUsuario;
console.log('nombreUsuario2', nombreUsuario2);
console.log('nombreUsuario3', nombreUsuario3);
// Aunque e indique que nombeUsuario3 es de tipo number, si la varible nombreUsuario
//es de tipo string el tipo de dato de nombreUsuario3 será string.
