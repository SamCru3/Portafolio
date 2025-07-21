const imagen = document.querySelector(".parallax-img");
window.addEventListener("scroll", () => {
    const desplazamiento = window.scrollY * 0.1;
    imagen.style.transform = `translateY(${desplazamiento}px)`;
});
