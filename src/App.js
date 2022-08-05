//creo una función para obtener el nombre del Storage y lo paso a otra funcion para mostrarlo en el HTML

export function nombreEnStorage() {
  let nombre = JSON.parse(localStorage.getItem("nombre"));
  saludoPersonalizado(nombre);
  return nombre;
};

export function saludoPersonalizado(string) {
  const alumno = document.getElementById("alumno");
  alumno.innerText = `¡ Hola ${string} !`;
};

// Creo una función para pasar la primera letra a mayúscula

export function primerLetraMayusc(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Creo una función para pintar de rojo el input con información no válida

export function pintarFondo(_num, color) {
  const casillero = document.body.getElementsByTagName("input")[_num];
  casillero.style.background = color;
};
// Creo una función para pintar de rojo el input con información no válida

export function pintarFondoSelect(_num, color) {
  const casillero = document.body.getElementsByTagName("select")[_num];
  casillero.style.background = color;
};

// Creo una función para verficar que no se hayan dejado casilleros en blanco o no usado números para completar

export function validarRespuestaNumero(rta, _num) {
  if (rta === "") {
    Swal.fire({
      icon: "error",
      html: `<p>¡No has ingresado nada en la pregunta número <b class="red">${_num}</b>!</p><br><p>Intenta de nuevo:</p>`,
    });
    pintarFondo(_num, "#ff000073");
    return false;
  }
  if (rta == null || isNaN(rta)) {
    Swal.fire(`¡Debes ingresar números en el casillero número ${_num}!

    Intenta de nuevo:`);
    pintarFondo(_num, "#ff000073");
    return false;
  };
};

// Creo una función para verficar que no se hayan dejado casilleros en blanco o usado números para completar

export function validarRespuestaPalabra(rta, _num) {
  if (rta === "") {
    Swal.fire({
      icon: "error",
      html: `<p>¡No has ingresado nada en la pregunta número <b class="red">${
        _num + 1
      }</b>!</p><br><p>Intenta de nuevo:</p>`,
    });
    pintarFondo(_num, "#ff000073");
    return false;
  }
  if (rta == null || !isNaN(rta)) {
    Swal.fire(`¡No puedes ingresar números en el casillero número ${_num + 1}!

    Intenta de nuevo:`);
    pintarFondo(_num, "#ff000073");
    return false;
  };
};

// Creo una función para determinar que no se hayan dejado selects sin elegir valor

export function validarSeleccion(sel, _num) {
  switch (sel) {
    case "Selecciona la zona":
      Swal.fire({
        icon: "error",
        html: `<p>¡No has seleccionado nada en la imágen número ${
          _num + 1
        }!</p><br><p>Intenta de nuevo:</p>`,
      });
      pintarFondoSelect(_num, "#ff000073");
      return false;

    case "Selecciona":
      Swal.fire({
        icon: "error",
        html: `<p>¡No has seleccionado nada en la casilla ${
          _num + 1
        }!</p><br><p>Intenta de nuevo:</p>`,
      });
      pintarFondoSelect(_num, "#ff000073");
      return false;
  }
}

// Creo una función para determinar que no se hayan dejado selects sin elegir valor

export function validarRadio(radio1, radio2, radio3, string) {
  if (radio1 == false && radio2 == false && radio3 == false) {
    Swal.fire({
      icon: "error",
      html: `<p>¡No has seleccionado nada en la pregunta "${string}"!</p><br><p>Intenta de nuevo:</p>`,
    });
    return false;
  };
};

// Creo una función que muestre un mensaje determinado en función del puntaje obtenido

export function mensaje(a) {
  let saludo = "";
  if (a == 10) {
    saludo = "¡Felicitaciones, lograste un puntaje perfecto!";
  }
  if (a >= 8 && a < 10) {
    saludo =
      "¡Felicitaciones, hiciste un gran trabajo, un poquito mas y es perfecto!";
  }
  if (a >= 7 && a < 8) {
    saludo = "¡Felicitaciones, aprobaste, pero podes hacerlo aún mejor!";
  }
  if (a < 7) {
    saludo =
      "Sigue esforzandote! ¡Con paciencia y dedidación vas a lograr aprobar!";
  }
  return saludo;
};

//Creo una función para volver al home del sitio

export function volverAlHome() {
  window.location.assign("../index.html");
};

//Creo una función para guardar el puntaje obtenido en el área sindo parámetros el área y el puntaje obtenido en la misma

export function guardarPuntaje(a, p) {
  sessionStorage.setItem(a, p);
};

//Creo una funcioón  para desloguear al alumno

export function desloguear() {
  const desloguear = document.getElementById("desloguear");

  desloguear.addEventListener("click", () => {
    sessionStorage.clear();
    localStorage.removeItem("nombre")
    volverAlHome();
  });
};

//Creo una función para verificar que el alumno se haya logueado antes de comenzar una evaluacion

export function alumnoLogueado() {
  localStorage.getItem("nombre") ? nombreEnStorage() : volverAlHome();
};

// Creo una función para odenar los arrays de objetos obtenidos mediante fetch al servidor u archivos JSON

export function ordenarArray(array) {
  array.sort((a, b) => {
    return a.orden - b.orden;
  });
  return array;
};

// Creo una función para filtrar los arrays previamente ordenados, eliminando los valores que no se utlizaran para evaluar la actividad

export function filtrarCorrectas(array, string) {
  array = array.filter((elemento) => elemento.orden > 0);

  //Guardo el array filtrado en el storage para accederlo luego al evaluar la actividad

  sessionStorage.setItem(string, JSON.stringify(array));
};

//Creo una función para remover los elementos temporales almacenados en el session storage

export function removerTemp(string) {
//remuevo el array filtrado en el storage para luego de haber evaluado la actividad

  sessionStorage.removeItem(string);
};