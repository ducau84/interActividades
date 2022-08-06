// Importo las funciones necesarias

import {
  alumnoLogueado,
  nombreEnStorage,
  mensaje,
  validarRespuestaNumero,
  guardarPuntaje,
  desloguear,
  removerTemp
} from "../App.js";

import getData from "./controllers/getData.js";

import {
  darNota, 
  bienvenidoArea
} from "./utils/modalsSwal.js";

// Muestro el nombre del alumno en el pizarrón

let nombre = nombreEnStorage();

// Verifico que el Alumno haya ingresado su nombre en la pantalla home y en caso de no encontrarlo en el local storage, lo mando al home para que lo ingrese

localStorage.getItem("nombre") ? (nombre = nombreEnStorage()) : volverAlHome();

// Boton borrador para desloguear

desloguear();

// Defino las variables globales

let puntaje = 0;
let correctas = 0;
let saludo = "";
let problemas = [];

// Creo una función que determine el puntaje y la cantidad de respuestas correctas

document.addEventListener("DOMContentLoaded", async () => {

  // De la base de datos del servidor obtengo las posibles respuestas, donde el id indica a que problema pertenecen
  
  const datos = "https://interactividades-server.herokuapp.com/Problemas";
  problemas = await getData(datos);

  //Represento en el documento los datos cargados desde el archivo problemas.json

  function datosProblemas(campo, datos) {
    campo = document.getElementById(campo);
    campo.innerText = datos;
  };

  //Creo una función para añadir un separador (.) cada tres cifras

  const separaTres = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = "$1.";
    return number.toString().replace(exp, rep);
  };

  function fillProblemas(problemas) {
    datosProblemas("pasajeros", separaTres(problemas[0].dato1));
    datosProblemas("mujeres", separaTres(problemas[0].dato2));
    datosProblemas("paquetes", separaTres(problemas[1].dato1));
    datosProblemas("galletitas", separaTres(problemas[1].dato2));
    datosProblemas("viernes", separaTres(problemas[2].dato1));
    datosProblemas("sabado", separaTres(problemas[2].dato2));
    datosProblemas("domingo", separaTres(problemas[2].dato3));
    datosProblemas("ahorros", separaTres(problemas[3].dato1));
    datosProblemas("tablet", separaTres(problemas[3].dato2));
  };

  //Invoco la funcion

  fillProblemas(problemas);

  // Obtengo las respuestas a cada problema y las guardo en el SessionStorage

  const rta1 = problemas[0].dato1 - problemas[0].dato2;
  sessionStorage.setItem("r1", rta1);
  const rta2 = problemas[1].dato1 * problemas[1].dato2;
  sessionStorage.setItem("r2", rta2);
  const rta3 = problemas[2].dato1 + problemas[2].dato2 + problemas[2].dato3;
  sessionStorage.setItem("r3", rta3);
  const rta4 = problemas[3].dato1 - problemas[3].dato2;
  sessionStorage.setItem("r4", rta4);

  // Defino un event listener para el formulario activado cuando el usuario hace click sobre el boton submit e invoco la funcion para evaluar

  const formulario = document.getElementById("problemas");

  formulario.addEventListener("submit", evaluarActividad);

});

//Defino una función para obtener los resultados previamente guardados y los convierto a número anteponiendo ~~

const getRtas = ans => {
  const result = ~~sessionStorage.getItem(ans);
  return result;
};

function pregunta(rta, _num) {
  if (_num == 1) {
    switch (rta) {
      case getRtas("r1"):
        puntaje += 2.5;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    };
    return puntaje;
  }
  if (_num == 2) {
    switch (rta) {
      case getRtas("r2"):
        puntaje += 2.5;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    };
    return puntaje;
  }
  if (_num == 3) {
    switch (rta) {
      case getRtas("r3"):
        puntaje += 2.5;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    };
    return puntaje;
  }
  if (_num == 4) {
    switch (rta) {
      case getRtas("r4"):
        puntaje += 2.5;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    };
    return puntaje;
  };
};

// Verifico que el Alumno haya ingresado su nombre en la pantalla home y en caso de no encontrarlo en el session storage, lo mando al home para que lo ingrese

alumnoLogueado(nombre);

// Verifico que el Alumno no haya realizado la evaluación en esta sesión y muestro un mensaje acorde

bienvenidoArea("math", "Matemáticas", nombre);

// Creo la función para evaluar la actividad

function evaluarActividad(e) {
  {
    // Evito el comportamiento por defecto
    e.preventDefault();

    //Primera Pregunta
    
    let rta = document.getElementById("rta1").value;

    // valido lo ingresado

    if (validarRespuestaNumero(rta, 0) == false) {
      puntaje = 0;
      correctas = 0;
      return;
    } else {
    
      // Invoco la funcion para verificar si la respuesta es correcta o no
      pregunta(Number(rta), 1);
    };

    // Segunda pregunta

    rta = document.getElementById("rta2").value;

    // valido lo ingresado
    
    if (validarRespuestaNumero(rta, 1) == false) {
      puntaje = 0;
      correctas = 0;
      return;
    } else {
    
      // Invoco la funcion para verificar si la respuesta es correcta o no
      pregunta(Number(rta), 2);
    };

    // Tercera pregunta

    rta = document.getElementById("rta3").value;

    // valido lo ingresado
    
    if (validarRespuestaNumero(rta, 2) == false) {
      puntaje = 0;
      correctas = 0;
      return;
    } else {
    
      // Invoco la funcion para verificar si la respuesta es correcta o no
      pregunta(Number(rta), 3);
    };

    // Cuarta pregunta

    rta = document.getElementById("rta4").value;

    // valido lo ingresado
    if (validarRespuestaNumero(rta, 3) == false) {
      puntaje = 0;
      correctas = 0;
      return;
    } else {
      
      // Invoco la funcion para verificar si la respuesta es correcta o no
      pregunta(Number(rta), 4);
    };

    // Invoco la funcion que determina el saludo en base al puntaje
    saludo = mensaje(puntaje);

    // Remuevo del Session Storage los datos guardados para realizar esta evaluacion
    removerTemp("r1");
    removerTemp("r2");
    removerTemp("r3");
    removerTemp("r4");

    // Comunico al usuario el puntaje obtenido, cantidad de respuestas correctas y lo saludo en base al puntaje
    darNota(nombre, correctas, puntaje, saludo);

    // Guardo el puntaje obtenido, junto con el área correspondiente para luego mostrarlo en el home.
    guardarPuntaje("math", puntaje);

  };
};
