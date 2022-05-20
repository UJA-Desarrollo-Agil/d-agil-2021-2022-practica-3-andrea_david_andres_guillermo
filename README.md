# DESARROLLO ÁGIL
# Práctica 4: 

Grado en Ingeniería Informática - E.P.S. Jaén - Universidad de Jaén.


![Logo UJA](https://imgs.search.brave.com/SeO89I5Gf3erxntdCwmT9MCc0tZR5Cs8wRJcxAim3XE/rs:fit:323:173:1/g:ce/aHR0cHM6Ly93d3cu/dWphZW4uZXMvZ29i/aWVybm8vdmljY29t/L3NpdGVzL2dvYmll/cm5vX3ZpY2NvbS9m/aWxlcy91cGxvYWRz/L2lubGluZS1pbWFn/ZXMvTWFyY2ElMjBV/bml2ZXJzaWRhZCUy/MGRlJTIwSmFlbi5w/bmc)

Profesor: Víctor Manuel Rivas Santos.

Hecho por:

* **Guillermo Cámara Castillo** - gcc00034@red.ujaen.es
* **Andrea Marín Verdejo** - amv00079@red.ujaen.es
* **David Rodríguez Muro** - drm00035@red.ujaen.es
* **Andrés Palacios de Castro** - apc00085@red.ujaen.es

**Curso**: 2021-2022

## Índice

  * [1. Introducción](#1-introducción)
  * [2. Motivación](#2-motivación)
  * [3. Descripción del juego](#3-descripción-del-juego)
  * [4. URL del tablero de Trello](#4-url-del-tablero-de-trello)
  * [5. Capturas de pantalla de Trello](#5-capturas-de-pantalla-de-trello)
  * [6. Capturas de pantalla de Telegram](#6-capturas-de-pantalla-de-telegram)
  * [7. Sprint1](#7-sprint1)
  * [8. Sprint2](#8-sprint2)
  * [9. Web](#9-web)
  * [10. Métricas](#10-métricas)

## 1. Introducción

En esta quinta práctica de la asignatura Desarrollo Ágil tendremos que crear un juego con Undum en equipos de 4. Para facilitar el trabajo en grupo y mejorar la coordinación y comunicación entre nosotros usaremos las herramientas Trello, Telegram y GitHub. En este Sprint 2 hemos continuado con el desarrolo e implementación de nuestro juego. También hemos tenido reuniones diarias para ver cómo iba evolucionando nuestro trabajo y las Sprint Review y Sprint Retrospective.

## 2. Motivación

Esta práctica está motivada por ser parte del contenido de prácticas de la asignatura de Desarrollo Ágil, por su importante peso en la nota final de prácticas y por la obligatoriedad de la entrega de esta para el dia 10 de Mayo de 2022.

## 3. Descripción del juego.

Eestá basado en un estilo de juego llamado “Escape Room”, en este tipo de juegos tú eres el protagonista. En la historia tienes que escapar de un parque de atracciones abandonado.
Todo comienza en la plaza central del parque. Estás solo, lo único que tienes es un mapa en el que aparece toda la distribución de los elementos del parque y tu ubicación. En esta aventura tendrás que desplazarte por el parque de atracciones hasta encontrar todos los objetos necesarios para completar los objetivos de cada situación y obtener la llave con la que podrás escapar de ese lugar.

## 4. URL del tablero de Trello
La URL del tablero utilizado en esta práctica es: https://trello.com/b/nwDPtiRL/pr%C3%A1ctica-3


## 5. Capturas de pantalla de Trello 

A continuación diferentes imágenes del avance del Tablero Trello:

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/trello1.png"></img>
>Ilustración 1: Tablero Trello con las 4 primeras Historias de Usuario.

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/trello2.png"></img>
>Ilustración 2: Tablero Trello con las 3 siguientes Historias de Usuario.

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/trello3.png"></img>
>Ilustración 3: Tablero Trello con las 3 últimas Historias de Usuario.

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/Sin título-1.png" width="600" height="600"></img>
>Ilustración 4: Ejemplos de descripción de 2 Historias de Usuario.

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/Captura de pantalla (362).png" ></img>
>Ilustración 7: Estado actual de nuestro tablero tras hacer la Sprint Review y adaptar el Product Backlog.


## 6. Capturas de pantalla de Telegram

Las siguientes capturas que se muestran son de los bots de Trello y GitHub, en ese orden, que hemos vinculado en Telegram en un grupo que hemos creado con los cuatro miembros del grupo.

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/botTrello.png"></img>
>Ilustración 5: Captura de pantalla del bot de Trello en funcionamiento.

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/botGitHub.png"></img>
>Ilustración 6: Captura de pantalla del bot de GitHub en funcionamiento.

## 7. Sprint1

**Product Backlog Refinement (PBR):**

El día 6 de abril tuvimos que considerar nuevos requisitos, creando nuevas Historias de Usuario y asignándoles Puntos de Historia y Valor

Los nuevos requisitos son:

-Se deberá modificar el CSS del juego original, usando otras fuentes de letra, fondos de pantalla, etc. PH:4/VALOR:5

-Se posibilitará (con css) una versión “sin distracciones” que no incluya imágenes, ni fondo, ni música. PH:5/VALOR:5

-En al menos una situación (de las existentes o incluyendo alguna/s nueva/s), se podrá establecer un diálogo con otro personaje del juego (con preguntas y respuestas predefinidas, por supuesto, dado que serán acciones del juego; no se trata de implementar un chatbot). INNEGOCIABLE. PH:6/VALOR:20

-Cada situación deberá llevar una imagen descriptiva asociada. PH:6/VALOR:15

Tras asignar los Puntos de Historia y el Valor a cada requisito decidimos introducir para este Sprint1: Modificar el CSS del juego y que cada situación lleve una imagen descriptiva asociada ya que nos resultó más fácil su implementación teniendo una primera versión del juego con inicio y fin.


**Sprint Review:** 

Puntos de Historia Totales: 73
Puntos de Historia Realizados: 22

-En este Sprint hemos completado las siguientes Historias de Usuario:
El jugador podrá moverse de unas situaciones a otras.
El jugador podrá usar objetos para resolver puzzles.
El jugador podrá recoger objetos a lo largo del juego.
Se modificará el CSS del juego original.
Cada situación deberá llevar una imagen descriptiva asociada.

-Sin embargo decidimos centrarnos en terminar una versión del juego con inicio y fin e introducir las siguientes Historias de Usuario en el siguiente Sprint ya que aportaban un valor extra a este y no algo esencial para su desarrollo.
El jugador debe saber cuántos puntos lleva en la partida.
Se podrá establecer un diálogo.
La historia deberá tener como mínimo 9 situaciones.
Se añadirán videos en los que se incluya parte de la historia que necesita para completar el juego y tomar decisiones. 
Versión sin distracciones.

-Aproximadamente hemos terminado al 100% un 30% de las Historias de Usuario totales del proyecto, y aproximadante un 60% del proyecto completo.
lo próximo pendiente a realizar son las Historias que estamos desarrollando para tener terminadas al 100%.

-Para el Sprint 2, primero completaremos las Historias de Usuario que ya hemos comenzado en este Sprint 1, posteriormente realizaremos la versión sin distracciones y por último añadiremos el contenido extra que no afecta a la jugabilidad, como por ejemplo, la creación de la plataforma web, añadir música, 
vídeos, etc.

-En cuanto a los plazos de entrega vamos al día, hemos tenido problemas en Semana Santa a la hora de realizar las Dailys ya que cada miembro del equipo tenía 
sus circustancias personales.

**Sprint Retrospective:**

* **¿Qué ha ido bien?**

-A la hora del desarrollo del código no han ocurrido conflictos entre nosotros. La herramienta que hemos utilizado para los flujos de código y manejo de ramas ha sido GitHub Desktop.
  
 -Ambos bots de Telegram, tanto de GitHub como de Trello nos han resultado muy útiles para saber el trabajo de cada uno.
  
 -La herramienta que ofrece GitHub para ver el trabajo de cada uno ha sido positivo para analizar el desempeño de cada uno en las Dailys.

 -El reparto de tareas entre los miembros del equipo ha sido equitativo.

* **¿Qué no ha ido bien?**

-Se necesita mejor coordinación en cuanto al desarrollo del código, de forma que nadie retrase el trabajo de los demás miembros del equipo.

-No todos los días asistieron todos los miembros del grupo a las Dailys.

* **¿Cómo mejorar?**

-Establecer plazos de entrega de cada parte del código para mejorar la coordinación.

-Mayor compromiso para las reuniones Dailys.

## 8. Sprint2

En este segundo Sprint hemos elegido implementar todas las Historias de Usuario restantes para terminar nuestro juego completo.

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/Captura de pantalla (364).png"></img>
>Ilustración 8: Captura de pantalla de Trello en el Sprint2


**Sprint Planning:**

Al comienzo del Sprint2, tuvimos una reunión en la que nos dividimos el trabajo entre los miembros del equipo. El reparto quedó de la siguiente manera:

- Guillermo: Landing page , página web y vídeo.
 
- Andrea: Diáologo.
 
- Andrés: Progreso y música.

- David: Versión sin distracciones.
 
Aunque entre todos nos hemos ayudado y hemos corregido los errores que han ido surgiendo a lo largo del desarrollo del juego.

Además hemos modificado parte del código que no era imprescindible para obtener la versión completa pero que sí afectaban a su jugabilidad.



**Product Backlog Refinement (PBR):**

El día 27 de abril tuvimos que considerar de nuevo los requisitos a considerar, creando nuevas Historias de Usuario y asignándoles Puntos de Historia y Valor

Los nuevos requisitos son:

-El jugador podrá solicitar ayuda al juego y recibirá información que le sirva para entender el juego y lograr llegar al final del mismo. PH:7/VALOR:1

-La ayuda que aporte el juego será sensible al contexto, es decir, en función de la situación en que esté y/o los objetos que tenga y/o la puntuación que lleve y/o -cualquier otro aspecto que deseéis considerar se le aportará una información de ayuda u otra. PH:7/VALOR:1

-El juego estará disponible en español y en otro idioma. PH:5/VALOR:1

Tras asignar los Puntos de Historia y el Valor a cada requisito decidimos no introducir ninguno para este Sprint2.


**Sprint Review:** 

En este segundo Sprint hemos completado todas las HU que definimos al inicio del proyecto completando así el prototipo inicial del juego que hicimos en el anterior.

No hemos añadido ninguna HU nueva para este Sprint ya que decidimos que no aportaban ninguna mejora.

En cuanto a los plazos de entrega estamos al día.

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/Captura.PNG"></img>
>Ilustración 9: Captura de pantalla del tablero final de Trello (parte1)


<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/Captura2.PNG"></img>
>Ilustración 10: Captura de pantalla del tablero final de Trello (parte2)


**Sprint Retrospective:**

Hemos trabajado más coordinados en este segundo Sprint, la comunicación entre los mienbros del grupo ha sido la clave para completar este proyecto en el plazo indicado.

Hemos tenido más compromiso en las Dailys. Nos hemos adaptado mejor a los horarios de cada uno.

Nos hemos ayudado cuando ha surgido algún problema.


## 9. Web

**Link de la página web:** https://elparquedeatracciones.000webhostapp.com/

## 10. Métricas

**Tabla para los datos de las gráficas del proyecto en su totalidad.**


<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/diaadia1.png"></img>

**Gráficas burndown y burn-up de los puntos de historia.** 


**Gráficas burndown y burn-up del valor asociado a las Historias de Usuario.**


**Tabla de velocidades.** 


**Tablas (una por cada sprint) con los datos para las gráficas de los sprints.** 


**Gráficas burndown y burn-up de los puntos de historia o tareas del sprint 1.** 


**Gráficas burndown y burn-up de los puntos de historia o tareas del sprint 2.** 


**Conclusiones que sacáis a la vista de las tablas y gráficas obtenidas.** 


**Imagenes de las gráficas y tablas obtenidas en el proyecto** 

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/diaadia1.png"></img>
>Ilustración 11: Gráfica del Sprint1

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/diaadia2.png"></img>
Ilustración 13: Datos del Sprint2

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/diaadiaS1.png"></img>
>Ilustración 12: Datos del Sprint1

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/diaadia2.png"></img>
>Ilustración 13: Datos del Sprint2

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/diaadiaS2.png"></img>
>Ilustración 14: Gráfica del Sprint2

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/PH-BU.jpg"></img>
>Ilustración 15: Gráfica puntos de historia Burn Up 

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/PH-BD.jpg"></img>
>Ilustración 16: Gráfica puntos de historia Burn Down

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/ph-bus1.jpg"></img>
>Ilustración 17: Gráfica puntos de historia Burn UP, Sprint 1

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/ph-bus2.jpg"></img>
>Ilustración 18: Gráfica puntos de historia Burn UP, Sprint 2

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/ph-bds1.jpg"></img>
>Ilustración 19: Gráfica puntos de historia Burn Down, Sprint 1

<img src="https://raw.githubusercontent.com/UJA-Desarrollo-Agil/d-agil-2021-2022-practica-3-andrea_david_andres_guillermo/master/Capturas/ph-bds2.jpg"></img>
>Ilustración 20: Gráfica puntos de historia Burn Down, Sprint 2



**Conclusiones obtenidas**

**Enlace Hoja de cálculo (Google Drive):** https://docs.google.com/spreadsheets/d/1Z-ZOlRZXwK4Z2G-7L33a9XgDahQrL2dwC9Usy6Iu44Q/edit?usp=sharing 
 
