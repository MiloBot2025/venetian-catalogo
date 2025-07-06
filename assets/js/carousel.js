let current = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === index);
  });
}
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);
