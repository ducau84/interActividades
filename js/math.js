// Importo las funciones necesarias

import {
  alumnoLogueado,
  nombreEnStorage,
  darNota,
  mensaje,
  validarRespuestaNumero,
  guardarPuntaje,
  desloguear,
} from "./app.js";

// Muestro el nombre del alumno en el pizarrón

let nombre = nombreEnStorage();

// Boton borrador para desloguear

desloguear();

// Defino las variables globales

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

// Verifico que el Alumno haya ingresado su nombre en la pantalla home y en caso de no encontrarlo en el session storage, lo mando al home para que lo ingrese

alumnoLogueado(nombre);

// Verifico que el Alumno no haya realizado la evaluación en esta sesión y muestro un mensaje acorde

sessionStorage.getItem("math")
  ? Swal.fire({
      title: `${nombre}`,
      text: `¡Ya has hecho la evaluación de Matemáticas!`,
      icon: "error",
    }).then(function () {
      window.location = "../index.html";
    })
  : Swal.fire({
      title: `${nombre}`,
      text: `¡Comencemos con la Evaluación de Matemáticas!`,
      imageUrl: "../img/modales/matematicas.png",
      imageWidth: 400,
      imageHeight: 264,
      imageAlt: "Matematicas"
    });

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
      puntaje = 0;
      correctas = 0;
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
      puntaje = 0;
      correctas = 0;
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
      puntaje = 0;
      correctas = 0;
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
      puntaje = 0;
      correctas = 0;
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

    // Comunico al usuario el puntaje obtenido, cantidad de respuestas correctas y lo saludo en base al puntaje
    darNota(nombre, correctas, puntaje, saludo);

    // Evito que ante un doble submit se vuelva a ejecutar la función añadiendo el puntaje e imprimiendo nuevamente el resultado
    formulario.removeEventListener("submit", evaluarActividad);

    // Guardo el puntaje obtenido, junto con el área correspondiente para luego mostrarlo en el home.
    guardarPuntaje("math", puntaje);
  }
}
