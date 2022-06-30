// Defino las variables globales

let nombre = "";
let rta = 0;
let puntaje = 0;
let correctas = 0;
let saludo = "";

// Creo una función para pasar la primera letra a mayúscula

function primerLetraMayusc(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Creo una función que determine el puntaje y la cantidad de respuestas correctas

function pregunta(rta, _num) {
  if (_num == 1) {
    switch (rta) {
      case 221:
        puntaje += 2.5;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    }
    return puntaje;
  }
  if (_num == 2) {
    switch (rta) {
      case 145:
        puntaje += 2.5;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    }
    return puntaje;
  }
  if (_num == 3) {
    switch (rta) {
      case 96:
        puntaje += 2.5;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    }
    return puntaje;
  }
  if (_num == 4) {
    switch (rta) {
      case 3091:
        puntaje += 2.5;
        correctas++;
        break;

      default:
        puntaje += 0;
        break;
    }
    return puntaje;
  }
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

alert(`${nombre} ¡Comencemos con la Evaluación de Matemáticas!`);

// Primer pregunta

while (rta == "" || rta == null || isNaN(rta)) {
  rta = Number(
    prompt(`1. En un avión viajan 436 pasajeros, 215 son mujeres y el resto son hombres.
¿Cuántos hombres van en el avión?`)
  );
  if (rta == "" || rta == null || isNaN(rta)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  }
}

// Invoco la funcion para verificar si la respuesta es correcta o no

pregunta(rta, 1);

// Verifico por consola la salida de ambas variables

console.log(rta);
console.log(puntaje);

// "Limpio" la variable rta para la proxima pregunta

rta=""

// Segunda pregunta

while (rta == "" || rta == null || isNaN(rta)) {
  rta = Number(
    prompt(`2. En una caja de galletitas de chocolate vienen 5 paquetes. Si cada paquete tiene 29 galletitas...
¿Cuántas galletitas tiene toda la caja?`)
  );
  if (rta == "" || rta == null || isNaN(rta)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  }
}

// Invoco la funcion para verificar si la respuesta es correcta o no
pregunta(rta, 2);

// Verifico por consola la salida de ambas variables
console.log(rta);
console.log(puntaje);

// "Limpio" la variable rta para la proxima pregunta

rta=""

// Tercera pregunta

while (rta == "" || rta == null || isNaN(rta)) {
  rta = Number(
    prompt(`3. Manuel y su padre han hecho este fin de semana 3 rutas en bici. 
El Viernes pedalearon 16 Km.
El Sábado pedalearon 37 Km.
El Domingo pedalearon 43 Km.
¿Cuántos Km. han recorrido en los tres días?`)
  );
  if (rta == "" || rta == null || isNaN(rta)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  }
}

// Invoco la funcion para verificar si la respuesta es correcta o no
pregunta(rta, 3);

// Verifico por consola la salida de ambas variables
console.log(rta);
console.log(puntaje);

// "Limpio" la variable rta para la proxima pregunta

rta=""

// Cuarta pregunta

while (rta == "" || rta == null || isNaN(rta)) {
  rta = Number(
    prompt(`4. Julián tenía ahorrados $ 5.269,00.
El Lunes gastó $ 2.178,00 en la compra de una tablet.
¿Cuánto dinero le quedó?`)
  );
  if (rta == "" || rta == null || isNaN(rta)) {
    alert(`¡No has ingresado una respuesta válida! Intenta de nuevo:`);
  }
}

// Invoco la funcion para verificar si la respuesta es correcta o no
pregunta(rta, 4);

// Verifico por consola la salida de ambas variables
console.log(rta);
console.log(puntaje);

// Invoco la funcion que determina el saludo en base al puntaje
saludo = mensaje(puntaje);

// Verifico la salida
console.log(saludo);

// Comunico al usuario el puntaje obtenido, cantidad de respuestas correctas y lo saludo en base al puntaje
alert(`${nombre}: 
¡Obtuviste un total de: ${correctas} respuestas correctas!

Tu nota fue un: ${puntaje}/10

${saludo}`);
