// Importo las funciones que voy a necesitar

import {
  nombreEnStorage, 
  desloguear, 
  final} 
  from "./App.js";

import {
  preguntarNombre, 
  valoracionFinal
} from "./components/utils/modalsSwal.js";

// Verifico si ya hay cargado un nombre en el Local Storage, si es asi ejecuto la funcion para mostrarlo, caso contrario ejecuto la función para pedirlo

localStorage.getItem("nombre") ? nombreEnStorage() : preguntarNombre();

// Creo una función que muestre un modal con los puntajes obtenidos en base a lo guardado en el Storage

function muestraPuntajes() {
  // En caso de no encontrar uno de las evaluaciones, muestra el string aún no evaluado por consola
  const pdl =
    sessionStorage.getItem("pdl") ||
    console.log("PDL: Aún no evaluado");
  const math =
    sessionStorage.getItem("math") ||
    console.log("MAT: Aún no evaluado");
  const nat =
    sessionStorage.getItem("nat") ||
    console.log("NAT: Aún no evaluado");
  const soc =
    sessionStorage.getItem("soc") ||
    console.log("SOC: Aún no evaluado");
  puntObtenidos(pdl, math, soc, nat);
};

// En caso de haber tomado alguna de las 4 evaluaciones activo la función que muestra los puntajes obtenidos.

const evaluaciones =
  sessionStorage.getItem("pdl") ||
  sessionStorage.getItem("math") ||
  sessionStorage.getItem("soc") ||
  sessionStorage.getItem("nat")
    ? true
    : false;

evaluaciones ? muestraPuntajes() : console.log("Aun no hizo evaluaciones");


// En caso de haber finalizado 4 evaluaciones activo la función muestra una valoración final y permite volver a intentar o finalizar la experiencia.

function finalizarExperiencia(){
  const nombre = nombreEnStorage();
  const pdl = ~~sessionStorage.getItem("pdl");
  const math = ~~sessionStorage.getItem("math");
  const nat = ~~sessionStorage.getItem("nat");
  const soc = ~~sessionStorage.getItem("soc");
  const promedio = (pdl + math + nat + soc)/4;
  const valoracion = final(promedio);
  valoracionFinal(valoracion, nombre);
};


const finalizadas =
  sessionStorage.getItem("pdl") &&
  sessionStorage.getItem("math") &&
  sessionStorage.getItem("soc") &&
  sessionStorage.getItem("nat")
    ? true
    : false;

finalizadas ? finalizarExperiencia() : console.log("Evaluaciones pendientes");

// Creo una funcion que muestra el puntaje obtenido sobre la card de ingreso al área, bloqueando asi que se ingrese nuevamente hasta la proxima Session

function puntObtenidos(area1, area2, area3, area4) {
  if (area1 != undefined) {
    const notaPdl = document.createElement("p");
    notaPdl.classList.add("notaPortada");
    notaPdl.innerText = `Calificación: 
                        ${area1}`;
    const areaPdl = document.getElementById("notaPdl");
    areaPdl.appendChild(notaPdl);
  }
  if (area2 != undefined) {
    const notaMat = document.createElement("p");
    notaMat.classList.add("notaPortada");
    notaMat.innerText = `Calificación: 
                        ${area2}`;
    const areaMat = document.getElementById("notaMat");
    areaMat.appendChild(notaMat);
  }
  if (area3 != undefined) {
    const notaSoc = document.createElement("p");
    notaSoc.classList.add("notaPortada");
    notaSoc.innerText = `Calificación: 
                        ${area3}`;
    const areaSoc = document.getElementById("notaSoc");
    areaSoc.appendChild(notaSoc);
  }
  if (area4 != undefined) {
    const notaNat = document.createElement("p");
    notaNat.classList.add("notaPortada");
    notaNat.innerText = `Calificación: 
                          ${area4}`;
    const areaNat = document.getElementById("notaNat");
    areaNat.appendChild(notaNat);
  };
};

// Llamo a la funcion borrar los datos del alumno del Local Storage

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
};

function ocultarObjetivos(objBoton, obj, objShow) {
  objBoton.addEventListener("click", () => {
    obj.style.display = "none";
    objShow.style.display = "block";
  });
};
