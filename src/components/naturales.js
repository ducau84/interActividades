// Importo las funciones necesarias

import {
  volverAlHome,
  mensaje,
  validarSeleccion,
  guardarPuntaje,
  nombreEnStorage,
  desloguear,
  ordenarArray,
  filtrarCorrectas,
  removerTemp
} from "../App.js";

import getData from "./controllers/getData.js";

import {bienvenidoArea, darNota} from "./utils/modalsSwal.js";

// Muestro el nombre del alumno en el pizarrón

let nombre = nombreEnStorage();

// Boton borrador para desloguear

desloguear();

// declaro las variables globales

let puntaje = 0;
let correctas = 0;
let saludo = "";

//Defino un array vacio para contener posteriormente las respuestas del usuario

const respuestas = [];

// Verifico que el Alumno haya ingresado su nombre en la pantalla home y en caso de no encontrarlo en el local storage, lo mando al home para que lo ingrese

localStorage.getItem("nombre")
  ? (nombre = nombreEnStorage())
  : volverAlHome();

// Verifico que el Alumno no haya realizado la evaluación en esta sesión y muestro un mensaje acorde

bienvenidoArea("nat", "Ciencias Naturales", nombre);

//Defino el origen de los datos simulando la carga desde un servidor y muestro las opciones en cada campo "Select"

window.addEventListener("DOMContentLoaded", async () => {
  const datos = "../../src/data/sistemas.json";
  const sistemas = await getData(datos);
  const selects = document.querySelectorAll(".sistemasSelect");

  selects.forEach((select) => {
    sistemas.forEach((sistema) => {
      const option = document.createElement("option");
      option.text = `${sistema.organo.toUpperCase()}`;
      option.value = `${sistema.organo}`;
      select.add(option);
    });
  });

  // Ordeno los objetos del array basandome en su propiedad "orden" y luego los filtro eliminando los que tienen valor "0", luego lo guardo en el session storage para su posterior acceso
  ordenarArray(sistemas);

  filtrarCorrectas(sistemas, "sistemas");

  // Defino un event listener para el formulario activado cuando el usuario hace click sobre el boton submit e invoco la funcion para evaluar

  const formulario = document.getElementById("sistemasCuerpo");

  formulario.addEventListener("submit", evaluarActividad);
});

//Creo la función para evaluar la actividad

function evaluarActividad(e) {
  {
    // Evito el comportamiento por defecto
    e.preventDefault();

    // capturo los select y los asigno una constante

    const sist1 = document.getElementById("circ1").value;
    const sist2 = document.getElementById("circ2").value;
    const sist3 = document.getElementById("resp1").value;
    const sist4 = document.getElementById("resp2").value;
    const sist5 = document.getElementById("resp3").value;
    const sist6 = document.getElementById("urin1").value;
    const sist7 = document.getElementById("urin2").value;
    const sist8 = document.getElementById("dige1").value;
    const sist9 = document.getElementById("dige2").value;
    const sist10 = document.getElementById("dige3").value;

    //valido que no hayan quedado items sin responder, en caso de haber freno la ejecución de la función y alerto al alumno

    if (
      validarSeleccion(sist1, 0) == false ||
      validarSeleccion(sist2, 1) == false ||
      validarSeleccion(sist3, 2) == false ||
      validarSeleccion(sist4, 3) == false ||
      validarSeleccion(sist5, 4) == false ||
      validarSeleccion(sist6, 5) == false ||
      validarSeleccion(sist7, 6) == false ||
      validarSeleccion(sist8, 7) == false ||
      validarSeleccion(sist9, 8) == false ||
      validarSeleccion(sist10, 9) == false
    ) {
      return;
    };

    //Evalúo las respuestas del primer ejercicio, creando primero objetos con las propiedades id y zona y luego armando un array con ellas, filtrándolo y ordenándolo para compararlo con los datos traidos desde el "servidor" (archivo sistemas.json)

    const respuesta1 = new Respuestas(sist1, 1);
    const respuesta2 = new Respuestas(sist2, 2);
    const respuesta3 = new Respuestas(sist3, 3);
    const respuesta4 = new Respuestas(sist4, 4);
    const respuesta5 = new Respuestas(sist5, 5);
    const respuesta6 = new Respuestas(sist6, 6);
    const respuesta7 = new Respuestas(sist7, 7);
    const respuesta8 = new Respuestas(sist8, 8);
    const respuesta9 = new Respuestas(sist9, 9);
    const respuesta10 = new Respuestas(sist10, 10);

    respuestas.push(
      respuesta1,
      respuesta2,
      respuesta3,
      respuesta4,
      respuesta5,
      respuesta6,
      respuesta7,
      respuesta8,
      respuesta9,
      respuesta10
    );

    let rtasAlumno = respuestas.map(function (elem) {
      let rtasAlumno = {organo: elem.organo, orden: elem.orden};
      return rtasAlumno;
    });

    // Accedo al array guardado previamente en el storage para compararlo con las respuestas del alumno
    const sistCorrectas = JSON.parse(sessionStorage.getItem("sistemas"));

    // Verifico las respuestas del usuario con las correctas mediante un bucle for que compara los objetos en los arrays

    for (var i in rtasAlumno) {
      for (var j in rtasAlumno) {
        if (JSON.stringify(rtasAlumno[i]) == JSON.stringify(sistCorrectas[j])) {
          puntaje += 1;
          correctas++;
        };
      };
    };

    // Invoco la funcion que determina el saludo en base al puntaje
    saludo = mensaje(puntaje);

    // Verifico la salida
    console.log(saludo);

    // Comunico al usuario el puntaje obtenido, cantidad de respuestas correctas y lo saludo en base al puntaje
    darNota(nombre, correctas, puntaje, saludo);

    // Remuevo del Session Storage los datos guardados para realizar esta evaluacion
    removerTemp("sistemas");

    // Guardo el puntaje obtenido, junto con el área correspondiente para luego mostrarlo en el home.
    guardarPuntaje("nat", puntaje);

  };
};

// Creo la matriz para crear objetos en base a las respuestas seleccionadas

class Respuestas {
  constructor(organo, orden) {
    this.organo = organo;
    this.orden = orden;
  };
};
