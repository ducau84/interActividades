// Importo las funciones que voy a necesitar

import {primerLetraMayusc} from "./commonFunctions.js";

// Capturo el elemento del DOM

const alumno = document.getElementById("alumno");

// Verifico si ya hay cargado un nombre en el Session Storage, si es asi ejecuto la funcion para mostrarlo, caso contrario ejecuto la función para pedirlo

sessionStorage.getItem("nombre") ? nombreEnStorage() : preguntarNombre();

// Utilizando la libreria SweetAlert2 pido al Alumno que ingrese su nombre, lo guardo en el Session Storage y lo muestro en el HTML

function preguntarNombre() {
  Swal.fire({
    title: "¡Bienvenid@ a INTERactividades!",
    input: "text",
    inputLabel:
      "Ingresa tu nombre para que tengas una experiencia personalizada:",
    showCancelButton: false,
    allowOutsideClick: false,
    confirmButtonText: "Confirmar",
    inputValidator: (nombre) => {
      if (!nombre) {
        return "Por favor escribe tu nombre";
      } else {
        return undefined;
      }
    },
  }).then((resultado) => {
    if (resultado.value !== undefined) {
      let nombre = primerLetraMayusc(resultado.value);
      saludoPersonalizado(nombre);
      sessionStorage.setItem("nombre", JSON.stringify(nombre));
    } else {
      preguntarNombre();
    }
  });
}

//creo una función para obtener el nombre del Storage y lo paso a otra funcion para mostrarlo en el HTML

function nombreEnStorage() {
  let nombre = JSON.parse(sessionStorage.getItem("nombre"));
  saludoPersonalizado(nombre);
}

function saludoPersonalizado(string) {
  alumno.innerText = `¡ Hola ${string} !`;
}

// Creo una función que muestre los puntajes obtenidos en base a lo guardado en el Storage (Funcion momentánea luego se mostrará en el HTML)

function muestraPuntajes() {
  const nombre = JSON.parse(sessionStorage.getItem("nombre"));
  // En caso de no encontrar uno de las dos evaluaciones, muestra el string aún no evaluado
  const pdl = JSON.parse(sessionStorage.getItem("pdl")) || "Aún no evaluado";
  const math = JSON.parse(sessionStorage.getItem("math")) || "Aún no evaluado";
  const nat = JSON.parse(sessionStorage.getItem("soc")) || "Aún no evaluado";
  const soc = JSON.parse(sessionStorage.getItem("nat")) || "Aún no evaluado";
  Swal.fire({
    title: `${nombre}, tus puntajes obtenidos son los siguientes:`,
    html: `Matemáticas: ${math}<br>Prácticas del Lenguaje: ${pdl}<br>Ciencias Sociales: ${soc}<br>Ciencias Naturales: ${nat}`,
    icon: "info",
  });
}

// En caso de haber tomado las evaluaciones de Matemáticas y/o las de Prácticas del Lenguaje muestro los puntajes obtenidos

const evaluaciones =
  sessionStorage.getItem("pdl") || sessionStorage.getItem("math")
    ? true
    : false;

evaluaciones ? muestraPuntajes() : console.log("Aun no hizo evaluaciones");
