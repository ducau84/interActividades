// Importo las funciones necesarias

import {
  volverAlHome,
  traerNombreStorage,
  darNota,
  mensaje,
  validarRespuestaPalabra,
  guardarPuntaje,
} from "./commonFunctions.js";

// declaro las variables globales

let nombre = "";
let puntaje = 0;
let correctas = 0;
let saludo = "";

// Creo un array con las posibles respuestas, donde el orden indica que numero de respuesta es

const rimas = [
  {palabra: "mañana", orden: 0},
  {palabra: "ventana", orden: 11},
  {palabra: "hermana", orden: 2},
  {palabra: "perro", orden: 0},
  {palabra: "mitos", orden: 0},
  {palabra: "gritos", orden: 3},
  {palabra: "cama", orden: 9},
  {palabra: "mirar", orden: 6},
  {palabra: "melodía", orden: 8},
  {palabra: "agarrar", orden: 4},
  {palabra: "canto", orden: 7},
  {palabra: "bajo", orden: 0},
  {palabra: "piar", orden: 0},
  {palabra: "alto", orden: 5},
  {palabra: "ver", orden: 0},
  {palabra: "silla", orden: 0},
  {palabra: "día", orden: 10},
  {palabra: "llanto", orden: 0},
  {palabra: "atardecer", orden: 0},
  {palabra: "tía", orden: 0},
];

// Enumero las opciones para no tener que repetirlas una a una en el prompt

function addPistas() {
  const contPalabras = document.createElement("table");

  contPalabras.innerHTML = `<table>
                          <tr>
                              <td>${rimas[0].palabra}</td>
                              <td>${rimas[1].palabra}</td>
                              <td>${rimas[2].palabra}</td>
                              <td>${rimas[3].palabra}</td>
                          </tr>
                          <tr>
                              <td>${rimas[4].palabra}</td>
                              <td>${rimas[5].palabra}</td>
                              <td>${rimas[6].palabra}</td>
                              <td>${rimas[7].palabra}</td>
                          </tr>
                          <tr>
                              <td>${rimas[8].palabra}</td>
                              <td>${rimas[9].palabra}</td>
                              <td>${rimas[10].palabra}</td>
                              <td>${rimas[11].palabra}</td>
                          </tr>
                          <tr>
                              <td>${rimas[12].palabra}</td>
                              <td>${rimas[13].palabra}</td>
                              <td>${rimas[14].palabra}</td>
                              <td>${rimas[15].palabra}</td>
                          </tr>
                          <tr>
                              <td>${rimas[16].palabra}</td>
                              <td>${rimas[17].palabra}</td>
                              <td>${rimas[18].palabra}</td>
                              <td>${rimas[19].palabra}</td>
                          </tr>
                          </table>
                          `;
  const pistas = document.getElementById("pistas");
  pistas.appendChild(contPalabras);
}

addPistas();
// Creo un array vacio para contener posteriormente las respuestas del usuario
const respuestas = [];

// ordeno el array "rimas" en base al numero de la propiedad orden de cada objeto
rimas.sort(function (a, b) {
  return a.orden - b.orden;
});

// filtro el array "rimas" eliminando las incorrectas ( el valor de orden es 0)
const rimasCorrectas = rimas.filter((elemento) => elemento.orden != 0);

// Defino un event listener para el primer input, que al ser activado muestra su solución a modo de Ayuda

const ayuda1 = document.getElementById("ayuda");

ayuda1.addEventListener("click", verAyuda);

function verAyuda() {
  const ayuda = document.createElement("span");

  ayuda.innerHTML = `
                      <i class="bi bi-info-lg"></i> Ayuda: la primer palabra es: <strong>Mañana</strong>
                    `;
  const muestraAyuda = document.getElementById("ayuda");
  muestraAyuda.appendChild(ayuda);
  // Evito que ante un doble submit se vuelva a ejecutar la función añadiendo el puntaje e imprimiendo nuevamente el resultado

  ayuda1.removeEventListener("click", verAyuda);
}

// Defino un event listener para el formulario activado cuando el usuario hace click sobre el boton submit e invoco la funcion para evaluar

const formulario = document.getElementById("poesia");

formulario.addEventListener("submit", evaluarActividad);

// Evito el comportamiento por defecto

