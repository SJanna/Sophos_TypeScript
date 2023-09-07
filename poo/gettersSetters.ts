// Los getters y setters son métodos especiales que nos permiten acceder y modificar los valores de los atributos de una clase.
// Para ello, debemos definirlos como propiedades de la clase, pero usando la palabra reservada get o set.

// Ejemplo 1 - Definición de getters y setters
class Animal {
    private _nombre: string;
    private _sonido: string;
    public constructor(nombre: string, sonido: string) {
        this._nombre = nombre;// el guón bajo es para diferenciar el nombre de la variable de la propiedad
        this._sonido = sonido;
    }
    public mover(distancia: number = 0) {
        console.log(`${this._nombre} se movió ${distancia}m.`);
    }
    get nombre(): string {
        return this._nombre;
    }
    set nombre(nuevoNombre: string) {
        this._nombre = nuevoNombre;
    }
    get sonido(): string {
        return this._sonido;
    }
    set sonido(nuevoSonido: string) {
        this._sonido = nuevoSonido;
    }
}

const animal: Animal = new Animal('Perro', 'Guau');
console.log('animal', animal);
animal.nombre = 'Gato';
animal.sonido = 'Miau';

// otro ejemplo

class Animal2 {
    private nombre: string;
    private sonido: string;
    public constructor(nombre: string, sonido: string) {
        this.nombre = nombre;// el guón bajo es para diferenciar el nombre de la variable de la propiedad
        this.sonido = sonido;
    }
    getNombre(): string {
        return this.nombre;
    }
    setNombre(nuevoNombre: string) {
        this.nombre = nuevoNombre;
    }

}

const animal22: Animal2 = new Animal2('Perro', 'Guau');
console.log('animal22', animal22);
animal22.setNombre('Gato');
console.log('animal22.getNombre:', animal22.getNombre());