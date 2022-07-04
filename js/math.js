// Defino las variables globales

let nombre = "";
let puntaje = 0;
let correctas = 0;
let saludo = "";

// Creo una función que determine el puntaje y la cantidad de respuestas correctas

function pregunta(rta, _num) {
  if (_num == 1) {
    switch (rta) {
      case 221:
        puntaje += 2.5;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    }
    return puntaje;
  }
  if (_num == 2) {
    switch (rta) {
      case 145:
        puntaje += 2.5;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    }
    return puntaje;
  }
  if (_num == 3) {
    switch (rta) {
      case 96:
        puntaje += 2.5;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    }
    return puntaje;
  }
  if (_num == 4) {
    switch (rta) {
      case 3091:
        puntaje += 2.5;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    }
    return puntaje;
  }
}

// Pido al usuario que ingrese su nombre ( a futuro esto lo va a tomar del registro inicial )

nombre = prompt("Por favor Ingresa tu nombre:");

// Valido que el nombre no esté en blanco o utilice un número como nombre

while (nombre == "" || nombre == null || !isNaN(nombre)) {
  alert(`¡No has ingresado un nombre válido! Intenta de nuevo:`);
  nombre = prompt("¡Bienvenido!, por favor ingrese su nombre:");
}

// Pongo en mayuscula la primera letra en caso que ingrese el nombre en minusculas

nombre = primerLetraMayusc(nombre);

// Saludo personalizado

alert(`${nombre} ¡Comencemos con la Evaluación de Matemáticas!`);

// Creo una función que muestra la nota obtenida en el documento

const formulario = document.getElementById("problemas");

formulario.addEventListener("submit", evaluarActividad);

function evaluarActividad(e) {
  {
    // Evito el comportamiento por defecto
    e.preventDefault();

    //Primera Pregunta
    let rta = document.getElementById("rta1").value;

    // valido lo ingresado
    if (validarRespuestaNumero(rta, 1) == false) {
      return;
    } else {
      // Invoco la funcion para verificar si la respuesta es correcta o no
      pregunta(Number(rta), 1);
    }

    // Verifico por consola la salida de ambas variables

    console.log(rta);
    console.log(puntaje);

    // Segunda pregunta

    rta = document.getElementById("rta2").value;

    // valido lo ingresado
    if (validarRespuestaNumero(rta, 2) == false) {
      return;
    } else {
      // Invoco la funcion para verificar si la respuesta es correcta o no
      pregunta(Number(rta), 2);
    }

    // Verifico por consola la salida de ambas variables
    console.log(rta);
    console.log(puntaje);

    // Tercera pregunta

    rta = document.getElementById("rta3").value;

    // valido lo ingresado
    if (validarRespuestaNumero(rta, 3) == false) {
      return;
    } else {
      // Invoco la funcion para verificar si la respuesta es correcta o no
      pregunta(Number(rta), 3);
    }
    // Verifico por consola la salida de ambas variables
    console.log(rta);
    console.log(puntaje);

    // Cuarta pregunta

    rta = document.getElementById("rta4").value;

    // valido lo ingresado
    if (validarRespuestaNumero(rta, 4) == false) {
      return;
    } else {

      // Invoco la funcion para verificar si la respuesta es correcta o no
      pregunta(Number(rta), 4);
    }
    // Verifico por consola la salida de ambas variables
    console.log(rta);
    console.log(puntaje);

    // Invoco la funcion que determina el saludo en base al puntaje
    saludo = mensaje(puntaje);

    // Verifico la salida
    console.log(saludo);

    // Invoco la funcion que muestra el puntaje

    darNota();
  }
}
