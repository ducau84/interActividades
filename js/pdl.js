// declaro las variables globales

let nombre = "";
let palabra1 = "";
let palabra2 = "";
let palabra3 = "";
let palabra4 = "";
let palabra5 = "";
let palabra6 = "";
let palabra7 = "";
let palabra8 = "";
let palabra9 = "";
let palabra10 = "";
let palabra11 = "";
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

let opciones = `
${rimas[0].palabra} - ${rimas[1].palabra} - ${rimas[2].palabra} - ${rimas[3].palabra}
${rimas[4].palabra} - ${rimas[5].palabra} - ${rimas[6].palabra} - ${rimas[7].palabra}
${rimas[8].palabra} - ${rimas[9].palabra} - ${rimas[10].palabra} - ${rimas[11].palabra}
${rimas[12].palabra} - ${rimas[13].palabra} - ${rimas[14].palabra} - ${rimas[15].palabra}
`;

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
};

// Creo una función que muestre un mensaje determinado en función del puntaje obtenido

function mensaje(a) {
  if ((a == 10)) {
    saludo = "¡Felicitaciones, obtuviste un puntaje perfecto!";
  }
  if (a >= 7 && a < 10) {
    saludo = "¡Felicitaciones, aprobaste, pero podes hacerlo aún mejor!";
  }
  if (a < 7) {
    saludo =
      "Sigue esforzandote! ¡Con paciencia y dedidación vas a lograr aprobar!";
  };
  return saludo;
};

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

//propongo al usuario encontrar la palabra que va en cada casilla en blanco y voy llenando la poesia para ayudar en las rimas ( valido a su vez los datos ingresados)

// Pregunta número 1

while (palabra1 == "" || palabra1 == null || !isNaN(palabra1)) {
  palabra1 = prompt(` Completa la poesía utilizando las siguientes palabras:

  ${opciones}
  
  Por mi ventana veo cada 1__________
  Bellos y cantantes pajaritos
  ¡Que no se despierte mi 2__________!
  ¡Que no la espanten sus 3__________!
  
  Yo los quiero 4__________
  Pero ellos vuelan tan 5__________
  Solo los puedo 6__________
  Y escuchar su dulce 7__________
  
  Me despiertan con su dulce 8__________
  Me levanto corriendo de la 9__________
  Yo los miro cada 10__________
  Sentada detrás de mi 11__________
  
  Ejemplo, la palabra que va en el espacio Nº 1 es: ${correctas[0].palabra}
  
  Ingresala a continuación: 
  `);
  if (palabra1 == "" || palabra1 == null || !isNaN(palabra1)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  };
};

// Pregunta número 2

while (palabra2 == "" || palabra2 == null || !isNaN(palabra2)) {
  palabra2 = prompt(` Completa la poesía utilizando las siguientes palabras:

  ${opciones}

  Por mi ventana veo cada ${correctas[0].palabra}
  Bellos y cantantes pajaritos
  ¡Que no se despierte mi 2__________!
  ¡Que no la espanten sus 3__________!

  Yo los quiero 4__________
  Pero ellos vuelan tan 5__________
  Solo los puedo 6__________
  Y escuchar su dulce 7__________

  Me despiertan con su dulce 8__________
  Me levanto corriendo de la 9__________
  Yo los miro cada 10__________
  Sentada detrás de mi 11__________

  ¿Que palabra va en el espacio número 2?: 
  `);
  if (palabra2 == "" || palabra2 == null || !isNaN(palabra2)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  };
};

// Pregunta número 3

while (palabra3 == "" || palabra3 == null || !isNaN(palabra3)) {
  palabra3 = prompt(` Completa la poesía utilizando las siguientes palabras:

  ${opciones}

  Por mi ventana veo cada ${correctas[0].palabra}
  Bellos y cantantes pajaritos
  ¡Que no se despierte mi ${correctas[1].palabra}!
  ¡Que no la espanten sus 3__________!

  Yo los quiero 4__________
  Pero ellos vuelan tan 5__________
  Solo los puedo 6__________
  Y escuchar su dulce 7__________

  Me despiertan con su dulce 8__________
  Me levanto corriendo de la 9__________
  Yo los miro cada 10__________
  Sentada detrás de mi 11__________

  ¿Que palabra va en el espacio número 3?:
  `);
  if (palabra3 == "" || palabra3 == null || !isNaN(palabra3)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  };
};

// Pregunta número 4

