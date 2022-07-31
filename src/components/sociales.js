// Importo las funciones necesarias

import {
  volverAlHome,
  darNota,
  mensaje,
  validarSeleccion,
  guardarPuntaje,
  nombreEnStorage,
  desloguear,
  validarRadio,
} from "../App.js";

import getData from "./controllers/getData.js";

import {bienvenidoArea} from "./utils/modalsSwal.js";

// Muestro el nombre del alumno en el pizarrón

let nombre = nombreEnStorage();

// Boton borrador para desloguear

desloguear();

// declaro las variables globales

let puntaje = 0;
let correctas = 0;
let saludo = "";

// Verifico que el Alumno haya ingresado su nombre en la pantalla home y en caso de no encontrarlo en el session storage, lo mando al home para que lo ingrese

sessionStorage.getItem("nombre")
  ? (nombre = nombreEnStorage())
  : volverAlHome();

// Verifico que el Alumno no haya realizado la evaluación en esta sesión y muestro un mensaje acorde

bienvenidoArea("soc", "Ciencias Sociales", nombre);

//Al cargar el HTML Invoco del archivo zonas.json los objetos que se mostrarán en la consigna número 1

window.addEventListener("DOMContentLoaded", async () => {
  const datos = "../../src/data/zonas.json";
  const zonas = await getData(datos);
  const contenedor = document.getElementById("contenedorZonas");

  zonas.forEach((zona) => {
    const div = document.createElement("div");
    div.classList.add("imagenSelect");
    div.innerHTML = `<img class="zonasImg" src=${zona.img}>
                                <select class="zonasSelect" id="zonas${zona.id}">
                                    <option selected disabled>Selecciona la zona</option>
                                    <option value="rural">&#128004; Rural</option>
                                    <option value="urbano">&#127980; Urbano</option>
                                </select>
                                `;
    contenedor.appendChild(div);
  });
});

// Defino un event listener para el formulario activado cuando el usuario hace click sobre el boton submit e invoco la funcion para evaluar

const formulario = document.getElementById("campoCiudad");

formulario.addEventListener("submit", evaluarActividad);

// Evito el comportamiento por defecto

function evaluarActividad(e) {
  {
    e.preventDefault();

    // capturo los select y los asigno una constante

    const zona1 = document.getElementById("zonas1").value;
    const zona2 = document.getElementById("zonas2").value;
    const zona3 = document.getElementById("zonas3").value;
    const zona4 = document.getElementById("zonas4").value;
    const zona5 = document.getElementById("zonas5").value;
    const zona6 = document.getElementById("zonas6").value;

    //Capturo los input radio y les asigno una constante

    const radioP1O1 = document.getElementById("socP1O1").checked;
    const radioP1O2 = document.getElementById("socP1O2").checked;
    const radioP1O3 = document.getElementById("socP1O3").checked;
    const radioP2O1 = document.getElementById("socP2O1").checked;
    const radioP2O2 = document.getElementById("socP2O2").checked;
    const radioP2O3 = document.getElementById("socP2O3").checked;
    const radioP3O1 = document.getElementById("socP3O1").checked;
    const radioP3O2 = document.getElementById("socP3O2").checked;
    const radioP4O1 = document.getElementById("socP4O1").checked;
    const radioP4O2 = document.getElementById("socP4O2").checked;

    //valido que no hayan quedado evaluarRtass sin responder

    validarRadio(radioP4O1, radioP4O2, false, "D");
    validarRadio(radioP3O1, radioP3O2, false, "C");
    validarRadio(radioP2O1, radioP2O2, radioP2O3, "B");
    validarRadio(radioP1O1, radioP1O2, radioP1O3, "A");

    if (
      validarSeleccion(zona1, 0) == false ||
      validarSeleccion(zona2, 1) == false ||
      validarSeleccion(zona3, 2) == false ||
      validarSeleccion(zona4, 3) == false ||
      validarSeleccion(zona5, 4) == false ||
      validarSeleccion(zona6, 5) == false
    ) {
      return;
    }

    //Evalúo las respuestas del primer ejercicio

    evaluarRtas(zona1, 1);
    evaluarRtas(zona2, 2);
    evaluarRtas(zona3, 3);
    evaluarRtas(zona4, 4);
    evaluarRtas(zona5, 5);
    evaluarRtas(zona6, 6);
    evaluarRtas(radioP1O3, 7);
    evaluarRtas(radioP2O3, 7);
    evaluarRtas(radioP3O1, 7);
    evaluarRtas(radioP4O1, 7);

    // Invoco la funcion que determina el saludo en base al puntaje
    saludo = mensaje(puntaje);

    // Verifico la salida
    console.log(saludo);

    // Comunico al usuario el puntaje obtenido, cantidad de respuestas correctas y lo saludo en base al puntaje
    darNota(nombre, correctas, puntaje, saludo);

    // Evito que ante un doble submit se vuelva a ejecutar la función añadiendo el puntaje e imprimiendo nuevamente el resultado
    formulario.removeEventListener("submit", evaluarActividad);

    // Guardo el puntaje obtenido, junto con el área correspondiente para luego mostrarlo en el home.
    guardarPuntaje("soc", puntaje);
  }
}

//Creo una función para evaluar las respuestas del primer inciso

function evaluarRtas(rta, _num) {
  if (_num == 1) {
    switch (rta) {
      case "urbano":
        puntaje += 1;
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
      case "urbano":
        puntaje += 1;
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
      case "rural":
        puntaje += 1;
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
      case "urbano":
        puntaje += 1;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    }
    return puntaje;
  }
  if (_num == 5) {
    switch (rta) {
      case "rural":
        puntaje += 1;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    }
    return puntaje;
  }
  if (_num == 6) {
    switch (rta) {
      case "rural":
        puntaje += 1;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    }
  }
  if (_num == 7) {
    switch (rta) {
      case true:
        puntaje += 1;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    }
  }
  return puntaje;
}
