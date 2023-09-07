// Declarar un interface llamado ‘Producto’ que incluya:  Nombre: string  Precio: number  Oferta: boolean opcional 
// Crear un producto ‘armario’ que valga 150$ y otro ‘silla’, que valga 50$ y esté de oferta. 
// Crear una función precioConIva que tenga como parámetro un ‘Producto’, que devuelva un number y 
// que lo que devuelva sea el precio del producto multiplicado por 1.21

interface Producto {
    nombre: string;
    precio: number;
    oferta?: boolean;
}

let armario: Producto = { nombre: 'armario', precio: 150 };
let silla: Producto = { nombre: 'silla', precio: 50, oferta: true };

function precioConIva(producto: Producto): number {
    return producto.precio * 1.21;
}

console.log('precioConIva(armario)', precioConIva(armario));