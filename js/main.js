// Importo las funciones que voy a necesitar

import {
  primerLetraMayusc,
  nombreEnStorage,
  saludoPersonalizado,
  desloguear
} from "./app.js";


// Verifico si ya hay cargado un nombre en el Session Storage, si es asi ejecuto la funcion para mostrarlo, caso contrario ejecuto la función para pedirlo

sessionStorage.getItem("nombre") ? nombreEnStorage() : preguntarNombre();

// Utilizando la libreria SweetAlert2 pido al Alumno que ingrese su nombre, lo guardo en el Session Storage y lo muestro en el HTML

function preguntarNombre() {
  Swal.fire({
    title: "¡Bienvenid@!",
    imageUrl: "img/logo.png",
    imageAlt: "Logo",
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

// Creo una función que muestre los puntajes obtenidos en base a lo guardado en el Storage (Funcion momentánea luego se mostrará en el HTML)

function muestraPuntajes() {
  const nombre = JSON.parse(sessionStorage.getItem("nombre"));
  // En caso de no encontrar uno de las dos evaluaciones, muestra el string aún no evaluado
  const pdl = JSON.parse(sessionStorage.getItem("pdl")) || "Aún no evaluado";
  const math = JSON.parse(sessionStorage.getItem("math")) || "Aún no evaluado";
  const nat = JSON.parse(sessionStorage.getItem("nat")) || "Aún no evaluado";
  const soc = JSON.parse(sessionStorage.getItem("soc")) || "Aún no evaluado";
  Swal.fire({
    title: `${nombre}, tus puntajes obtenidos son los siguientes:`,
    html: `Matemáticas: ${math}<br>Prácticas del Lenguaje: ${pdl}<br>Ciencias Sociales: ${soc}<br>Ciencias Naturales: ${nat}`,
    icon: "info",
  });
}

// En caso de haber tomado las evaluaciones de Matemáticas y/o las de Prácticas del Lenguaje muestro los puntajes obtenidos

const evaluaciones =
  sessionStorage.getItem("pdl") || sessionStorage.getItem("math") || sessionStorage.getItem("soc") || sessionStorage.getItem("nat")
    ? true
    : false;

evaluaciones ? muestraPuntajes() : console.log("Aun no hizo evaluaciones");

// Creo un boton para borrar los datos del usuario del Session Storage

desloguear();

// Creo un boton para mostrar u ocultar los objetivos de cada área modificando el atributo display
const objetivosPdl = document.getElementById("objetivosPdl");
const objetivosPdlShow = document.getElementById("objetivosPdlShow");
const objetivosPdlHide = document.getElementById("objetivosPdlHide");

mostrarObjetivos(objetivosPdlShow, objetivosPdl);
ocultarObjetivos(objetivosPdlHide, objetivosPdl, objetivosPdlShow);

const objetivosMath = document.getElementById("objetivosMath");
const objetivosMathShow = document.getElementById("objetivosMathShow");
const objetivosMathHide = document.getElementById("objetivosMathHide");

mostrarObjetivos(objetivosMathShow, objetivosMath);
ocultarObjetivos(objetivosMathHide, objetivosMath, objetivosMathShow);

const objetivosSoc = document.getElementById("objetivosSoc");
const objetivosSocShow = document.getElementById("objetivosSocShow");
const objetivosSocHide = document.getElementById("objetivosSocHide");

mostrarObjetivos(objetivosSocShow, objetivosSoc);
ocultarObjetivos(objetivosSocHide, objetivosSoc, objetivosSocShow);

const objetivosNat = document.getElementById("objetivosNat");
const objetivosNatShow = document.getElementById("objetivosNatShow");
const objetivosNatHide = document.getElementById("objetivosNatHide");

mostrarObjetivos(objetivosNatShow, objetivosNat);
ocultarObjetivos(objetivosNatHide, objetivosNat, objetivosNatShow);

function mostrarObjetivos(objBoton, obj) {
  objBoton.addEventListener("click", () => {
    obj.style.display = "block";
    objBoton.style.display = "none";
  });
}

function ocultarObjetivos(objBoton, obj, objShow) {
  objBoton.addEventListener("click", () => {
    obj.style.display = "none";
    objShow.style.display = "block";
  });
}
