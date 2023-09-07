"use strict";
class Automovil {
    static acelerar() {
        console.log('Acelerando...');
    }
}
Automovil.kmRecorridos = 0;
let auto = new Automovil();
// auto.kmRecorridos = 10; // kmRecorridos es una propiedad estática, por lo que no se puede acceder a ella a través de una instancia
Automovil.kmRecorridos = 200; // kmRecorridos es una propiedad estática, por lo que se accede a ella a través de la clase
Automovil.acelerar(); // acelerar es un método estático, por lo que se accede a él a través de la clase
