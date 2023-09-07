class Person{
    nombre:string;
    apellidos:string;
    edad:number;
    activo?:boolean;
    constructor(nombre:string, apellidos:string, edad:number, activo?:boolean){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.edad=edad;
        this.activo=activo;
    }
}

const persona1: Person = new Person('Juan', 'Perez', 25, true);
let persona2: Person = new Person('Maria', 'Lopez', 30);

// Modificador public
// Por defecto, todas las propiedades y métodos de una clase son públicos.
// Esto significa que pueden ser accedidos desde cualquier lugar de nuestro código.

// Modificador protected
// Las propiedades y métodos marcados como protected pueden ser accedidos desde la propia clase y desde las clases que hereden de ella.
// Esto significa que no pueden ser accedidos desde fuera de la clase.

// Modificador private
// Las propiedades y métodos marcados como private solo pueden ser accedidos desde la propia clase.
// Esto significa que no pueden ser accedidos desde las clases que hereden de ella.

//Ejemplo usando los 3 tipos de modificadores

class Animal1 {
    private nombre: string;
    protected sonido: string;
    public constructor(nombre: string, sonido: string) {
        this.nombre = nombre;
        this.sonido = sonido;
    }
    public mover(distancia: number = 0) {
        console.log(`${this.nombre} se movió ${distancia}m.`);
    }
}

const animal1: Animal1 = new Animal1('Perro', 'Guau');
console.log('animal1', animal1);
// animal1.nombre = 'Gato'; // Error: 'nombre' es privado
// animal1.sonido = 'Miau'; // Error: 'sonido' es protegido
animal1.mover(10);

const animal2: Animal1 = new Animal1('Gato', 'Miau');
