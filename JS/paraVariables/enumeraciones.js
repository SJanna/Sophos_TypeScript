"use strict";
// Las enumeraciones son un tipo de dato que permite definir un conjunto de constantes con nombre
// Definición de una enumeración
var frameworksFrontend;
(function (frameworksFrontend) {
    frameworksFrontend[frameworksFrontend["Angular"] = 0] = "Angular";
    frameworksFrontend[frameworksFrontend["React"] = 1] = "React";
    frameworksFrontend[frameworksFrontend["Vue"] = 2] = "Vue";
})(frameworksFrontend || (frameworksFrontend = {}));
console.log('frameworksFrontend', frameworksFrontend);
console.log('frameworksFrontend.Angular', frameworksFrontend.Angular); // 0, indice de la enumeración
var direcciones;
(function (direcciones) {
    direcciones[direcciones["Arriba"] = 2] = "Arriba";
    direcciones[direcciones["Abajo"] = 5] = "Abajo";
    direcciones[direcciones["Izquierda"] = 2] = "Izquierda";
    direcciones[direcciones["Derecha"] = 3] = "Derecha";
})(direcciones || (direcciones = {}));
console.log('direcciones', direcciones);
var lenguajes;
(function (lenguajes) {
    lenguajes["JavaScript"] = "JS";
    lenguajes["TypeScript"] = "TS";
    lenguajes["CoffeeScript"] = "CS";
})(lenguajes || (lenguajes = {}));
console.log('lenguajes', lenguajes);
var respuesta;
(function (respuesta) {
    respuesta[respuesta["No"] = 0] = "No";
    respuesta["Si"] = "Afirmativo";
})(respuesta || (respuesta = {}));
console.log('respuesta', respuesta);
