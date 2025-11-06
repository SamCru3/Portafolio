try {
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  if (!Array.isArray(carrito)) {
    localStorage.removeItem("carrito");
  }
} catch {
  localStorage.removeItem("carrito");
}

let Carrito = JSON.parse(localStorage.getItem("Carrito")) || [];
ActualizarCarrito();

function cantidad(precio, tipo, boton) {
    const productoDiv = boton.closest('.producto');
    const botones = productoDiv.querySelectorAll('.Bcantidad');

    botones.forEach(b => b.classList.remove('activo'));

    const precioLimpio = parseInt(precio.toString().replace(/[^\d]/g, ''));

    if (!boton.classList.contains('activo')) {
        boton.classList.add('activo');
        productoDiv.dataset.precioSeleccionado = precioLimpio;
        productoDiv.dataset.tipoSeleccionado = tipo;
    } else {
        delete productoDiv.dataset.precioSeleccionado;
        delete productoDiv.dataset.tipoSeleccionado;
    }
}

function agregarCarrito(idProducto, boton = null) {
    const producto = BaseDeDatosProductos[idProducto];
    if (!producto) {
        console.error("Producto no encontrado:", idProducto);
        return;
    }

    let precioSeleccionado = producto.precio;
    let tipoSeleccionado = "unidad";

    if (boton) {
        const productoDiv = boton.closest(".producto");
        if (productoDiv && productoDiv.dataset.precioSeleccionado) {
            precioSeleccionado = productoDiv.dataset.precioSeleccionado;
            tipoSeleccionado = productoDiv.dataset.tipoSeleccionado || "unidad";
        }
    }

    const precioNumerico = parseInt(precioSeleccionado.toString().replace(/[^\d]/g, ''));

    const existente = Carrito.find(item => item.id === idProducto && item.tipo === tipoSeleccionado);

    if (existente) {
        existente.cantidad++;
    } else {
        Carrito.push({
            id: idProducto,
            nombre: producto.nombre,
            imagen: producto.imagen,
            tipo: tipoSeleccionado,
            precio: precioNumerico,
            cantidad: 1
        });
    }

    guardarCarrito();
    ActualizarCarrito();
    mostrarMensaje();
}


function ActualizarCarrito() {
    const Contenedor = document.getElementById("miniCarro");
    Contenedor.innerHTML = "";

    let subtotal = 0;

    Carrito.forEach(item => {
        if (!item || !item.id || !item.nombre) return;

        const totalItem = item.precio * item.cantidad;
        subtotal += totalItem;

        const div = document.createElement("div");
        div.classList.add("Carrito-Producto");

        div.innerHTML = `
            <img src="${item.imagen}" alt="Producto">
            <div class="Carrito-Texto">
                <p class="nombre">${item.nombre} (${item.tipo})</p>
                <p class="precio">Precio: $${item.precio.toLocaleString()}</p>
                <p class="total-item">Total: $${totalItem.toLocaleString()}</p>
                <div class="cantidad-control">
                    <button class="btn-restar" onclick="DisminuirCantidad('${item.id}', '${item.tipo}')">-</button>
                    <span class="cantidad">${item.cantidad}</span>
                    <button class="btn-aumentar" onclick="AumentarCantidad('${item.id}', '${item.tipo}')">+</button>
                </div>
            </div>
            <button class="btn-quitar" onclick="QuitarProducto('${item.id}', '${item.tipo}')">&times;</button>
        `;

        Contenedor.appendChild(div);
    });

    const resumen = document.createElement("div");
    resumen.classList.add("Carrito-Resumen");
    resumen.innerHTML = `
        <p class="subtotal">Subtotal: <span>$${subtotal.toLocaleString()}</span></p>
        <button class="btn-comprar">Comprar</button>
    `;
    Contenedor.appendChild(resumen);

    const badge = document.getElementById("badge");
    const totalItems = Carrito.reduce((acc, item) => acc + (item.cantidad || 0), 0);
    badge.textContent = totalItems;
}

function AumentarCantidad(IdProducto, tipo) {
    const item = Carrito.find(p => p.id === IdProducto && p.tipo === tipo);
    if (item) item.cantidad++;
    guardarCarrito();
    ActualizarCarrito();
}

function DisminuirCantidad(IdProducto, tipo) {
    const item = Carrito.find(p => p.id === IdProducto && p.tipo === tipo);
    if (item) {
        if (item.cantidad > 1) {
            item.cantidad--;
        } else {
            Carrito = Carrito.filter(p => !(p.id === IdProducto && p.tipo === tipo));
        }
    }
    guardarCarrito();
    ActualizarCarrito();
}

function QuitarProducto(IdProducto, tipo) {
    Carrito = Carrito.filter(p => !(p.id === IdProducto && p.tipo === tipo));
    guardarCarrito();
    ActualizarCarrito();
}

function guardarCarrito() {
    localStorage.setItem("Carrito", JSON.stringify(Carrito));
}

document.addEventListener("DOMContentLoaded", () => {
    try {
        const guardado = JSON.parse(localStorage.getItem("Carrito"));
        if (Array.isArray(guardado)) {
            Carrito = guardado.filter(item => item && item.id && item.nombre && item.imagen);
        } else {
            Carrito = [];
        }
    } catch {
        Carrito = [];
    }
    ActualizarCarrito();
});

function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");
    if (!mensaje) return;

    mensaje.classList.add("mostrar");

    setTimeout(() => {
        mensaje.classList.remove("mostrar");
    }, 2000);
}
