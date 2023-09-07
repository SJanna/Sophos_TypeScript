"use strict";
// Crear un módulo
// Para crear un módulo, se utiliza la palabra reservada export. Por ejemplo:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}
exports.Persona = Persona;
