"use strict";
// Los getters y setters son métodos especiales que nos permiten acceder y modificar los valores de los atributos de una clase.
// Para ello, debemos definirlos como propiedades de la clase, pero usando la palabra reservada get o set.
// Ejemplo 1 - Definición de getters y setters
class Animal {
    constructor(nombre, sonido) {
        this._nombre = nombre; // el guón bajo es para diferenciar el nombre de la variable de la propiedad
        this._sonido = sonido;
    }
    mover(distancia = 0) {
        console.log(`${this._nombre} se movió ${distancia}m.`);
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    get sonido() {
        return this._sonido;
    }
    set sonido(nuevoSonido) {
        this._sonido = nuevoSonido;
    }
}
const animal = new Animal('Perro', 'Guau');
console.log('animal', animal);
animal.nombre = 'Gato';
animal.sonido = 'Miau';
// otro ejemplo
class Animal2 {
    constructor(nombre, sonido) {
        this.nombre = nombre; // el guón bajo es para diferenciar el nombre de la variable de la propiedad
        this.sonido = sonido;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}
const animal22 = new Animal2('Perro', 'Guau');
console.log('animal22', animal22);
animal22.setNombre('Gato');
console.log('animal22.getNombre:', animal22.getNombre());
