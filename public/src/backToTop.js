// Capturo el elemento 

let volverArriba = document.getElementById("btn-back-to-top");

// Cuando el usuario scrollea 20 px aparece el botón

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    volverArriba.style.display = "block";
  } else {
    volverArriba.style.display = "none";
  };
};

// Cuando el usuario hace clic en el boton, subier hasta arriba del documento

volverArriba.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};