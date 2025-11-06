const BaseDeDatosProductos = {
    P5: {
        promo: "3x2",
        nombre: "Vasos Freseros con Crema",
        precio: "$17.000",
        precioOriginal: "$25.500",
        descripcion: "Postre fresco y cremoso con trozos de fresa natural, crema batida y un toque dulce irresistible. Ideal para compartir con la promoción 3x2.",
        imagen: "Imagenes/Promociones/P1001.jpeg"
    },
    P4: {
        promo: "50% DCTO",
        nombre: "Segundo Crepe al 50% de Descuento",
        precio: "$22.500",
        precioOriginal: "$30.000",
        descripcion: "Disfruta de nuestros crepes artesanales con rellenos dulces o salados y obtén el segundo a mitad de precio. ¡Perfecto para disfrutar en pareja!",
        imagen: "Imagenes/Promociones/P1002.jpeg"
    },
    P3: {
        promo: "50% DCTO",
        nombre: "Donas de Chocolate Rosa",
        precio: "$5.000",
        precioOriginal: "$10.000",
        descripcion: "Esponjosas donas cubiertas con chocolate rosa y decoradas con un toque de crema. Dulces, suaves y con un 50% de descuento por tiempo limitado.",
        imagen: "Imagenes/Promociones/P1003.jpeg"
    },
    P2: {
        promo: "10% DCTO",
        nombre: "Bebida de Frutos Rojos especial",
        precio: "$13.500",
        precioOriginal: "$15.000",
        descripcion: "Refrescante bebida cremosa preparada con una mezcla de frutos rojos y crema batida. Dulce, ligera y con un 10% de descuento especial.",
        imagen: "Imagenes/Promociones/P1004.jpeg"
    },
    P1: {
        promo: "7x6",
        nombre: "Combo de 6 Donas + 1 Gratis",
        precio: "$12.000",
        precioOriginal: "",
        descripcion: "Aprovecha nuestro delicioso combo: compra 6 donas y recibe 1 completamente gratis. Suaves, esponjosas y cubiertas con glaseados irresistibles, ideales para compartir con amigos o familia.",
        imagen: "Imagenes/Promociones/P1005.jpeg"
    },
    //POSTRES
    1001: {
        nombre: "Postre de Oreo",
        class: "postre",
        categoria: "Postres",
        precio: "$6.000",
        precio3x: "$16.200",
        precio5x: "$22.500",
        descripcion: "Delicioso postre cremoso con trozos de galleta Oreo, capas de crema dulce y base de galleta triturada. Perfecto para los amantes del chocolate y la textura crujiente.",
        imagen: "Imagenes/Catalogo/1001.jpeg"
    },
    1002: {
        nombre: "Caja de 4 postres Postres variados",
        class: "postre",
        categoria: "Postres",
        precio: "$22.000",
        precio3x: "$59.400",
        precio5x: "$93.500",
        descripcion: "Una combinación irresistible de sabores: cuatro postres surtidos con ingredientes frescos, ideales para regalar, compartir o disfrutar en familia.",
        imagen: "Imagenes/Catalogo/1002.jpeg"
    },
    1003: {
        nombre: "Postre de Mora",
        class: "postre",
        categoria: "Postres",
        precio: "$6.000",
        precio3x: "$16.200",
        precio5x: "$22.500",
        descripcion: "Postre artesanal con pulpa natural de mora, crema suave y base crocante. Dulce, ácido y refrescante, una explosión de sabor en cada cucharada.",
        imagen: "Imagenes/Catalogo/1003.jpeg"
    },
    //TORTAS
    1004: {
        nombre: "Torta de Chocolate",
        class: "torta",
        categoria: "Tortas",
        precio: "$45.000",
        precio3x: "$121.500",
        precio5x: "$191.250",
        descripcion: "Esponjosa torta de chocolate con cobertura cremosa, elaborada con cacao de alta calidad. Ideal para celebraciones o disfrutar con un café caliente.",
        imagen: "Imagenes/Catalogo/1004.jpeg"
    },
    1005: {
        nombre: "Torta Tres Leches",
        class: "torta",
        categoria: "Tortas",
        precio: "$35.000",
        precio3x: "$94.500",
        precio5x: "$148.750",
        descripcion: "Suave y húmeda torta bañada en una mezcla de tres tipos de leche, decorada con crema y canela. Un clásico que nunca pasa de moda.",
        imagen: "Imagenes/Catalogo/1005.jpeg"
    },
    1006: {
        nombre: "Torta de Vainilla",
        class: "torta",
        categoria: "Tortas",
        precio: "$30.000",
        precio3x: "$81.000",
        precio5x: "$127.500",
        descripcion: "Torta esponjosa de vainilla con un toque casero, sabor suave y textura perfecta. Ideal para acompañar con frutas o una bebida caliente.",
        imagen: "Imagenes/Catalogo/1006.jpeg"
    },
    //BEBIDAS
    1008: {
        nombre: "Malteada de Fresa o Chocolate",
        class: "bebida",
        categoria: "Bebidas",
        precio: "$6.000",
        precio3x: "$16.200",
        precio5x: "$22.500",
        descripcion: "Malteada cremosa en dos versiones irresistibles: fresa o chocolate. Servida fría con crema batida y sirope, ideal para disfrutar a cualquier hora.",
        imagen: "Imagenes/Catalogo/1008.jpeg"
    },
    1009: {
        nombre: "Mashmelos Bañados en Chocolate",
        class: "bebida",
        categoria: "Bebidas",
        precio: "$5.000",
        precio3x: "$13.500",
        precio5x: "$21.250",
        descripcion: "Suaves mashmelos cubiertos con una capa de chocolate derretido. Dulces, esponjosos y perfectos para acompañar bebidas o disfrutar como snack.",
        imagen: "Imagenes/Catalogo/1009.jpeg"
    },
    1010: {
        nombre: "Jugos Naturales en Agua",
        class: "bebida",
        categoria: "Bebidas",
        precio: "$6.000",
        precio3x: "$16.200",
        precio5x: "$22.500",
        descripcion: "Jugos naturales elaborados con frutas frescas y servidos en agua. Refrescantes, ligeros y llenos de sabor tropical.",
        imagen: "Imagenes/Catalogo/1010.jpeg"
    },
    //ANTOJOS
    1012: {
        nombre: "Mini Pancakes con Fruta",
        class: "antojo",
        categoria: "Antojos",
        precio: "$8.000",
        precio3x: "$21.600",
        precio5x: "$34.000",
        descripcion: "Pequeños pancakes servidos con frutas frescas y sirope. Dulces, coloridos y llenos de energía para cualquier momento del día.",
        imagen: "Imagenes/Catalogo/1012.jpeg"
    },
    1013: {
        nombre: "Churros con Arequipe",
        class: "antojo",
        categoria: "Antojos",
        precio: "$7.000",
        precio3x: "$18.900",
        precio5x: "$29.750",
        descripcion: "Crujientes churros rellenos y bañados en arequipe. Una delicia tradicional con el toque dulce perfecto.",
        imagen: "Imagenes/Catalogo/1013.jpeg"
    },
    1016: {
        nombre: "Malteada con Donas",
        class: "antojo",
        categoria: "Antojos",
        precio: "$10.000",
        precio3x: "$27.000",
        precio5x: "$42.500",
        descripcion: "Malteada espesa decorada con crema y una dona encima. Una combinación divertida, dulce y perfecta para fotos y antojos.",
        imagen: "Imagenes/Catalogo/1016.jpeg"
    },
    //CAFES
    1017: {
        nombre: "Brownie con Café",
        class: "cafe",
        categoria: "Cafés",
        precio: "$7.000",
        precio3x: "$18.900",
        precio5x: "$29.750",
        descripcion: "Brownie de chocolate artesanal acompañado de una taza de café caliente. Dulce, intenso y perfecto para la tarde.",
        imagen: "Imagenes/Catalogo/1017.jpeg"
    },
    1018: {
        nombre: "Brownie con Capuchino",
        class: "cafe",
        categoria: "Cafés",
        precio: "$10.000",
        precio3x: "$27.000",
        precio5x: "$42.250",
        descripcion: "Combinación ideal de un brownie suave con un capuchino cremoso. Un antojo elegante para los amantes del café y el chocolate.",
        imagen: "Imagenes/Catalogo/1018.jpeg"
    },
    1007: {
        nombre: "Malteada de Milo",
        class: "cafe",
        categoria: "Cafés",
        precio: "$4.000",
        precio3x: "$10.800",
        precio5x: "$17.000",
        descripcion: "Refrescante malteada preparada con Milo, leche fría y crema batida. Dulce, energética y perfecta para los amantes del chocolate.",
        imagen: "Imagenes/Catalogo/1007.jpeg"
    },
    //PANES
    1014: {
        nombre: "Croissant de Chocolate",
        class: "panes",
        categoria: "Panes",
        precio: "$4.000",
        precio3x: "$10.800",
        precio5x: "$17.000",
        descripcion: "Croissant dorado y crujiente con relleno de chocolate derretido. Perfecto para desayunos o meriendas dulces.",
        imagen: "Imagenes/Catalogo/1014.jpeg"
    },
    1015: {
        nombre: "Croissant con Relleno",
        class: "panes",
        categoria: "Panes",
        precio: "$5.000",
        precio3x: "$13.500",
        precio5x: "$21.250",
        descripcion: "Suave croissant recién horneado relleno de dulce o crema. Ligero, aromático y delicioso para cualquier hora del día.",
        imagen: "Imagenes/Catalogo/1015.jpeg"
    },
    1011: {
        nombre: "Rollos de Canela",
        class: "panes",
        categoria: "Panes",
        precio: "$3.000",
        precio3x: "$8.100",
        precio5x: "$12.750",
        descripcion: "Suaves rollos de canela recién horneados, con glaseado dulce y aroma irresistible. Perfectos para acompañar con café o chocolate.",
        imagen: "Imagenes/Catalogo/1011.jpeg"
    },
}

