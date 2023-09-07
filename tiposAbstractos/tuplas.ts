// Tuplas: Es un array de elementos que estan tipados
// es decir, se puede definir que tipo de datos va a contener cada elemento del array
// let tupla: [number, string, boolean];
// A diferencia de los arreglos, las tuplas tienen un número fijo de elementos,
// otra diferencia es que los elementos de las tuplas pueden tener tipos de datos diferentes.

let tupla: [number, string, boolean] = [23, 'Juan', true];

console.log('tupla', tupla);

let arregloTupla: [number, string, boolean][] = [];
// un arrelgo de tuplas es un arreglo que contiene tuplas
arregloTupla.push([1, 'a', true]);
arregloTupla.push([2, 'b', false]);
arregloTupla.push([3, 'c', true]);
console.log('arregloTupla', arregloTupla);

let tuplaMixta: [Array<number>, Array<string>, boolean] = [[1, 2, 3], ['a','b'], true];
// una tupla mixta es una tupla que contiene arreglos y otros tipos de datos
console.log('tuplaMixta', tuplaMixta);