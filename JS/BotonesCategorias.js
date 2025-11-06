const botonesCategorias = document.querySelectorAll('.productos button');

function Ms(boton, categoria) {
  botonesCategorias.forEach(b => b.classList.remove('active'));
  boton.classList.add("active");

  const productos = document.querySelectorAll('.producto');

  productos.forEach(p => {
    p.classList.add('oculto');
  });

  setTimeout(() => {
    productos.forEach(p => {

      p.style.display = 'none';

      if (categoria && p.classList.contains(categoria)) {
        p.style.display = 'block';

        setTimeout(() => p.classList.remove('oculto'), 10);
      }
    });
  }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  botonesCategorias[0].click();
});