// Los alias en typescript son una forma de crear un tipo de dato personalizado.

// Ejemplo 1
type Second = number;
let timeInSecond: number = 10; // timeInSecond es de tipo number
let time: Second = 10; // time es de tipo Second, que es un alias de number

// Ejemplo 2
type alphanumeric = string | number;
let id: alphanumeric = 10; // id es de tipo alphanumeric
let username: alphanumeric = 'Sjanna01'; // username es de tipo alphanumeric

// Ejemplo 3
type User = { id: alphanumeric, username: alphanumeric };
let user: User = { id: 10, username: 'Sjanna01' }; // user es de tipo User