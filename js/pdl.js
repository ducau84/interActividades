// declaro las variables globales

let nombre = "";
let iguales = 0;
let saludo = "";

// Creo un array con las posibles respuestas, donde el orden indica que numero de respuesta es

const rimas = [
  {palabra: "mañana", orden: 1},
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
const correctas = rimas.filter((elemento) => elemento.orden != 0);

// Creo una función para pasar la primera letra a mayúscula

function primerLetraMayusc(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Creo una función que muestre un mensaje determinado en función del puntaje obtenido

function mensaje(a) {
  if (a == 10) {
    saludo = "¡Felicitaciones, obtuviste un puntaje perfecto!";
  }
  if (a >= 7 && a < 10) {
    saludo = "¡Felicitaciones, aprobaste, pero podes hacerlo aún mejor!";
  }
  if (a < 7) {
    saludo =
      "Sigue esforzandote! ¡Con paciencia y dedidación vas a lograr aprobar!";
  }
  return saludo;
}

// Creo una función que muestra la nota obtenida en el documento

function darNota() {

  const nota = document.createElement("p");

  nota.innerHTML = `  <p><strong>${nombre}:</strong></p>
                      <p>¡Obtuviste un total de: ${iguales} respuestas correctas!</p>
                      <p>Tu nota fue un: <strong style="font-size: 2rem;">${iguales}</strong></p>
                      <p>${saludo}</p>
                    `;
  
  const imprimeNota = document.getElementById("nota");
  imprimeNota.appendChild(nota);

  // Evito que ante un doble submit se vuelva a ejecutar la función añadiendo el puntaje e imprimiendo nuevamente el resultado
  
  formulario.removeEventListener ("submit", evaluarPoesia);
}

// Creo una funcion para pintar de rojo el fondo del casillero

function pintarFondo(_num, color) {
  casillero = document.body.getElementsByTagName("input")[_num];
  casillero.style.background = color;
  console.log(casillero);
}

// Creo una función para verficar que no se hayan dejado casilleros en blanco o usado números para completar

function validarRespuesta(palabra, _num) {
  if (palabra === "") {
    error = alert(`¡No has ingresado nada en el casillero número ${_num}! 
    
    Intenta de nuevo:`);
    pintarFondo(_num, "#ff000073");
    return false;
  }
  if (palabra == null || !isNaN(palabra)) {
    error = alert(`¡No puedes ingresar números en el casillero número ${_num}!

    
    Intenta de nuevo:`);
    pintarFondo(_num, "#ff000073");
    return false;
  }
}

const ayuda1 = document.getElementById("ayuda");

ayuda1.addEventListener("click", verAyuda);

function verAyuda() { 
  const ayuda = document.createElement("span");

  ayuda.innerHTML = `
                      <span> <i class="bi bi-info-lg"></i> Ayuda: la primer palabra es: <strong>Mañana</strong>  </span>
                    `
  const muestraAyuda = document.getElementById("ayuda")
  muestraAyuda.appendChild(ayuda)
// Evito que ante un doble submit se vuelva a ejecutar la función añadiendo el puntaje e imprimiendo nuevamente el resultado
  
ayuda1.removeEventListener ("click", verAyuda );
}


// Defino un event listener para el formulario activado cuando el usuario hace click sobre el boton submit e invoco la funcion para evaluar

const formulario = document.getElementById("poesia");

formulario.addEventListener("submit", evaluarPoesia);

 // Evito el comportamiento por defecto 

function evaluarPoesia(event) {
  {
    event.preventDefault();

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
      validarRespuesta(palabra1, 1) == false ||
      validarRespuesta(palabra2, 2) == false ||
      validarRespuesta(palabra3, 3) == false ||
      validarRespuesta(palabra4, 4) == false ||
      validarRespuesta(palabra5, 5) == false ||
      validarRespuesta(palabra6, 6) == false ||
      validarRespuesta(palabra7, 7) == false ||
      validarRespuesta(palabra8, 8) == false ||
      validarRespuesta(palabra9, 9) == false ||
      validarRespuesta(palabra10, 10) == false ||
      validarRespuesta(palabra11, 11) == false
    ) {
      return;
    }

    // Creo objetos a partir de las respuestas

    const respuesta1 = new Respuestas(palabra1, 1);
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

    console.log(
      respuesta1,
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

    // Inserto los objetos creados anteriormente en el array Respuestas respetando el orden

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
      respuesta10,
      respuesta11
    );

    // comparo las respuestas del usuario con las correctas mediante la comparacion de objetos en el array omito el objeto 0 ya que no evaluo esa respuesta

    if (respuestas[1].palabra == correctas[1].palabra) {
      iguales += 1;
    } else {
      iguales += 0;
    }
    if (respuestas[2].palabra == correctas[2].palabra) {
      iguales += 1;
    } else {
      iguales += 0;
    }
    if (respuestas[3].palabra == correctas[3].palabra) {
      iguales += 1;
    } else {
      iguales += 0;
    }
    if (respuestas[4].palabra == correctas[4].palabra) {
      iguales += 1;
    } else {
      iguales += 0;
    }
    if (respuestas[5].palabra == correctas[5].palabra) {
      iguales += 1;
    } else {
      iguales += 0;
    }
    if (respuestas[6].palabra == correctas[6].palabra) {
      iguales += 1;
    } else {
      iguales += 0;
    }
    if (respuestas[7].palabra == correctas[7].palabra) {
      iguales += 1;
    } else {
      iguales += 0;
    }
    if (respuestas[8].palabra == correctas[8].palabra) {
      iguales += 1;
    } else {
      iguales += 0;
    }
    if (respuestas[9].palabra == correctas[9].palabra) {
      iguales += 1;
    } else {
      iguales += 0;
    }
    if (respuestas[10].palabra == correctas[10].palabra) {
      iguales += 1;
    } else {
      iguales += 0;
    }

    //Chequeo por consola en que pregunta se equivoco el usuario

    console.log(respuestas[1].palabra == correctas[1].palabra);
    console.log(respuestas[2].palabra == correctas[2].palabra);
    console.log(respuestas[3].palabra == correctas[3].palabra);
    console.log(respuestas[4].palabra == correctas[4].palabra);
    console.log(respuestas[5].palabra == correctas[5].palabra);
    console.log(respuestas[6].palabra == correctas[6].palabra);
    console.log(respuestas[7].palabra == correctas[7].palabra);
    console.log(respuestas[8].palabra == correctas[8].palabra);
    console.log(respuestas[9].palabra == correctas[9].palabra);
    console.log(respuestas[10].palabra == correctas[10].palabra);

    // Declaro la variable puntaje que coincide con la variable iguales al ser 10 preguntas

    let puntaje = iguales;

    // Invoco la funcion que determina el saludo en base al puntaje
    saludo = mensaje(puntaje);

    // Verifico la salida
    console.log(saludo);

    // Comunico al usuario el puntaje obtenido, cantidad de respuestas correctas y lo saludo en base al puntaje
    darNota();
  }
}

class Respuestas {
  constructor(palabra, orden) {
    this.palabra = palabra.toLowerCase();
    this.orden = Number(orden);
  }
}
// Pido al usuario que ingrese su nombre ( a futuro esto lo va a tomar del registro inicial )

nombre = prompt("Por favor Ingresa tu nombre:");

// Valido que el nombre no esté en blanco o utilice un número como nombre

while (nombre == "" || nombre == null || !isNaN(nombre)) {
  alert(`¡No has ingresado un nombre válido! Intenta de nuevo:`);
  nombre = prompt("¡Bienvenido!, por favor ingrese su nombre:");
}

// Pongo en mayuscula la primera letra en caso que ingrese el nombre en minusculas

nombre = primerLetraMayusc(nombre);

// Saludo personalizado

alert(`${nombre} ¡Comencemos con la Evaluación de Prácticas del Lenguaje!`);

