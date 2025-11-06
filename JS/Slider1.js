const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('puntos');
let index = 0;

slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => moveToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function moveToSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    dots[idx].classList.remove('active');
  });
  slides[i].classList.add('active');
  dots[i].classList.add('active');
  index = i;
}

function nextSlide() {
  let next = (index + 1) % slides.length;
  moveToSlide(next);
}

function prevSlide() {
  let prev = (index - 1 + slides.length) % slides.length;
  moveToSlide(prev);
}

let startX = 0;
document.querySelector('.slider-container').addEventListener('mousedown', e => startX = e.pageX);
document.querySelector('.slider-container').addEventListener('mouseup', e => {
  const endX = e.pageX;
  if (startX - endX > 50) nextSlide();
  else if (endX - startX > 50) prevSlide();
});

setInterval(nextSlide, 6000);
moveToSlide(0);