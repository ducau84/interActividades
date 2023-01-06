import {
  primerLetraMayusc,
  removerTemp,
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
    showClass: {
      popup: "animate__animated animate__zoomInDown",
    },
    hideClass: {
      popup: "animate__animated animate__zoomOut",
    },
    inputValidator: (nombre) => {
      if (!nombre) {
        return "Por favor escribe tu nombre";
      } else {
        return undefined;
      };
    },
  }).then((resultado) => {
    if (resultado.value !== undefined) {
      let nombre = primerLetraMayusc(resultado.value);
      saludoPersonalizado(nombre);
      localStorage.setItem("nombre", JSON.stringify(nombre));
    } else {
      preguntarNombre();
    };
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
        showClass: {
          popup: "animate__animated animate__tada",
        },
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
        showClass: {
          popup: "animate__animated animate__zoomInDown",
        },
        hideClass: {
          popup: "animate__animated animate__zoomOut",
        },
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
    confirmButtonText: "¡GENIAL! VOLVAMOS AL INICIO",
    showClass: {
      popup: "animate__animated animate__zoomInDown",
    },
    hideClass: {
      popup: "animate__animated animate__zoomOut",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      volverAlHome();
    };
  });
};

//Creo el modal final que muestra la valoración, y permite volver a intentar o finalizar la experiencia

export function valoracionFinal(valoracion, nombre) {
  Swal.fire({
    allowOutsideClick: false,
    imageUrl: "./img/logo.png",
    imageAlt: "Logo",
    imageWidth: 300,
    imageHeight: 50,
    background: "#292a2d",
    title: "&#127881 ¡Felicitaciones! &#127881",
    html: ` <p style="font-size: 1.5rem; color: white">¡Has completado todas las Evaluaciones!</p>
            <p style="font-weight: 400; font-size: 3rem; color: red; font-family: 'Pacifico', cursive; text-transform: capitalize; text-shadow: 1px 1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px 1px 0 #ffffff, 0px 1px 0 #ffffff, -1px 0px 0 #ffffff, 0px -1px 0 #ffffff;">${nombre}</p>
            <p style="padding: 0 1rem; color: white;">${valoracion}</p>`,
    showCancelButton: true,
    confirmButtonColor: "#006432",
    cancelButtonColor: "#fc2f2f",
    confirmButtonText: "Finalizar",
    cancelButtonText: "Volver a Intentar",
    showClass: {
      popup: "animate__animated animate__zoomInDown",
    },
    hideClass: {
      popup: "animate__animated animate__zoomOut",
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        allowOutsideClick: false,
        imageUrl: "./img/logo.png",
        imageAlt: "Logo",
        imageWidth: 300,
        imageHeight: 50,
        background: "#292a2d",
        confirmButtonText: "Aceptar",
        showCancelButton: false,
        title: "¡Muchas gracias por visitarnos!",
        html: `<p style="padding: 0 1rem; color: white;">¡Síguenos en nuestras redes para enterarte de todas las novedades!</p>`,
        showClass: {
          popup: "animate__animated animate__zoomInDown",
        },
        hideClass: {
          popup: "animate__animated animate__zoomOut",
        }
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        allowOutsideClick: false,
        imageUrl: "./img/logo.png",
        imageAlt: "Logo",
        imageWidth: 300,
        imageHeight: 50,
        background: "#292a2d",
        confirmButtonText: "Aceptar",
        showCancelButton: false,
        title: "¡Vamos a probar de nuevo!",
        html: `<p style="color: white;">¡Vámos que puedes hacerlo mejor!</p>`,
        showClass: {
          popup: "animate__animated animate__zoomInDown",
        },
        hideClass: {
          popup: "animate__animated animate__zoomOut",
        }
      });
      removerTemp("pdl");
      removerTemp("math");
      removerTemp("soc");
      removerTemp("nat");
      volverAlHome();
    };
  });
};
