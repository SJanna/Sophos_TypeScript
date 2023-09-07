// Las interfaces son una forma poderosa de definir "contratos" tanto para tu proyecto, como para el código externo del mismo.
// Sirven para definir las reglas que deben cumplir los objetos que se creen a partir de ellas.

// Ejemplo 1 - Definición de una interfaz
interface IEmpleado {
    id: number;
    nombre: string;
    apellidos: string;
    edad?: number; // El signo ? indica que el campo es opcional
    activo: boolean;
}

// Ejemplo 2 - Interfaz como tipo de dato
interface claveValor {
    clave: number;
    valor: string;
}

let objeto1: claveValor = { clave: 1, valor: 'uno' };
let objeto2: claveValor = { clave: 2, valor: 'dos' };
console.log('objeto1', objeto1);
console.log('objeto2', objeto2);

// Ejemplo 3 - Interfaz como tipo de dato para una función
interface IFuncion {
    (a: string, b: number, c:any): string;
}

let sumax:IFuncion= (y: string, x:number): string => { //
    return y + x;
}

console.log('sumax(3,6)', sumax('3', 6,['any'])); // 36 (concatena los valores como string)

