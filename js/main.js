const saludo = document.getElementById("saludo");

let nombre = prompt(`¡Bienvenidos a INTERactividades!
¡Por favor decinos cuál es tu nombre para que tengas una experiencia personalizada! :`)

saludo.innerText = `¡ Hola ${nombre} !`