function evaluarActividad(e) {
  {
    e.preventDefault();

    // capturo los input y los asigno una constante

    const palabra1 = document.getElementById("palabra1").value;
    const palabra2 = document.getElementById("palabra2").value;
    const palabra3 = document.getElementById("palabra3").value;
    const palabra4 = document.getElementById("palabra4").value;
    const palabra5 = document.getElementById("palabra5").value;
    const palabra6 = document.getElementById("palabra6").value;
    const palabra7 = document.getElementById("palabra7").value;
    const palabra8 = document.getElementById("palabra8").value;
    const palabra9 = document.getElementById("palabra9").value;
    const palabra10 = document.getElementById("palabra10").value;
    const palabra11 = document.getElementById("palabra11").value;

    // valido lo ingresado

    if (
      validarRespuestaPalabra(palabra1, 1) == false ||
      validarRespuestaPalabra(palabra2, 2) == false ||
      validarRespuestaPalabra(palabra3, 3) == false ||
      validarRespuestaPalabra(palabra4, 4) == false ||
      validarRespuestaPalabra(palabra5, 5) == false ||
      validarRespuestaPalabra(palabra6, 6) == false ||
      validarRespuestaPalabra(palabra7, 7) == false ||
      validarRespuestaPalabra(palabra8, 8) == false ||
      validarRespuestaPalabra(palabra9, 9) == false ||
      validarRespuestaPalabra(palabra10, 10) == false ||
      validarRespuestaPalabra(palabra11, 11) == false
    ) {
      return;
    }

    // Creo objetos a partir de las respuestas

    /*     const respuesta1 = new Respuestas(palabra1, 1); */
    const respuesta2 = new Respuestas(palabra2, 2);
    const respuesta3 = new Respuestas(palabra3, 3);
    const respuesta4 = new Respuestas(palabra4, 4);
    const respuesta5 = new Respuestas(palabra5, 5);
    const respuesta6 = new Respuestas(palabra6, 6);
    const respuesta7 = new Respuestas(palabra7, 7);
    const respuesta8 = new Respuestas(palabra8, 8);
    const respuesta9 = new Respuestas(palabra9, 9);
    const respuesta10 = new Respuestas(palabra10, 10);
    const respuesta11 = new Respuestas(palabra11, 11);

    // Inserto los objetos creados anteriormente en el array Respuestas respetando el orden

    respuestas.push(
      respuesta2,
      respuesta3,
      respuesta4,
      respuesta5,
      respuesta6,
      respuesta7,
      respuesta8,
      respuesta9,
      respuesta10,
      respuesta11
    );

    // verifico las respuestas del usuario con las correctas mediante un bucle for que compara los objetos en los arrays

    for (var i in respuestas) {
      for (var j in respuestas) {
        if (
          JSON.stringify(respuestas[i]) == JSON.stringify(rimasCorrectas[j])
        ) {
          correctas++;
        }
      }
      console.log(correctas);
    }

    //Chequeo por consola en que pregunta se equivoco el usuario

    console.log(respuestas[0].palabra == rimasCorrectas[0].palabra);
    console.log(respuestas[1].palabra == rimasCorrectas[1].palabra);
    console.log(respuestas[2].palabra == rimasCorrectas[2].palabra);
    console.log(respuestas[3].palabra == rimasCorrectas[3].palabra);
    console.log(respuestas[4].palabra == rimasCorrectas[4].palabra);
    console.log(respuestas[5].palabra == rimasCorrectas[5].palabra);
    console.log(respuestas[6].palabra == rimasCorrectas[6].palabra);
    console.log(respuestas[7].palabra == rimasCorrectas[7].palabra);
    console.log(respuestas[8].palabra == rimasCorrectas[8].palabra);
    console.log(respuestas[9].palabra == rimasCorrectas[9].palabra);

    // Declaro la variable puntaje que coincide con la variable iguales al ser 10 preguntas

    puntaje = correctas;

    // Invoco la funcion que determina el saludo en base al puntaje
    saludo = mensaje(puntaje);

    // Verifico la salida
    console.log(saludo);

    // Comunico al usuario el puntaje obtenido, cantidad de respuestas correctas y lo saludo en base al puntaje
    darNota(nombre, correctas, puntaje, saludo);

    // Evito que ante un doble submit se vuelva a ejecutar la función añadiendo el puntaje e imprimiendo nuevamente el resultado
    formulario.removeEventListener("submit", evaluarActividad);

    // Guardo el puntaje obtenido, junto con el área correspondiente para luego mostrarlo en el home.
    guardarPuntaje("pdl", puntaje);
  }
}

// Creo la matriz para crear objetos en base a las respuestas, pasando las mismas a minusculas y dandole el orden para luego ser comparadas con las correctas
class Respuestas {
  constructor(palabra, orden) {
    this.palabra = palabra.toLowerCase();
    this.orden = Number(orden);
  }
}
// Verifico que el Alumno haya ingresado su nombre en la pantalla home y en caso de no encontrarlo en el session storage, lo mando al home para que lo ingrese

sessionStorage.getItem("nombre")
  ? (nombre = traerNombreStorage())
  : volverAlHome();

// Verifico que el Alumno no haya realizado la evaluación en esta sesión y muestro un mensaje acorde

sessionStorage.getItem("pdl")
  ? Swal.fire({
      title: `${nombre}`,
      text: `¡Ya has hecho la evaluación de Prácticas del Lenguaje!`,
      icon: "error",
    }).then(function () {
      window.location = "../index.html";
    })
  : Swal.fire({
      title: `${nombre}`,
      text: `¡Comencemos con la Evaluación de Prácticas del Lenguaje!`,
      imageUrl: "../img/seño pame.svg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Seño Pame",
    });
