// Creo una función para verificar que el usuario no haya realizado previamente la evaluacion y lo saludo acorde

export function bienvenidoArea (area, areaString, nombre) {
sessionStorage.getItem(area)
  ? Swal.fire({
      title: `${nombre}`,
      text: `¡Ya has hecho la evaluación de ${areaString}!`,
      icon: "error",
    }).then(function () {
      window.location = "../index.html";
    })
  : Swal.fire({
      title: `${nombre}`,
      text: `¡Comencemos con la Evaluación de ${areaString}!`,
      imageUrl: `../img/modales/${area}.png`,
      imageWidth: 350,
      imageHeight: 231,
      imageAlt: `${areaString}`
    });
}

// Creo un modal para mostrar los puntajes obtenidos en cada evaluación

export function puntObtenidos(nombre, area1, area2, area3, area4) {
  Swal.fire({
  title: `${nombre}, tus puntajes obtenidos son los siguientes:`,
  html: `Matemáticas: ${area1}<br>Prácticas del Lenguaje: ${area2}<br>Ciencias Sociales: ${area3}<br>Ciencias Naturales: ${area4}`,
  imageUrl: "img/logo.png",
  imageAlt: "Logo",
  imageWidth: 300,
  imageHeight: 50,
});
};
