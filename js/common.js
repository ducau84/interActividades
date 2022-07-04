// Creo una función para pasar la primera letra a mayúscula

function primerLetraMayusc(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Creo una función para pintar de rojo el input con información no válida

function pintarFondo(_num, color) {
  casillero = document.body.getElementsByTagName("input")[_num];
  casillero.style.background = color;
  console.log(casillero);
}

// Creo una función para verficar que no se hayan dejado casilleros en blanco o no usado números para completar

function validarRespuestaNumero(rta, _num) {
  if (rta === "") {
    error = alert(`¡No has ingresado nada en la pregunta número ${_num}! 
    
    Intenta de nuevo:`);
    pintarFondo(_num, "#ff000073");
    puntaje = 0;
    correctas = 0;
    return false;
  }
  if (rta == null || isNaN(rta)) {
    error = alert(`¡Debes ingresar números en el casillero número ${_num}!

    Intenta de nuevo:`);
    pintarFondo(_num, "#ff000073");
    puntaje = 0;
    correctas = 0;
    return false;
  }
}

// Creo una función para verficar que no se hayan dejado casilleros en blanco o usado números para completar

function validarRespuestaPalabra(rta, _num) {
  if (rta === "") {
    error = alert(`¡No has ingresado nada en el casillero número ${_num}! 
    
    Intenta de nuevo:`);
    pintarFondo(_num, "#ff000073");
    return false;
  }
  if (rta == null || !isNaN(rta)) {
    error = alert(`¡No puedes ingresar números en el casillero número ${_num}!

    Intenta de nuevo:`);
    pintarFondo(_num, "#ff000073");
    return false;
  }
}


// Creo una función que muestre un mensaje determinado en función del puntaje obtenido

function mensaje(a) {
  if (a == 10) {
    saludo = "¡Felicitaciones, lograste un puntaje perfecto!";
  }
  if (a >= 8 && a < 10) {
    saludo = "¡Felicitaciones, hiciste un gran trabajo, un poquito mas y es perfecto!";
  }
  if (a >= 7 && a < 8) {
    saludo = "¡Felicitaciones, aprobaste, pero podes hacerlo aún mejor!";
  }
  if (a < 7) {
    saludo =
      "Sigue esforzandote! ¡Con paciencia y dedidación vas a lograr aprobar!";
  }

  return saludo;
}

function darNota() {
  const nota = document.createElement("p");

  nota.innerHTML = `  <p style="font-size:2rem;">${nombre}:</p>
                      <p>¡Obtuviste un total de: ${correctas} respuestas correctas!</p>
                      <p style="font-size:2rem;">Tu nota es un: <strong style="font-size: 2.5rem;">${puntaje}</strong></p>
                      <p>${saludo}</p>
                    `;

  const imprimeNota = document.getElementById("nota");
  imprimeNota.appendChild(nota);

  // Evito que ante un doble submit se vuelva a ejecutar la función añadiendo el puntaje e imprimiendo nuevamente el resultado

  formulario.removeEventListener("submit", evaluarActividad);
}