// Array con productos

let productos = [
    {
    id: 1,
    categoria: "remeras",
    nombre: "Remera Spider-man",
    precio: 2100,
    imagen: "./img/remera.jpg",
    },
    {
    id: 2,
    categoria: "remeras",
    nombre: "Remera Spider-man",
    precio: 2100,
    imagen: "./img/remera.jpg",
    },
    {
    id: 3,
    categoria: "remeras",
    nombre: "Remera Spider-man",
    precio: 2100,
    imagen: "./img/remera.jpg",
    },
    {
    id: 4,
    categoria: "comics",
    nombre: "Comic Dare Devil, Born Again",
    precio: 1500,
    imagen: "./img/bornAgain.jpg",
    },
    {
    id: 5,
    categoria: "comics",
    nombre: "Comic Dare Devil, Born Again",
    precio: 1500,
    imagen: "./img/bornAgain.jpg",
    },
    {
    id: 6,
    categoria: "comics",
    nombre: "Comic Dare Devil, Born Again",
    precio: 1500,
    imagen: "./img/bornAgain.jpg",
    },
    {
    id: 7,
    categoria: "comics",
    nombre: "Comic Dare Devil, Born Again",
    precio: 1500,
    imagen: "./img/bornAgain.jpg",
    },
    {
    id: 8,
    categoria: "comics",
    nombre: "Comic Spider-man, La ultima caceria de Kraven",
    precio: 1250,
    imagen: "./img/laUltimaCaceriaDeKraven.jpg",
    },
    {
    id: 9,
    categoria: "comics",
    nombre: "Comic Spider-man, La ultima caceria de Kraven",
    precio: 1250,
    imagen: "./img/laUltimaCaceriaDeKraven.jpg",
    },
    {
    id: 10,
    categoria: "comics",
    nombre: "Comic Spider-man, La ultima caceria de Kraven",
    precio: 1250,
    imagen: "./img/laUltimaCaceriaDeKraven.jpg",
    }
];
 
// const productoStr = JSON.stringify(productos)
// localStorage.setItem("productos", productoStr)





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
          <a href="#" class="btn btn-dark" onClick = "agregarAlCarrito(${indice})">Agregar al carrito</a>
        </div>`
        contenedor.appendChild(card)
    });
};

dibujarProductos();


const enDesarrollo = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Seguimos desarollando!',
      })
}

// Boton sin Funcion

let botonEnDesarrollo = document.querySelector("#botonSinFuncion")
let botonEnDesarrollo2 = document.querySelector("#botonSinFuncion2")

botonEnDesarrollo2.addEventListener("click", enDesarrollo)
botonEnDesarrollo.addEventListener("click", enDesarrollo)

// Agregar producto al carrito
const carrito = []



function guardarLocalStorage(){
    miLocalStorage.setItem("carrito", JSON.stringify(carrito));
    

    if (carrito === "") {
        
        dibujarCarrito();
    }
    
}

// const productosEnCarrito = carrito.length

// let cantidadCarrito = document.querySelector("#botonCarrito")

// cantidadCarrito.textContent=`${productosEnCarrito}`


let total = 0;
let modalCarrito =document.getElementById("carritoDeCompras")

const miLocalStorage = window.localStorage;

const copiaDeSeguridad = localStorage.getItem("carrito");
console.log(JSON.parse(copiaDeSeguridad));

const dibujarCarrito = () => {
    modalCarrito.className="baseCarrito"
    modalCarrito.innerHTML= "";
    if (carrito.length > 0) {
        carrito.forEach((producto, indice) => {
            total = total + producto.precio * producto.cantidad;
            let carritoContainer = document.createElement("div");
            carritoContainer.className = "producto-carrito";
            carritoContainer.innerHTML=` 
            <img class="carrito-img" src="${producto.imagen}"/>
            <div class="product-details"> producto: ${producto.cantidad}
            <div class="product-details"> precio: ${producto.precio}
            <div class="product-details"> subtotal: ${producto.precio * producto.cantidad} </div>
            <button class="btn btn-info" id="remove-product" onClick="removeProduct(${indice})"> eliminar Producto </button>
            `;
            modalCarrito.appendChild(carritoContainer);
        });
        const totalContainer = document.createElement("div")
        totalContainer.className ="total-carrito"

        guardarLocalStorage();
    }
}

const agregarAlCarrito = (indice) => {
    const indiceCarrito = carrito.findIndex((producto)=>{
        producto.id === productos[indice].id
    });
    if (indiceCarrito === -1) {
        const produtoAgregar = productos[indice]
        produtoAgregar.cantidad = 1;
        carrito.push(produtoAgregar);
        dibujarCarrito ();
    } else {
        carrito[indiceCarrito].cantidad +=1;
        dibujarCarrito();
    }
    
};

const RecuperacionCarrito = (indice) => {
     const carritoGuardado = copiaDeSeguridad.findIndex((productoRec)=>{
     productoRec.id === copiaDeSeguridad[indice].id
     });
 if (carritoGuardado === -1) {
     const produtoRecrear = copiaDeSeguridad[indice]
     produtoRecrear.cantidad = 1;
     carrito.push(produtoRecrear);
     dibujarCarrito ();
     } else {
     carrito[carritoGuardado].cantidad +=1;
     dibujarCarrito();
 }
}




// Eliminar productos del carrito

// Finalizar compra
