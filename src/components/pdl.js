// Importo las funciones necesarias

import {
  volverAlHome,
  mensaje,
  validarRespuestaPalabra,
  guardarPuntaje,
  nombreEnStorage,
  desloguear,
  ordenarArray,
  filtrarCorrectas,
  removerTemp,
} from "../App.js";

import getData from "./controllers/getData.js";

import {
  bienvenidoArea, 
  darNota
} from "./utils/modalsSwal.js";

// declaro las variables globales

let puntaje = 0;
let correctas = 0;
let saludo = "";
let nombre = "";
let rimas = [];

// Verifico que el Alumno haya ingresado su nombre en la pantalla home y en caso de no encontrarlo en el local storage, lo mando al home para que lo ingrese

localStorage.getItem("nombre")
  ? (nombre = nombreEnStorage())
  : volverAlHome();

// Verifico que el Alumno no haya realizado aún la evaluación en esta sesión y muestro un mensaje acorde

bienvenidoArea("pdl", "Prácticas del Lenguaje", nombre);

// Boton "borrador" para desloguear

desloguear();

// Hago una petición al servidor y de la base de datos obtengo las posibles respuestas, donde el orden indica que numero de respuesta es

document.addEventListener("DOMContentLoaded", async () => {
  const datos = "https://interactividades-server.herokuapp.com/Rimas";
  rimas = await getData(datos);
  addPistas(rimas);
  ordenarArray(rimas);
  filtrarCorrectas(rimas, "rimas");

  // Creo una función para agregar una tabla con las palabras utilizables como posibles respuestas

  function addPistas(array) {
    const contPalabras = document.createElement("table");

    contPalabras.innerHTML = `<table>
                          <tr>
                              <td>${array[0].palabra}</td>
                              <td>${array[1].palabra}</td>
                              <td>${array[2].palabra}</td>
                              <td>${array[3].palabra}</td>
                          </tr>
                          <tr>
                              <td>${array[4].palabra}</td>
                              <td>${array[5].palabra}</td>
                              <td>${array[6].palabra}</td>
                              <td>${array[7].palabra}</td>
                          </tr>
                          <tr>
                              <td>${array[8].palabra}</td>
                              <td>${array[9].palabra}</td>
                              <td>${array[10].palabra}</td>
                              <td>${array[11].palabra}</td>
                          </tr>
                          <tr>
                              <td>${array[12].palabra}</td>
                              <td>${array[13].palabra}</td>
                              <td>${array[14].palabra}</td>
                              <td>${array[15].palabra}</td>
                          </tr>
                          <tr>
                              <td>${array[16].palabra}</td>
                              <td>${array[17].palabra}</td>
                              <td>${array[18].palabra}</td>
                              <td>${array[19].palabra}</td>
                          </tr>
                          </table>
                          `;
    const pistas = document.getElementById("pistas");
    pistas.appendChild(contPalabras);
  }
  // Defino un event listener para el formulario activado cuando el usuario hace click sobre el boton submit e invoco la funcion para evaluar

  const formulario = document.getElementById("poesia");

  formulario.addEventListener("submit", evaluarActividad);
});

//Defino un array vacio para contener posteriormente las respuestas del usuario

const respuestas = [];

// Capturo la primera casilla y la vinculo mediante un eventlistener "click" a la función para mostrar la ayuda de la primera palabra de la poesía
const ayuda1 = document.getElementById("ayuda");

ayuda1.addEventListener("click", verAyuda);

// Creo la matriz para crear objetos en base a las respuestas, pasando las mismas a minusculas y dandole el orden para luego ser comparadas con las correctas
class Respuestas {
  constructor(palabra, orden) {
    this.palabra = palabra.toLowerCase();
    this.orden = Number(orden);
  };
};

// Defino una función para que muestre la palabra correspondiente a la primera casilla cuando el alumno haga click sobre ella

function verAyuda() {
  const ayuda = document.createElement("span");
  ayuda.innerHTML = `
                      <i class="bi bi-info-lg"></i> Ayuda: la primer palabra es: <strong>Mañana</strong>
                    `;
  const muestraAyuda = document.getElementById("ayuda");
  muestraAyuda.appendChild(ayuda);

  // Evito que ante un mas de un click se vuelva a ejecutar la función acumulando elementos span

  ayuda1.removeEventListener("click", verAyuda);
};

// Creo la función para evaluar la actividad 

function evaluarActividad(e) {
  // Evito el comportamiento por defecto
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

    // Valido lo ingresado ( no pueden quedar casilleros en blanco, ni se pueden usar números para responder )

    if (
      validarRespuestaPalabra(palabra1, 0) == false ||
      validarRespuestaPalabra(palabra2, 1) == false ||
      validarRespuestaPalabra(palabra3, 2) == false ||
      validarRespuestaPalabra(palabra4, 3) == false ||
      validarRespuestaPalabra(palabra5, 4) == false ||
      validarRespuestaPalabra(palabra6, 5) == false ||
      validarRespuestaPalabra(palabra7, 6) == false ||
      validarRespuestaPalabra(palabra8, 7) == false ||
      validarRespuestaPalabra(palabra9, 8) == false ||
      validarRespuestaPalabra(palabra10, 9) == false ||
      validarRespuestaPalabra(palabra11, 10) == false
    ) {
      return;
    };

    // Creo objetos a partir de las respuestas (ignoro la palabra 1, ya que la respuesta es mostrada a modo de ayuda)

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

    // Accedo al array guardado previamente en el storage para compararlo con las respuestas del alumno
    const rimasCorrectas = JSON.parse(sessionStorage.getItem("rimas"));

    // Verifico las respuestas del usuario con las correctas mediante un bucle for que compara los objetos en los arrays

    for (var i in respuestas) {
      for (var j in respuestas) {
        if (
          JSON.stringify(respuestas[i]) == JSON.stringify(rimasCorrectas[j])
        ) {
          correctas++;
        };
      };
    };

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

    // Designo que el valor de la variable puntaje coincide con la variable iguales al ser 10 preguntas

    puntaje = correctas;

    // Invoco la funcion que determina el saludo en base al puntaje
    saludo = mensaje(puntaje);

    // Remuevo del Session Storage los datos guardados para realizar esta evaluacion
    removerTemp("rimas");
    
    // Comunico al usuario el puntaje obtenido, cantidad de respuestas correctas y lo saludo en base al puntaje
    darNota(nombre, correctas, puntaje, saludo);

    // Guardo el puntaje obtenido, junto con el área correspondiente para luego mostrarlo en el home.
    guardarPuntaje("pdl", puntaje);

  };
};