function generarProductos() {
    const contenedor = document.getElementById("contenedorProductos");
    contenedor.innerHTML = "";

    for (const id in BaseDeDatosProductos) {
        const p = BaseDeDatosProductos[id];

        if (!p.categoria) continue;

        const html = `
        <div class="producto ${p.class}" id="${id}">
            <div class="imagen" onclick="VerMas('${id}')">
                <img src="${p.imagen}" alt="${p.nombre}">
                <div class="ver-mas">Ver más</div>
            </div>
            <h3>Elige Cantidad</h3>
            <h2>${p.nombre}</h2>
            <div class="cantidades">
                <div class="op1 op">
                    <button onclick="cantidad('${p.precio}', '1X', this)" class="Bcantidad">1<br>UND</button>
                    <p>${p.precio}</p>
                </div>
                <div class="op2 op">
                    <button onclick="cantidad('${p.precio3x}', '3X', this)" class="Bcantidad">3<br>UND</button>
                    <p>${p.precio3x}</p>
                </div>
                <div class="op3 op">
                    <button onclick="cantidad('${p.precio5x}', '5X', this)" class="Bcantidad">5<br>UND</button>
                    <p>${p.precio5x}</p>
                </div>
            </div>
            <button class="añadir" onclick="agregarCarrito('${id}', this); validar(this)">Añadir al Carrito</button>
        </div>
    `;
        contenedor.insertAdjacentHTML("beforeend", html);
    }
}

document.addEventListener("DOMContentLoaded", generarProductos);

function VerMas(id) {
    const p = BaseDeDatosProductos[id];
    if (!p) return;

    const modal = document.createElement("div");
    modal.classList.add("modal-producto");

    modal.innerHTML = `
        <div class="modal-contenido">
            <button class="cerrar-modal" onclick="cerrarModal(this)">×</button>
            <div class="modal-imagen">
                <img src="${p.imagen}" alt="${p.nombre}">
            </div>
            <div class="modal-texto">
                <h2>${p.nombre}</h2>
                <p class="descripcion">${p.descripcion}</p>

                <div class="tabla-precios">
                    <div><strong>1 und:</strong> ${p.precio}</div>
                    ${p.precio3x ? `<div><strong>3 und:</strong> ${p.precio3x}</div>` : ""}
                    ${p.precio5x ? `<div><strong>5 und:</strong> ${p.precio5x}</div>` : ""}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function cerrarModal(btn) {
    const modal = btn.closest(".modal-producto");
    modal.classList.add("cerrar");
    setTimeout(() => modal.remove(), 300);
}
