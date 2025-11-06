document.addEventListener("click", e => {
    if (e.target.classList.contains("btn-comprar")) {
        abrirModalCompra();
    }
});

function abrirModalCompra() {
    document.getElementById("modalCompra").classList.remove("oculto");
}

document.getElementById("cerrarModal").addEventListener("click", () => {
    document.getElementById("modalCompra").classList.add("oculto");
});

document.getElementById("formCompra").addEventListener("submit", function(e) {
    e.preventDefault();

    const resumen = Carrito.map(item => 
        `${item.nombre} (${item.tipo}) x${item.cantidad} = $${(item.precio * item.cantidad).toLocaleString()}`
    ).join("\n");

    document.getElementById("carritoDatos").value = resumen;

    fetch(this.action, {
        method: this.method,
        body: new FormData(this)
    }).then(() => {
        localStorage.removeItem("Carrito");
        window.location.href = "InicioProductos.html";
    }).catch(() => {
        alert("Error al enviar el pedido. Intenta de nuevo.");
    });
});
