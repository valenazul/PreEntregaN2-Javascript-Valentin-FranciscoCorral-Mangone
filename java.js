// Array de productos

const productos = [
    { nombre: 'Mopa', precio: 1000 },
    { nombre: 'Shampoo', precio: 2000 },
    { nombre: 'Silicona', precio: 3500 },
    { nombre: 'Cuero', precio: 5000 },
    { nombre: 'Cera', precio: 500 },
    { nombre: 'Brochas', precio: 120 }
];

let carrito = [];

// Función para agregar un producto al carrito

function agregarProducto() {
    const seleccion = prompt("Selecciona el número del producto que deseas agregar (1-6):1)Mopa precio: 1000 ,  2)Shampoo, precio: 2000 3)Silicona precio 3500 4)Cuero, precio: 5000 5)Cera precio: 500 6)Brochas precio: 120 ");
    const indice = parseInt(seleccion) - 1; 
    if (!isNaN(indice) && indice >= 0 && indice < productos.length) {
        carrito.push(productos[indice]);
        alert(`Producto agregado: ${productos[indice].nombre}`);
    } else {
        alert("Por favor, selecciona un número válido de producto.");
    }
}

// Función para finalizar la compra y mostrar el total

function finalizarCompra() {
    let total = 0;
    for (const producto of carrito) {
        total += producto.precio;
    }
    alert(`El total de la compra es: $${total}`);
}