while (palabra4 == "" || palabra4 == null || !isNaN(palabra4)) {
  palabra4 = prompt(` Completa la poesía utilizando las siguientes palabras:

  ${opciones}

  Por mi ventana veo cada ${correctas[0].palabra}
  Bellos y cantantes pajaritos
  ¡Que no se despierte mi ${correctas[1].palabra}!
  ¡Que no la espanten sus ${correctas[2].palabra}!

  Yo los quiero 4__________
  Pero ellos vuelan tan 5__________
  Solo los puedo 6__________
  Y escuchar su dulce 7__________

  Me despiertan con su dulce 8__________
  Me levanto corriendo de la 9__________
  Yo los miro cada 10__________
  Sentada detrás de mi 11__________

  ¿Que palabra va en el espacio número 4?: 
  `);
  if (palabra4 == "" || palabra4 == null || !isNaN(palabra4)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  };
};

// Pregunta número 5

while (palabra5 == "" || palabra5 == null || !isNaN(palabra5)) {
  palabra5 = prompt(` Completa la poesía utilizando las siguientes palabras:

  ${opciones}

  Por mi ventana veo cada ${correctas[0].palabra}
  Bellos y cantantes pajaritos
  ¡Que no se despierte mi ${correctas[1].palabra}!
  ¡Que no la espanten sus ${correctas[2].palabra}!

  Yo los quiero ${correctas[3].palabra}
  Pero ellos vuelan tan 5__________
  Solo los puedo 6__________
  Y escuchar su dulce 7__________

  Me despiertan con su dulce 8__________
  Me levanto corriendo de la 9__________
  Yo los miro cada 10__________
  Sentada detrás de mi 11__________

  ¿Que palabra va en el espacio número 5?: 
  `);
  if (palabra5 == "" || palabra5 == null || !isNaN(palabra5)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  };
};

// Pregunta número 6

while (palabra6 == "" || palabra6 == null || !isNaN(palabra6)) {
  palabra6 = prompt(` Completa la poesía utilizando las siguientes palabras:

  ${opciones}

  Por mi ventana veo cada ${correctas[0].palabra}
  Bellos y cantantes pajaritos
  ¡Que no se despierte mi ${correctas[1].palabra}!
  ¡Que no la espanten sus ${correctas[2].palabra}!

  Yo los quiero ${correctas[3].palabra}
  Pero ellos vuelan tan ${correctas[4].palabra}
  Solo los puedo 6__________
  Y escuchar su dulce 7__________

  Me despiertan con su dulce 8__________
  Me levanto corriendo de la 9__________
  Yo los miro cada 10__________
  Sentada detrás de mi 11__________

  ¿Que palabra va en el espacio número 6?: 
  `);
  if (palabra6 == "" || palabra6 == null || !isNaN(palabra6)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  };
};

// Pregunta número 7

while (palabra7 == "" || palabra7 == null || !isNaN(palabra7)) {
  palabra7 = prompt(` Completa la poesía utilizando las siguientes palabras:

  ${opciones}

  Por mi ventana veo cada ${correctas[0].palabra}
  Bellos y cantantes pajaritos
  ¡Que no se despierte mi ${correctas[1].palabra}!
  ¡Que no la espanten sus ${correctas[2].palabra}!

  Yo los quiero ${correctas[3].palabra}
  Pero ellos vuelan tan ${correctas[4].palabra}
  Solo los puedo ${correctas[5].palabra}
  Y escuchar su dulce 7__________

  Me despiertan con su dulce 8__________
  Me levanto corriendo de la 9__________
  Yo los miro cada 10__________
  Sentada detrás de mi 11__________

  ¿Que palabra va en el espacio número 7?: 
  `);
  if (palabra7 == "" || palabra7 == null || !isNaN(palabra7)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  };
};

// Pregunta número 8

while (palabra8 == "" || palabra8 == null || !isNaN(palabra8)) {
  palabra8 = prompt(` Completa la poesía utilizando las siguientes palabras:

  ${opciones}

  Por mi ventana veo cada ${correctas[0].palabra}
  Bellos y cantantes pajaritos
  ¡Que no se despierte mi ${correctas[1].palabra}!
  ¡Que no la espanten sus ${correctas[2].palabra}!

  Yo los quiero ${correctas[3].palabra}
  Pero ellos vuelan tan ${correctas[4].palabra}
  Solo los puedo ${correctas[5].palabra}
  Y escuchar su dulce ${correctas[6].palabra}

  Me despiertan con su dulce 8__________
  Me levanto corriendo de la 9__________
  Yo los miro cada 10__________
  Sentada detrás de mi 11__________

  ¿Que palabra va en el espacio número 8?: 
  `);
  if (palabra8 == "" || palabra8 == null || !isNaN(palabra8)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  };
};

