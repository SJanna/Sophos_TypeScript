// Parte 1
let variable1: string = "Curso Typescript";
let variable2: Array<number>; 
variable2 = [ 1, 3 ,5, 7] 
const variable3:[string, number, boolean, [number, string,number]] = ['futbol', 45, false, [3, 'basket', 5]];
let variable4:String[] = [ 'Hola', 'Mundo', 'desde', 'Typescript']

// Parte 2
//1
const phoneNumber: string = '0999999999';
console.log('mi numero de telefono es:', phoneNumber);

//2
let booleano: boolean;
let booleano2: boolean = true;
console.log('entontré el error antes tenia:', booleano, 'y ahora tengo:', booleano2);

//3
let varNula:number= null;
console.log('No entiendo por que mi variable está:', typeof varNula);

//4
let numero3: any = '12345';
let numero4: number = <number>numero3;
console.log(`Que ventaja antes tenía: "${numero3}" \nLo pude convertir a: ${numero4}`);

//5
let listaVariables: any[] = ['archivo', 404, true];
console.log('Mi lista de variables son:', listaVariables);

//6
enum Posicion {Arriba=10, Abajo="Abajo", Derecha=1, Izquierda=2};
console.log('Quiero saber cual es Posicion.Arriba de mi objeto:', Posicion.Arriba);

//7
console.log('Imprimir Posicion.Abajo de mi segundo objeto:', Posicion.Abajo);

