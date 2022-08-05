import {
  primerLetraMayusc,
  saludoPersonalizado,
  volverAlHome,
} from "../../App.js";

// Utilizando la libreria SweetAlert2 pido al Alumno que ingrese su nombre, lo guardo en el Session Storage y lo muestro en el HTML

export function preguntarNombre() {
  Swal.fire({
    title: "¡Bienvenid@!",
    imageUrl: "./img/logo.png",
    imageAlt: "Logo",
    imageWidth: 300,
    imageHeight: 50,
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
      localStorage.setItem("nombre", JSON.stringify(nombre));
    } else {
      preguntarNombre();
    }
  });
};

// Creo una función para verificar que el usuario no haya realizado previamente la evaluacion y lo saludo acorde

export function bienvenidoArea(area, areaString, nombre) {
  sessionStorage.getItem(area)
    ? Swal.fire({
        allowOutsideClick: false,
        title: `${nombre}`,
        text: `¡Ya has hecho la evaluación de ${areaString}!`,
        icon: "error",
      }).then(function () {
        window.location = "../index.html";
      })
    : Swal.fire({
        allowOutsideClick: false,
        title: `${nombre}`,
        text: `¡Comencemos con la Evaluación de ${areaString}!`,
        imageUrl: `../img/modales/${area}.png`,
        imageWidth: 350,
        imageHeight: 231,
        imageAlt: `${areaString}`,
      });
};

// Creo una función para mostrar un modal una vez finalizada la evaluación, en el mismo se ven el nombre del alumno, la cantidad de rtas correctas, el puntaje obtenido /10 y finalmente un mensaje acorde al puntaje, al aceptar vuelve al home del sitio

export function darNota(a, b, c, d) {
  Swal.fire({
    allowOutsideClick: false,
    title: `${a}:`,
    imageUrl: "../img/logo.png",
    imageAlt: "Logo",
    imageWidth: 300,
    imageHeight: 50,
    html: ` <p style="color: white;">¡Obtuviste un total de: ${b} respuestas correctas!</p>
            <p style="font-size:2rem; color: white;">Tu nota es un: <b style="font-size: 2.5rem; color: red; text-shadow: 1px 1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px 1px 0 #ffffff, 0px 1px 0 #ffffff, -1px 0px 0 #ffffff, 0px -1px 0 #ffffff;">${c}</b></p>
            <p style="color: white;">${d}</p>`,
    showCancelButton: false,
    background: "#292a2d",
    confirmButtonColor: "#006432",
    confirmButtonText: "¡Genial!, volvamos al Inicio",
  }).then((result) => {
    if (result.isConfirmed) {
      volverAlHome();
    };
  });
};
