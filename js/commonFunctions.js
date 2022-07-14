// Creo una función para pasar la primera letra a mayúscula

export function primerLetraMayusc(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Creo una función para pintar de rojo el input con información no válida

export function pintarFondo(_num, color) {
  const casillero = document.body.getElementsByTagName("input")[_num];
  casillero.style.background = color;
}

// Creo una función para verficar que no se hayan dejado casilleros en blanco o no usado números para completar

export function validarRespuestaNumero(rta, _num) {
  if (rta === "") {
    Swal.fire(`¡No has ingresado nada en la pregunta número ${_num}! 
    
    Intenta de nuevo:`);
    pintarFondo(_num, "#ff000073");
    return false;
  }
  if (rta == null || isNaN(rta)) {
    Swal.fire(`¡Debes ingresar números en el casillero número ${_num}!

    Intenta de nuevo:`);
    pintarFondo(_num, "#ff000073");
    return false;
  }
}

// Creo una función para verficar que no se hayan dejado casilleros en blanco o usado números para completar

export function validarRespuestaPalabra(rta, _num) {
  if (rta === "") {
    Swal.fire(`¡No has ingresado nada en el casillero número ${_num}! 
    
    Intenta de nuevo:`);
    pintarFondo(_num, "#ff000073");
    return false;
  }
  if (rta == null || !isNaN(rta)) {
    Swal.fire(`¡No puedes ingresar números en el casillero número ${_num}!

    Intenta de nuevo:`);
    pintarFondo(_num, "#ff000073");
    return false;
  }
}


// Creo una función que muestre un mensaje determinado en función del puntaje obtenido
export function mensaje(a) {
  let saludo = ""
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

export function darNota(a, b, c, d, e) {

  const nota = document.createElement("p");

  nota.innerHTML = `  <p style="font-size:2rem;">${a}:</p>
                      <p>¡Obtuviste un total de: ${b} respuestas correctas!</p>
                      <p style="font-size:2rem;">Tu nota es un: <strong style="font-size: 2.5rem;">${c}</strong></p>
                      <p>${d}</p>
                    `;

  const imprimeNota = document.getElementById("nota");
  imprimeNota.appendChild(nota);
}

export function traerNombreStorage() {
  let nombre = JSON.parse (sessionStorage.getItem("nombre"));
  return nombre
}

export function volverAlHome() {
  window.location.assign("../index.html");
}

export function guardarPuntaje(a, p) {
  sessionStorage.setItem(a, p);
}
