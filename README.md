# *<h2 align=center>**"INTERactividades"**</h2>*

## **Descripción del Repositorio**:
*Repositorio del Proyecto **"INTERactividades"**, para el curso de ***JavaScript***, Comisión 37.725 de **Coder House**.*

## **Historial de Modificaciones**:

## Versión 0.50 ( 22/07/2022 ):
- Se creó la sección de **Ciencias Sociales**, donde se implementó una evaluación realizada con imágenes que contienen un ***input del tipo select***, las cuales son invocadas en la ***script*** **sociales.js** mediante una petición ***fetch*** al archivo **zonas.json** con lo que se simula una petición a un servidor de los mismos. 

### Versión 0.40 ( 18/07/2022 ):
- Rediseño del sitio:
    - Se reemplazó la ***barra de navegación*** por un encabezado que simula un pizarrón escolar, y dos botones de navegación que resultan menos invasivos para la navegación.
    - Se rediseñó el ***footer*** para complementar el nuevo estilo del sitio. 
### Versión 0.30 ( 14/07/2022 ):
- Impementación de módulos, las funciones reutilizables fueron alojadas en una nueva ***script*** llamada **app.js**, de la cual todas sus funcionas son *exportadas* para su reutilización dentro del proyecto.
- Utilización del **Session Storage**, para guardar el nombre del alumno, y la puntuación en las diferentes evaluaciones, información que luego es consultada para ser mostrada y/o validar.
- Implementación de **Operadores Avanzados**, para la optimización y legibilidad del código Ej:
    - ***script main.js*** ```Linea 11 / Linea 71 / Linea 76```.
    - ***script pdl.js*** ```Linea 246 / Linea 25 / Linea 76```.
    - ***script math.js*** ```Linea 78 / Linea 84```.
- Implementación de **Sweet Alert** para estilar el manejo de los ***prompts*** y ***alerts***.  

### Versión 0.25 ( 05/07/2022 ):
- ~~Extracción de las funciones **"comunes"** a ambas evaluaciones e inserción de las mismas en una nueva ***script*** llamada **common** para su reutilización.~~
- Correcciones en el archivo ***style.css***.
### Versión 0.20 ( 04/07/2022 ):
- Modificación de la ***script*** de bienvenida, luego de introducir el nombre, modifica el texto para que el saludo sea "personalizado".
- Modificación de los archivos ***html, css y js*** de las secciones **Matemáticas** y **P.d.L.**, en ambos casos se modificaron las scripts originales, agregando la funciones ***addEventListener*** para caputurar botones e inputs y a su vez se inserta en el ***DOM***  el puntaje obtenido al finalizar la evaluación, junto con un saludo y el nombre del usuario.
### Versión 0.10 ( 29/06/2022 )
- Creación del repositorio.
    - Maquetado de estructura inicial ***home*** y secciones ***about*** / ***Matemáticas*** / ***Prácticas del Lenguaje (P.d.L.)***.
    - Creación de archivos ***html*** y ***css***, necesarios para el maquetado parcial del sitio.
    - Creación de 3 ***scripts***:
        - En el home una script sencilla que solo da la bienvenida con un ***alert***.
        - En la sección **Matemáticas**, se creó una ***script*** que plantea 4 problemas aritméticos desde el ***prompt***, utilización de funciones para la evaluación de las respuestas ingresadas por el usuario y comunica el resultado a través de un ***alert***.
        - En la sección **P.d.L.**, se créo una ***script*** que plantea una poesía con 11 campos para completar por el usuario a traves del ***prompt***, ultilizaciónes de ***arrays***, ***objetos*** y ***funciones*** que operan sobre los mismos, para dar forma y evaluar las posibles respuestas del usuario, al final de la evaluación se le comunica el resultado a traves de un ***alert***.  
    - Creación de este archivo **README**.

