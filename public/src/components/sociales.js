// Importo las funciones necesarias

import {
  volverAlHome,
  mensaje,
  validarSeleccion,
  guardarPuntaje,
  nombreEnStorage,
  desloguear,
  validarRadio,
  removerTemp
} from "../App.js";

import getData from "./controllers/getData.js";

import {
  bienvenidoArea, 
  darNota
} from "./utils/modalsSwal.js";

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

bienvenidoArea("soc", "Ciencias Sociales", nombre);

//Al cargar el HTML hago una petición al servidor y traigo de la base de datos los objetos que se mostrarán en la consigna número 1

window.addEventListener("DOMContentLoaded", async () => {
  const datos = "https://interact-server-production.up.railway.app/Zonas";
  const zonas = await getData(datos);
  sessionStorage.setItem("zonas", JSON.stringify(zonas));
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
  // Defino un event listener para el formulario activado cuando el usuario hace click sobre el boton submit e invoco la funcion para evaluar

  const formulario = document.getElementById("campoCiudad");

  formulario.addEventListener("submit", evaluarActividad);
});

// Creo la función para evaluar la actividad 

function evaluarActividad(e) {
  {
// Evito el comportamiento por defecto
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

    //valido que no hayan quedado items sin responder

    if (
      validarSeleccion(zona1, 0) == false ||
      validarSeleccion(zona2, 1) == false ||
      validarSeleccion(zona3, 2) == false ||
      validarSeleccion(zona4, 3) == false ||
      validarSeleccion(zona5, 4) == false ||
      validarSeleccion(zona6, 5) == false ||
      validarRadio(radioP1O1, radioP1O2, radioP1O3, "A") == false ||
      validarRadio(radioP2O1, radioP2O2, radioP2O3, "B") == false ||
      validarRadio(radioP3O1, radioP3O2, false, "C") == false ||
      validarRadio(radioP4O1, radioP4O2, false, "D") == false
    ) {
      return;
    };

    //Evalúo las respuestas del primer ejercicio, creando primero objetos con las propiedades id y zona y luego armando un array con ellas para compararlo con los datos traidos desde el "servidor" (archivo zonas.json)

    const respuesta1 = new Respuestas(zona1, 1);
    const respuesta2 = new Respuestas(zona2, 2);
    const respuesta3 = new Respuestas(zona3, 3);
    const respuesta4 = new Respuestas(zona4, 4);
    const respuesta5 = new Respuestas(zona5, 5);
    const respuesta6 = new Respuestas(zona6, 6);

    respuestas.push(
      respuesta1,
      respuesta2,
      respuesta3,
      respuesta4,
      respuesta5,
      respuesta6
    );

    let respuestasAlumno = respuestas.map(function (elem) {
      let rtasAlumno = {id: elem.id, zona: elem.zona};
      return rtasAlumno;
    });

    //Creo un nuevo array filtrando el previamente guardado en el Storage, tomando del mismo las propiedades "zona" e "id", para luego ser comparados con las respuestas provistas por el alumno

    const zonasStorage = JSON.parse(sessionStorage.getItem("zonas"));

    let zonasCorrectas = zonasStorage.map(function (elem) {
      let zonasCorrectas = {id: elem.id, zona: elem.zona.toLowerCase()};
      return zonasCorrectas;
    });

    for (var i in respuestas) {
      for (var j in respuestas) {
        if (
          JSON.stringify(respuestasAlumno[i]) ==
          JSON.stringify(zonasCorrectas[j])
        ) {
          puntaje += 1;
          correctas++;
        };
      };
    };

    console.log(puntaje, correctas);

    evaluarRtas(radioP1O3);
    evaluarRtas(radioP2O3);
    evaluarRtas(radioP3O1);
    evaluarRtas(radioP4O1);

    // Invoco la funcion que determina el saludo en base al puntaje
    saludo = mensaje(puntaje);

  // Remuevo del Session Storage los datos guardados para realizar esta evaluacion
  removerTemp("zonas");

    // Comunico al usuario el puntaje obtenido, cantidad de respuestas correctas y lo saludo en base al puntaje
    darNota(nombre, correctas, puntaje, saludo);

    // Guardo el puntaje obtenido, junto con el área correspondiente para luego mostrarlo en el home.
    guardarPuntaje("soc", puntaje);

  };
};

// Creo la matriz para crear objetos en base a las respuestas seleccionadas

class Respuestas {
  constructor(zona, id) {
    this.id = id;
    this.zona = zona;
  }
}

// Creo una función para evaluar las respuestas del segundo inciso

function evaluarRtas(rta) {
  switch (rta) {
    case true:
      puntaje += 1;
      correctas++;
      break;

    default:
      puntaje += 0;
      break;
  }
  return puntaje;
}
