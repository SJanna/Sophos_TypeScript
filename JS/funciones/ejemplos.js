"use strict";
// Las funciones son un bloque de codigo que se puede ejecutar en cualquier momento
// En TypeScript las funciones pueden ser creadas con la palabra reservada function.
// Ejemplo 1
function suma(a, b) {
    return a + b;
}
console.log('Función suma(3,6)', suma(3, 6));
// Ejemplo 2 - Función con parametros por defecto o opcionales
function multiplicacion(a, b = 10) {
    return a * b;
}
console.log('Función multiplicacion(3)', multiplicacion(3));
console.log('Función multiplicacion(3,5)', multiplicacion(3, 5));
// Ejemplo 3 - Función con parametros REST (parametros infinitos o indeterminados)
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function sumar(a, b, ...c) {
    let resultado = a + b;
    c.forEach((numero) => {
        resultado += numero;
    });
    return resultado;
}
console.log('Función sumar(3,6)', sumar(3, 6));
console.log('Función sumar(3,6,9,10,3)', sumar(3, 6, 9, 10, 3));
// Ejemplo 4 - Función Flecha
// Las funciones flecha son una forma abreviada de escribir una función en TypeScript
// Las funciones flecha no crean su propio contexto de this, sino que capturan el contexto de this actual
// de la forma en que se define la función.
// Las funciones flecha son siempre funciones anónimas, por lo que no pueden ser llamadas directamente.
// Sin embargo, pueden ser utilizadas como valores de llamada de otras funciones.
// Las funciones flecha no tienen su propio objeto arguments.
// Las funciones flecha no pueden ser utilizadas como constructores y no tienen prototipos.
// Las funciones flecha no pueden utilizar yield, dentro de sus funciones generadoras.
// Las funciones flecha no pueden ser llamadas con new.
// Las funciones flecha no pueden ser utilizadas como métodos de un objeto.
// Las funciones flecha no pueden cambiar su contexto de this.
// Las funciones flecha no pueden utilizar super, super.prop o super[expr].
let sumarFlecha = (a, b) => {
    return a + b;
};
console.log('Función sumarFlecha(3,6)', sumarFlecha(3, 6));
// Ejemplo 5 - Funciones integradas
let aviso = alert('Esto es un aviso');
console.log(aviso);
let confirmacion = confirm('¿Estas seguro?');
console.log(confirmacion);
let ingreso = prompt('¿Cual es tu nombre?');
console.log(ingreso);
// Ejemplo 6 - Funciones de flecha integradas / sin parametros
let avisoFlecha = () => alert('Esto es un aviso flecha');
avisoFlecha();
