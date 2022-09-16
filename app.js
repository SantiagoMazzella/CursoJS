// Array con productos

let productos = [
    {
    id: 1,
    nombre: "Remera Spider-man",
    precio: 2100,
    imagen: "./img/remera.jpg",
    },
    {
    id: 2,
    nombre: "Comic Dare Devil, Born Again",
    precio: 1500,
    imagen: "./img/bornAgain.jpg",
    },
    {
    id: 1,
    nombre: "Comic Spider-man, La ultima caceria de Kraven",
    precio: 1250,
    imagen: "./img/laUltimaCaceriaDeKraven.jpg",
    }
];
 




// Crear card por producto en array
const dibujarProductos = () => {
    let contenedor = document.getElementById("container")
    productos.forEach((producto, indice)=>{
        let card = document.createElement("div");
        card.classList.add("card", "col-sm-12", "col-lg-3");
        card.innerHTML= `<img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${producto.nombre} </h5>
          <p class="card-text"> $${producto.precio} </p>
          <a href="#" class="btn btn-dark" onClick = "agregarAlCarrito()">Agregar al carrito</a>
        </div>`
        contenedor.appendChild(card)
    });
};


let botonProductos = document.getElementById("productos")
botonProductos.addEventListener("click", dibujarProductos)

const enDesarrollo = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Seguimos desarollando!',
      })
}

// Boton sin Funcion
let botonEnDesarrollo1 = document.getElementById("botonSinFuncion1")
let botonEnDesarrollo2 = document.getElementById("botonSinFuncion2")
botonEnDesarrollo1.addEventListener("click", enDesarrollo)
botonEnDesarrollo2.addEventListener("click", enDesarrollo)

// Agregar producto al carrito
const agregarAlCarrito = () => {
    alert("producto agregado al carrito")
}

// Eliminar productos del carrito

// Finalizar compra
