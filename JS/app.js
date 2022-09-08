class Productos {
    constructor(articulo, precio){
        this.articulo = articulo
        this.precio = precio
    }

}

const carrito = []

function agregarProducto (carrito) {
    const articulo = prompt(`¿Que articulo desea comprar?`);
    const precio = Number(prompt(`¿De que valor?`));

    const nuevoProducto = new Productos (articulo, precio);

    carrito.push(nuevoProducto);
}

function mostrarCarrito () {
    carrito.forEach(producto => {
        console.log(`${producto.articulo}: ${producto.precio}`)
    });
}



 function totalCarrito () {
    const total = carrito.reduce((acc, el) => acc + el.precio ,0)

    alert(`Gracias por su compra, su total es de ${total}`)
 }

 let opcion = prompt("Que desea realizar? \n 1. Elegir prenda \n 2. Finalizar compra \n 3. ver carrito (f12) \n 4. finalizar");

 while(opcion !== "4" ) {
    if (opcion == "1") {
        agregarProducto(carrito);
        alert("Prenda agregada al carrito!")
    }
    if (opcion == "2") {
        totalCarrito(carrito);
    }
    if (opcion == "3") {
        mostrarCarrito(carrito);
    }
    opcion = prompt("Que desea realizar? \n 1. Elegir prenda \n 2. Finalizar compra \n 3. ver carrito (f12) \n 4. finalizar")
 }