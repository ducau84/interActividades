# *<h2 align=center>**"INTERactividades"**</h2>*

## **Descripción del Repositorio**:
*Repositorio del Proyecto **"INTERactividades"**, para el curso de ***JavaScript***, Comisión 37.725 de **Coder House**.*

## **Historial de Modificaciones**:

## Versión 1.00 ( 06/08/2022 ):
- Se montó un **"Servidor"** dummy utilizando  ***JSON Server*** (*https://github.com/typicode/json-server*), implementandolo en un nuevo repositorio ( *https://github.com/ducau84/interact-server* ), donde volque el contenido previamente almacenado en este repo en */src/data/*, y genere una ***pipeline*** a  ***Heroku*** (*https://dashboard.heroku.com/apps/interactividades-server*). Posteriormente se modificaron las ***scripts*** locales (ubicadas en */src/components/utils/*) para que obtengan los datos directamente desde el servidor.
- Se generaron nuevas funciones en la ***script*** **App.js** (ubicada en */src/components/*), **modalsSwal.js** (ubicada en */src/utils/*) e **index.js** (ubicada en */src/components*):
    - En **index.js** se crearon nuevas funciones que en caso de encontrar en el **sessionStorage** el resultado de las 4 evaluaciones, lo promedia e invoca una función para obtener una *string* (que sería una valoración del desempeño) y finalmente la muestra en un *modal* que oficia de cierre de la aplicación.
    - En **App.js** se creó una función que devuelve una *valoracíon*, en base al promedio de las 4 notas obtenidas en las diferentes evaluaciones.
    - En **modalsSwal.js** se creó una función muestra un saludo final, la valoración generada en base al promedio obtenido en las evaluaciones y las opciones de dar por finalizada la actividad, o volver a tomar las evaluaciones desde cero.
## Versión 0.95 ( 05/08/2022 ): 
- Modificación de la ***script*** **math.js**, cambios en la forma en la que se obtienen los datos y se evaluan los problemas:
    - Los números que componen cada problema se obtienen desde ~~un archivo (**problemas.json**, ubicado en **/src/components/data**),que simula datos provenientes de un servidor~~, permitiendo variabilidad en los datos y resultado de la evaluación, con los mismos se completan las consignas que se muestran en los problemas y a su vez se opera sobre los mismos para obtener las respuestas a los problemas.
## Versión 0.90 ( 04/08/2022 ):
- Se añadió la sección **Ciencias Naturales**, en la misma se trae desde ~~un archivo (**sistemas.json**, ubicado en **/src/components/data**)~~, la información que luego se utilizará para completar los campos ***option*** de los diferentes ***select*** y a su vez se utilizara la propiedad ***orden*** para una vez filtrado y ordenado el ***array*** se utiliza para comparar con las respuestas del alumno y así determinar el puntaje obtenido en la evaluación.
- Se cambió la función para mostrar la nota luego de completar la evaluación a un modal, dentro de la ***script*** **modalsSwal.js**, del directorio **/src/components/utils** se creó un modal reutilizable donde muestra la nota y al aceptar vuelve al **home** permitiendo tomar otra evaluación.
- Dentro de la ***script*** **index.js** se creó una función que verifica si se completó alguna evaluación y en caso de ser así muestra el puntaje sobre la card de acceso a la evaluación, bloqueando la misma para ser accedida una vez finalizada dentro de la sesión.
 
## Versión 0.80 ( 01/08/2022 ):
- En la sección **Ciencias Sociales** se modificó la forma que se evaluán las selecciónes del primer inciso, aprovechando la información que se obtiene desde el archivo (**zonas.json**, ubicado en **/src/components/data**)~~, utilizando las propiedades *"id"* y *"zona"* de cada objeto para ser comparado con las respuestas dadas por el alumno.
- Se persolizó el estilo de los modales para que esté acorde al diseño del sitio (fuentes y colores).
## Versión 0.70 ( 30/07/2022 ):
- En la sección **P.d.L.**, se modifico la forma en la que se define el array de objetos que forma las rimas a utilizar, previamente las mismas eran hardcodeadas en un array de objetos, mientras que ahora aprovechan los conocimiento obtenidos para traerlos desde un archivo (**rimas.json**, ubicado en **/src/components/data**), simulando una petición a un servidor, mediante la script **getData.js**, ubicada en **/src/components/controllers**.

## Versión 0.60 ( 28/07/2022 ):
- Reestructuración del proyecto, ordenando el mismo en una estructura de directorios que permite su mejor escalabilidad y legibilidad del mismo.
    - Se modularizaron todas las scripts para disminuir las líneas de código de las mismas y asi optimizar el funcionamiento del sitio.
    - La implementación de la librería **Sweet Alert 2** se localizo en la ***script*** **modalsSwal.js**, dentro del directorio **/src/components/utils**.

## Versión 0.50 ( 22/07/2022 ):
- Se creó la sección de **Ciencias Sociales**, donde se implementó una evaluación realizada con imágenes que contienen un ***input del tipo select***, las cuales son invocadas en la ***script*** **sociales.js** mediante una petición ***fetch*** al ~~archivo **zonas.json** con lo que se simula una petición a un servidor de los mismos. 

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

