// Las enumeraciones son un tipo de dato que permite definir un conjunto de constantes con nombre

// Definición de una enumeración
enum frameworksFrontend { Angular, React, Vue }

console.log('frameworksFrontend', frameworksFrontend);
console.log('frameworksFrontend.Angular', frameworksFrontend.Angular);// 0, indice de la enumeración


enum direcciones { Arriba = 2, Abajo=5, Izquierda=2, Derecha }
console.log('direcciones', direcciones);

enum lenguajes { JavaScript = 'JS', TypeScript = 'TS', CoffeeScript = 'CS' }
console.log('lenguajes', lenguajes);

enum respuesta { No = 0, Si = 'Afirmativo' }
console.log('respuesta', respuesta);