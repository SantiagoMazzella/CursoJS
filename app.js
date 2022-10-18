const guardarLocalStorage = () => {

    let carritoStr = JSON.stringify(carrito);

    let copiaSeguridad = localStorage.setItem("carritoGuardado", carritoStr)
}

// Crear card por producto en array
let contenedor = document.getElementById("container")

const dibujarProductos = () => {
    fetch(`/data.json`)
    .then((Resp)=> Resp.json())
    .then((productos) => {
        productos.forEach((producto, indice)=>{
            let card = document.createElement("div");
            card.classList.add("card", "col-sm-12", "col-lg-3");
            card.innerHTML= `<img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"> ${producto.nombre} </h5>
              <p class="card-text"> $${producto.precio} </p>
              <a class="btn btn-dark" onClick = "agregarAlCarrito(${indice})">Agregar al carrito</a>
            </div>`
            contenedor.appendChild(card)
        });
    })
};




let carrito = []
let total = 0;
let modalCarrito =document.getElementById("carritoDeCompras")

const dibujarCarrito = () => {
    modalCarrito.className="baseCarrito"
    modalCarrito.innerHTML= "";

    if (carrito.length > 0) {
        carrito.forEach((producto, i) => {
            let carritoContainer = document.createElement("div");
            carritoContainer.className = "producto-carrito";
            carritoContainer.innerHTML=` 
            <img class="carrito-img" src="${producto.imagen}"/>
            <div class="product-details"> producto: ${producto.cantidad}
            <div class="product-details"> precio: ${producto.precio}
            <div class="product-details"> subtotal: ${producto.precio * producto.cantidad} </div>
            <button class="btn btn-info" id="remove-product" onClick="eliminarDelCarrito(${i})"> eliminar Producto </button>
            `;
        
            
            modalCarrito.appendChild(carritoContainer);
        });    

        actualizarTotal();

        let sumaTotal = document.createElement("div");
        sumaTotal.className= "precioFinal"
        sumaTotal.innerHTML=`      
        <p>Total: $<span id="precio-total">${total}</span></p>
        `;

        modalCarrito.appendChild(sumaTotal);

        let botonBorrar =document.createElement("div");
        botonBorrar.innerHTML=`
        <button id="vaciar-carrito" class="botonBorrar" onClick="vaciarCarrito()">Vaciar carrito</button>
        `
        modalCarrito.appendChild(botonBorrar)

        let botonComprar =document.createElement("div");
        botonComprar.innerHTML=`
        <button id="finalizar-compra" class="botonComprar" onClick="finalizarCompra()">Finalizar compra</button>
        `
        modalCarrito.appendChild(botonComprar)
    }
    
    guardarLocalStorage();
    
}

function actualizarTotal() {
    let totalActualizado = carrito.reduce((acc, cv) => {
        return acc + cv.precio * cv.cantidad;
    }, 0);

    total = totalActualizado;

}



const enDesarrollo = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Seguimos desarollando!',
      })
}

// Boton sin Funcion
let botonEnDesarrollo1 = document.querySelector("#botonSinFuncion1")
let botonEnDesarrollo2 = document.querySelector("#botonSinFuncion2")

botonEnDesarrollo1.addEventListener("click", enDesarrollo)
botonEnDesarrollo2.addEventListener("click", enDesarrollo)

// Agregar producto al carrito



const agregarAlCarrito = (indice) => {

    fetch(`/data.json`)
    .then((Resp)=>Resp.json())
    .then((productos) => {

        let indiceCarrito = carrito.findIndex((producto)=>{
            return producto.id === productos[indice].id
        });
       
        if (indiceCarrito === -1) {
       
            let produtoAgregar = productos[indice]
            produtoAgregar.cantidad = 1;
            carrito.push(produtoAgregar);
            dibujarCarrito ();
       
        } else {
            carrito[indiceCarrito].cantidad +=1;
            dibujarCarrito();
        }
    })
};


function iniciarApp () {

    if (localStorage.getItem("carritoGuardado")) {

        carrito = JSON.parse(localStorage.getItem("carritoGuardado"))

        dibujarCarrito();
    }

    dibujarProductos();

}


// Eliminar productos del carrito

const eliminarDelCarrito = (indice) => {

    carrito.splice(indice,1);

    dibujarCarrito()
}

function vaciarCarrito () {
    carrito = [];
    localStorage.clear();

    modalCarrito.innerHTML="";
    modalCarrito.className="";    
}

// Finalizar compra

function finalizarCompra () {

    carrito = [];
    
    localStorage.clear();

    contenedor.innerHTML="";

    modalCarrito.innerHTML=`
    <h2> Buena compra! </h2>
    <h3> Tu compra fue relizada con exito! <h3>
    `
    modalCarrito.className="finalizarCarrito";
}

iniciarApp();
