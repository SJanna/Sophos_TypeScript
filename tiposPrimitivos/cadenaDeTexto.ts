// Explicación del código: Ejemplo de cadena de texto en TypeScript, se puede usar comillas simples o dobles,
// pero no se puede usar comillas simples dentro de comillas simples, ni comillas dobles dentro de comillas dobles,
// para eso se usan las diagonales invertidas. También se pueden usar las diagonales invertidas para incluir variables
// dentro de una cadena de texto, para eso se usan las comillas diagonales invertidas.


const cadena: String = "Hola Mundo";
const numero: Number = 12;
const cadena2: String = `Cadena usando las comillas diagonales para incluir variables. variable: ${cadena}, otra variable: ${numero}`

console.log(cadena2);


const cadenasUnidas: String = cadena + ' ' + cadena2

console.log('Cadenas Unidas: ', cadenasUnidas);

console.log('UPPERCASE CADENA: ', cadena2.toUpperCase())