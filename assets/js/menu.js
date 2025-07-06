document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mainMenu");
  const submenuToggle = document.querySelector(".menu");

  // Mostrar/ocultar menú principal
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // Mostrar/ocultar submenú en móvil al tocar "Productos"
  submenuToggle.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      submenuToggle.classList.toggle("open");
    }
  });
});
