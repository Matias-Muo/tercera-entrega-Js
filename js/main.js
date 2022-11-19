// PRODUCTOS
const productos = [
    //Terrenos-urbanos
    {
        id: "Terrenos-Urbanos-01",
        titulo: "Terrenos-Urbanos 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Terrenos-Urbanos",
            id: "Terrenos-Urbanos"
        },
        precio: 1000
    },
    {
        id: "Terrenos-Urbanos-02",
        titulo: "Terrenos-Urbanos 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Terrenos-Urbanos",
            id: "Terrenos-Urbanos"
        },
        precio: 1000
    },
    {
        id: "Terrenos-Urbanos-03",
        titulo: "Terrenos-Urbanos 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Terrenos-Urbanos",
            id: "Terrenos-Urbanos"
        },
        precio: 1000
    },
    {
        id: "Terrenos-Urbanos-04",
        titulo: "Terrenos-Urbanos 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Terrenos-Urbanos",
            id: "Terrenos-Urbanos"
        },
        precio: 1000
    },
    {
        id: "Terrenos-Urbanos-05",
        titulo: "Terrenos-Urbanos 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Terrenos-Urbanos",
            id: "Terrenos-Urbanos"
        },
        precio: 1000
    },
    // Terrenos Suburbanos
    {
        id: "Terrenos-suburbanos-01",
        titulo: "Terrenos-suburbanos 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "terrenos-suburbanos",
            id: "Terrenos-suburbanos"
        },
        precio: 1000
    },
    {
        id: "Terrenos-suburbanos-02",
        titulo: "Terrenos-suburbanos 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "terrenos-suburbanos",
            id: "Terrenos-suburbanos"
        },
        precio: 1000
    },
    {
        id: "Terrenos-suburbanos-03",
        titulo: "Terrenos-suburbanos 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "terrenos-suburbanos",
            id: "Terrenos-suburbanos"
        },
        precio: 1000
    },
    {
        id: "Terrenos-suburbanos-04",
        titulo: "Terrenos-suburbanos 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "terrenos-suburbanos",
            id: "Terrenos-suburbanos"
        },
        precio: 1000
    },
    {
        id: "Terrenos-suburbanos-05",
        titulo: "Terrenos-suburbanos 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "terrenos-suburbanos",
            id: "Terrenos-suburbanos"
        },
        precio: 1000
    },
    {
        id: "Terrenos-suburbanos-06",
        titulo: "Terrenos-suburbanos 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "terrenos-suburbanos",
            id: "Terrenos-suburbanos"
        },
        precio: 1000
    },
    {
        id: "Terrenos-suburbanos-07",
        titulo: "Terrenos-suburbanos 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "terrenos-suburbanos",
            id: "Terrenos-suburbanos"
        },
        precio: 1000
    },
    {
        id: "Terrenos-suburbanos-08",
        titulo: "Terrenos-suburbanos 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "terrenos-suburbanos",
            id: "Terrenos-suburbanos"
        },
        precio: 1000
    },
    // Zona-Quintas
    {
        id: "Zona-Quintas-01",
        titulo: "Zona-Quintas 01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Zona-Quintas",
            id: "Zona-Quintas"
        },
        precio: 1000
    },
    {
        id: "Zona-Quintas-02",
        titulo: "Zona-Quintas 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Zona-Quintas",
            id: "Zona-Quintas"
        },
        precio: 1000
    },
    {
        id: "Zona-Quintas-03",
        titulo: "Zona-Quintas 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Zona-Quintas",
            id: "Zona-Quintas"
        },
        precio: 1000
    },
    {
        id: "Zona-Quintas-04",
        titulo: "Zona-Quintas 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Zona-Quintas",
            id: "Zona-Quintas"
        },
        precio: 1000
    },
    {
        id: "Zona-Quintas-05",
        titulo: "Zona-Quintas 05",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Zona-Quintas",
            id: "Zona-Quintas"
        },
        precio: 1000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}