// Pregunta número 9

while (palabra9 == "" || palabra9 == null || !isNaN(palabra9)) {
  palabra9 = prompt(` Completa la poesía utilizando las siguientes palabras:

  ${opciones}

  Por mi ventana veo cada ${correctas[0].palabra}
  Bellos y cantantes pajaritos
  ¡Que no se despierte mi ${correctas[1].palabra}!
  ¡Que no la espanten sus ${correctas[2].palabra}!

  Yo los quiero ${correctas[3].palabra}
  Pero ellos vuelan tan ${correctas[4].palabra}
  Solo los puedo ${correctas[5].palabra}
  Y escuchar su dulce ${correctas[6].palabra}

  Me despiertan con su dulce ${correctas[7].palabra}
  Me levanto corriendo de la 9__________
  Yo los miro cada 10__________
  Sentada detrás de mi 11__________

  ¿Que palabra va en el espacio número 9?: 
  `);
  if (palabra8 == "" || palabra8 == null || !isNaN(palabra8)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  };
};

// Pregunta número 10

while (palabra10 == "" || palabra10 == null || !isNaN(palabra10)) {
  palabra10 = prompt(` Completa la poesía utilizando las siguientes palabras:

  ${opciones}

  Por mi ventana veo cada ${correctas[0].palabra}
  Bellos y cantantes pajaritos
  ¡Que no se despierte mi ${correctas[1].palabra}!
  ¡Que no la espanten sus ${correctas[2].palabra}!

  Yo los quiero ${correctas[3].palabra}
  Pero ellos vuelan tan ${correctas[4].palabra}
  Solo los puedo ${correctas[5].palabra}
  Y escuchar su dulce ${correctas[6].palabra}

  Me despiertan con su dulce ${correctas[7].palabra}
  Me levanto corriendo de la ${correctas[8].palabra}
  Yo los miro cada 10__________
  Sentada detrás de mi 11__________

  ¿Que palabra va en el espacio número 10?: 
  `);
  if (palabra10 == "" || palabra10 == null || !isNaN(palabra10)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  };
};

// Pregunta número 11

while (palabra11 == "" || palabra11 == null || !isNaN(palabra11)) {
  palabra11 = prompt(` Completa la poesía utilizando las siguientes palabras:

  ${opciones}

  Por mi ventana veo cada ${correctas[0].palabra}
  Bellos y cantantes pajaritos
  ¡Que no se despierte mi ${correctas[1].palabra}!
  ¡Que no la espanten sus ${correctas[2].palabra}!

  Yo los quiero ${correctas[3].palabra}
  Pero ellos vuelan tan ${correctas[4].palabra}
  Solo los puedo ${correctas[5].palabra}
  Y escuchar su dulce ${correctas[6].palabra}

  Me despiertan con su dulce ${correctas[7].palabra}
  Me levanto corriendo de la ${correctas[8].palabra}
  Yo los miro cada ${correctas[9].palabra}
  Sentada detrás de mi 11__________

  ¿Que palabra va en el espacio número 11?: 
  `);
  if (palabra11 == "" || palabra11 == null || !isNaN(palabra11)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  };
};

// Creo objetos a partir de las respuestas

class Respuestas {
  constructor(palabra, orden) {
    this.palabra = palabra.toLowerCase();
    this.orden = Number(orden);
  };
};

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

console.log( respuestas[1].palabra == correctas [1].palabra ); 
console.log( respuestas[2].palabra == correctas [2].palabra ); 
console.log( respuestas[3].palabra == correctas [3].palabra ); 
console.log( respuestas[4].palabra == correctas [4].palabra ); 
console.log( respuestas[5].palabra == correctas [5].palabra ); 
console.log( respuestas[6].palabra == correctas [6].palabra ); 
console.log( respuestas[7].palabra == correctas [7].palabra ); 
console.log( respuestas[8].palabra == correctas [8].palabra ); 
console.log( respuestas[9].palabra == correctas [9].palabra ); 
console.log( respuestas[10].palabra == correctas [10].palabra ); 

// Declaro la variable puntaje que coincide con la variable iguales al ser 10 preguntas

let puntaje = iguales;

// Invoco la funcion que determina el saludo en base al puntaje
saludo = mensaje(puntaje);

// Verifico la salida
console.log(saludo);

// Comunico al usuario el puntaje obtenido, cantidad de respuestas correctas y lo saludo en base al puntaje
alert(`${nombre}: 
¡Obtuviste un total de: ${iguales} respuestas correctas!

Tu nota fue un: ${puntaje}/10

${saludo}`);
