// Undefined, NULL y never
// Se muestran errores en el IDE ya que el archivo tsconfig.json tiene la propiedad "strict": true.
// Si se cambia a "strict": false, no se mostrarán errores en el IDE.


let cadenaTexto: string;
console.log('cadenaTexto', cadenaTexto); 
//Undefined porque no se declaró pero no se le ha asignado un valor.
console.log('typeof cadenaTexto', typeof cadenaTexto); // Tipo de dato undefined


let numero1: number = null;
console.log('numero1', numero1);
// Null porque se le asignó un valor nulo, por lo que es un objeto vacío.
console.log('typeof numero1', typeof numero1); // Tipo de dato object


let error =(): never => {
    throw new Error();
}
// El tipo never sirve para cuando una función nunca va a retornar un valor, por ejemplo, cuando se lanza un error.
// En este caso, la función error nunca va a retornar un valor, porque siempre va a lanzar un error.