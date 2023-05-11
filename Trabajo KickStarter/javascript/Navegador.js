var navegador = document.getElementById("navegador");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 0) {
    navegador.style.top = window.pageYOffset + "px";
  } else {
    navegador.style.top = "0";
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth <= 600) {
    document.getElementById('navegador').style.display = 'none';
    document.getElementById('boton-campana').style.display = 'none';
  } else {
    document.getElementById('navegador').style.display = 'block';
    document.getElementById('boton-campana').style.display = 'block';
  }
});