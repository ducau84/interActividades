// Importo las funciones necesarias

import {
  alumnoLogueado,
  nombreEnStorage,
  mensaje,
  validarRespuestaNumero,
  guardarPuntaje,
  desloguear,
} from "../App.js";

import getData from "./controllers/getData.js";

import {
  darNota,
  bienvenidoArea
} from "./utils/modalsSwal.js"

// Muestro el nombre del alumno en el pizarrón

let nombre = nombreEnStorage();

// Verifico que el Alumno haya ingresado su nombre en la pantalla home y en caso de no encontrarlo en el local storage, lo mando al home para que lo ingrese

localStorage.getItem("nombre")
  ? (nombre = nombreEnStorage())
  : volverAlHome();

// Boton borrador para desloguear

desloguear();

// Defino las variables globales

let puntaje = 0;
let correctas = 0;
let saludo = "";

// Creo una función que determine el puntaje y la cantidad de respuestas correctas

// Del archivo problemas.json obtengo las posibles respuestas, donde el id indica a que problema pertenecen 

document.addEventListener("DOMContentLoaded", async () => {
  const datos = "../../src/data/problemas.json";
  problemas = await getData(datos);
  console.log(problemas);
  fillProblemas(problemas);

  function fillProblemas (array) {
    const pasajeros = document.getElementById("pasajeros");
    datosProblemas(pasajeros, array.pasajeros);

    const mujeres = document.getElementById("mujeres");
    const paquetes = document.getElementById("paquetes");
    const galletitas = document.getElementById("galletitas");
    const viernes = document.getElementById("viernes");
    const sabado = document.getElementById("sabado");
    const domingo = document.getElementById("domigo");
    const ahorros = document.getElementById("ahorros");
    const tablet = document.getElementById("tablet");
  }
})

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

bienvenidoArea("math", "Matemáticas", nombre);

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

    // Guardo el puntaje obtenido, junto con el área correspondiente para luego mostrarlo en el home.
    guardarPuntaje("math", puntaje);
  }
}

function datosProblemas (campo, datos){
  campo = Element.innerText(datos)
}