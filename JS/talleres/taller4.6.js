"use strict";
// Declarar un interface llamado ‘Producto’ que incluya:  Nombre: string  Precio: number  Oferta: boolean opcional 
// Crear un producto ‘armario’ que valga 150$ y otro ‘silla’, que valga 50$ y esté de oferta. 
// Crear una función precioConIva que tenga como parámetro un ‘Producto’, que devuelva un number y 
// que lo que devuelva sea el precio del producto multiplicado por 1.21
let armario = { nombre: 'armario', precio: 150 };
let silla = { nombre: 'silla', precio: 50, oferta: true };
function precioConIva(producto) {
    return producto.precio * 1.21;
}
console.log('precioConIva(armario)', precioConIva(armario));
