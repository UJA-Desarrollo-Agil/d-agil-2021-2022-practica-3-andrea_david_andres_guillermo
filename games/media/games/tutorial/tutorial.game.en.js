// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */

undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Inicio del juego</h1>\
        <p> Bienvenido al inicio del juego. </p> \
        <p> Te encuentras en un parque de atracciones \
        </p>sólo tienes un mapa del parque y la única indicación que te da es\
        encontrar 3 fragmentos de llave para poder salir de él.\
        <p>Tu objetivo consiste en completar todas las tareas para\
        conseguir la llave con la que podrás salir de este lugar.\
        \
       </p>\
        \
         <p><a href='plaza'> Pulse para comenzar...</a><br> \
         <img src='media/img/mapa1.png' class='mapainicio' class='float_right'/>\
         </p>"
       
    ),

    /*Andrés*/
    plaza: new undum.SimpleSituation(
        "<h1>Plaza</h1>\
         <p class='transient'>\
         Te encuentras en el centro del parque... desde aquí podrás elegir donde quieres ir :<br> \
         <a href='noria'> Noria(2)</a><br> \
         <a href='caida'> Caida Libre(3) </a><br> \
         <a href='coches'> Karts(8) </a><br>\
         <a href='rusa'> Montaña Rusa(7) </a><br>\
         <a href='tiovivo'> Tiovivo(9) </a><br> \
         <a href='entrada'> Entrada(10) </a><br>\
         <a href='agua'> Rápidos Acuáticos(6) </a> </p>\
         <img src='media/img/mapa1.png' class='mapainicio'/></p>"
    ),
    /*Andrés*/

    /*David*/
    tiovivo: new undum.SimpleSituation(
        "<h1>Tiovivo</h1>\
        <p class='transient'>\
         <img src='media/img/mapa9.png' class='mapa'/>",
        {
            enter: function( character, system, from ) {
                if(character.qualities.fragmento3 == false){
                    if( character.qualities.energia > 0 ) {
                        system.doLink( "tiovivoenergia" );
                    } else {
                        system.setCharacterText( "<p>Parece que no hay suficiente energía\
                                                      para que la atracción funcione\
                                                      quizás debas activar la energía antes\
                                                      de poder subir.</p>");
                        system.doLink("tiovivonoenergia");
                    }
                } else {
                    system.setCharacterText("<p>Ya encontraste el fragmento de esta zona</p>");
                    system.doLink("fencontradotres");
                }
            }
        }
    ),

    tiovivoenergia: new undum.SimpleSituation(
        "<h1>Tiovivo</h1>\
         <p class='transient'>\
          Llegaste al tiovivo, aquí puedes escoger algunos \
          de los vehículos para intentar alcanzar aquello \
          que brilla en el techo, si escoges la \
          opción correcta quizás puedas obtener\
           un fragmento de llave...\
          tus opciones son: <br>\
          <a href='caballo'>Caballo que sube y baja</a><br>\
          <a href='fallatv'> Taza giratoria </a> <br>\
          <a href='fallatv'>Coche que realiza movimientos hacía adelante y hacía atrás </a><br>\
          <a href='fallatv'>Columpio que se mueve hacia atrás y delante </a><br>\
          o bien puedes seguir buscando en algún otro lugar.<br>\
          <img src='media/img/mapa9.png' class='mapa'/>\
          <a href='plaza'>Plaza(1)</a><br>\
          <a href='coches'> Karts(8) </a></p>"
    ),

    tiovivonoenergia: new undum.SimpleSituation(
        "<h1>Tiovivo</h1>\
         <p class='transient'>\
          Llegaste al tiovivo, aquí puedes escoger algunos \
          de los vehículos para intentar alcanzar aquello \
         que brilla en el techo, si escoges la \
         opción correcta quizás puedas obtener\
         un fragmento de llave...\
         tus opciones son: <br>\
         Caballo que sube y baja<br>\
         Taza giratoria <br>\
         Coche que realiza movimientos hacía adelante y hacía atrás<br>\
          Columpio que se mueve hacia atrás y delante<br>\
         o bien puedes seguir buscando en algún otro lugar.<br>\
         <img src='media/img/mapa9.png' class='mapa'/>\
         <a href='plaza'>Plaza(1)</a><br>\
         <a href='coches'> Karts(8) </a></p>"
    ),

    caballo: new undum.SimpleSituation(
        " <h1>Tiovivo</h1>\
        <p class='transient'>\
        Enhorabuena! Lograste alcanzar un fragmento de llave \
        y se ha añadido a tu inventario!\
        Recuerda que debes seguir investigando \
        para encontrar los demás fragmentos y \
        poder salir del parque de atracciones.<br>\
        <img src='media/img/mapa9.png' class='mapa'/>\
        Elige un lugar al que ir:<br> \
        <a href='plaza'>Plaza(1)</a><br> \
        <a href='coches'> Karts(8) </a></p>",
         {
            enter: function(character, system, action) {
                if(  character.qualities.fragmento3 == false ) {
                    system.setQuality("fragmentos", character.qualities.fragmentos + 1);
                    system.setQuality( "fragmento3" , true );
                }
             },
         }
    ),

    fencontradotres: new undum.SimpleSituation(
        "<h1>Tiovivo</h1>\
        <p class='transient'>\
        Ya encontraste el fragmento de esta zona y no hay nada más que hacer. Quizá debas explorar por otra zona...<br>\
        <img src='media/img/mapa9.png' class='mapa'/>\
        Elige un lugar al que ir:<br> \
        <a href='plaza'>Plaza(1)</a><br> \
        <a href='coches'> Karts(8) </a></p>\
        "
    ),

    fallatv: new undum.SimpleSituation(
        "<h1>Tiovivo</h1>\
        <p class='transient'>\
        Vaya... Parece que la opción escogida no es la correcta, \
        si quieres puedes volver a intentarlo\
        <a href='caballo'> Caballo que sube y baja </a> <br>\
        <a href='fallatv'> Taza giratoria </a> <br>\
        <a href='fallatv'> Coche que realiza movimientos hacía adelante y hacía atrás </a> <br>\
        <a href='fallatv'> Columpio que se mueve hacia atrás y delante</a> <br>\
        o bien puedes seguir buscando en algún otro lugar. <br>\
        <img src='media/img/mapa9.png' class='mapa'/>\
        Elige un lugar al que ir:<br>\
        <a href='plaza'>Plaza(1)</a><br>\
        <a href='coches'> Karts(8) </a></p>\
        "
),
    /*David*/

    /*Guille*/
    entrada: new undum.SimpleSituation(
        "<h1>Entrada</h1>\
        <p class='transient'> \
        Parece que esta puerta está cerrada y se necesita una llave para poder abrirla... \
        <p class='once' ><a href='canjear'>Canjear llave</a><p><br>\
        <a href='abrir'>Abrir</a><br> \
        <img src='media/img/mapa10.png' class='mapa' /> \
         Elige un lugar al que ir:<br> \
         <a href='noria'> Noria(2)</a><br> \
         <a href='plaza'> Plaza(1)</a></p>",
    ),

    canjear: new undum.SimpleSituation(
        "<h1>Entrada</h1>\
        <p class='transient'> \
        Parece que esta puerta está cerrada y se necesita una llave para poder abrirla... \
        <p class='once' ><a href='canjear'>Canjear llave</a><p><br>\
        <a href='abrir'>Abrir</a><br> \
        <img src='media/img/mapa10.png' class='mapa'/> \
         Elige un lugar al que ir:<br> \
         <a href='noria'> Noria(2)</a><br> \
         <a href='plaza'> Plaza(1)</a></p>",
         {
            enter: function( character, system, from ) {
                if(character.qualities.fragmentos == 3 ) {
                        system.setQuality("fragmentos", character.qualities.fragmentos-3);
                        system.setQuality("llave", character.qualities.llave+1);
                        
                }else{
                        system.setCharacterText( "<p>Necesitas 3 fragmentos para canjear la llave.</p>");

                }
            }
        }
    ),
    


    abrir: new undum.SimpleSituation(
        "<h1>Entrada</h1>\
        <p class='transient'> \
        Parece que esta puerta está cerrada y se necesita una llave para poder abrirla... \
        <a href='abrir'>Abrir</a><br> \
        <img src='media/img/mapa10.png' class='mapa'/> \
         Elige un lugar al que ir:<br> \
         <a href='noria'> Noria(2)</a><br> \
         <a href='plaza'> Plaza(1)</a></p>",
        {
            enter: function( character, system, from ) {
                if( character.qualities.llave > 0 ) {
                    system.doLink( "final" );
                    
                } else {
                    system.setCharacterText( "<p>No tienes ninguna llave</p>");
                }
            }
        }
    ),

    final: new undum.SimpleSituation(
        "<h1>Final</h1>\
        <p class='transient'> \
       Enhorabuena, te has pasado el juego</p>",
    
    ),

    /*Guille*/

    /*Globos*/
    /*Fragmentos de llave 0/3 para saber cuántos fragmentos hay que coger + jugar solo una vez*/
    globos: new undum.SimpleSituation(
        "<h1>Caseta de juegos</h1>\
        <p class='transient'> \
        <p> Bienvenido a la caseta de juegos.\
        Si desea jugar:  \
        </p>\
        \
        <img src='media/img/mapa4.png' class='mapa transient ' /> \
         <p class='transient'>\
         <a href='juegoglobos'> Pulse para jugar...<br><br> </a>\
         En otro caso, elige un lugar al que ir:<br> \
         <a href='noria'> Noria(2)</a><br> \
         <a href='caida'> Caida Libre(3) </a></p>"
    ),

    juegoglobos: new undum.SimpleSituation(
        "<h1>Juego Globos</h1>\
        <p> El juego consiste en explotar los globos para obtener una recompensa...  \
        ¿Y si hay un fragmento de llave?🤔<br/>\
        </p>\
        \
        <p>\
        <img src='media/img/globos.png' class='globos transient'  /> \
         <a href='rojo'>Globo rojo🔴</a><br/>\
         <a href='azul'>Globo azul 🔵</a><br/> \
         <a href='amarillo'>Globo amarillo🟡</a><br/>\
         </p>"
    ),

    
    azul: new undum.SimpleSituation(
        "<p> Enhorabuena, has ganado.\
        </p>\
        \
        <img src='media/img/azul.png' class='globos transient' /> \
         <p><a href='globos'>Salir</a><br> \
         </p>",
         {
            enter: function(character, system, action) {
                    if(  character.qualities.fragmento2 == false ) {
                        system.setQuality("fragmentos", character.qualities.fragmentos + 1);
                        system.setQuality( "fragmento2" , true )
                        system.setCharacterText( "<p>Enhorabuena, has obtenido un fragmento de la llave</p>");
                    }else{
                        system.setCharacterText( "<p>Ya has conseguido tu fragmento antes</p>");
                    }
                },
        }
    ),

    
    rojo: new undum.SimpleSituation(
        "<p>Vaya, parece que no <br> hay nada.😔<br>\
        </p>\
        \
        <p><img src='media/img/rojo.png' class='globos transient' /> <br> \
         <a href='juegoglobos'>Inténtelo de nuevo</a><br> \
         </p>"
    ),


    
    amarillo: new undum.SimpleSituation(
        "<p> Vaya, parece que no <br> hay nada.😔\
        </p>\
        \
        <p><img src='media/img/amarillo.png' class='globos transient' /> \
         <a href='juegoglobos'>Inténtelo de nuevo</a><br> \
         </p>"
    ),
    /*Globos*/

    /*Guille*/
    rusa: new undum.SimpleSituation(
        "<h1>Montaña Rusa</h1>\
        <p class='transient'> \
        Estás delante de la montaña rusa, es muy alta, arriba del todo hay algo que brilla.\
        ¿Será un fragmento de llave?<br>\
        <img src='media/img/mapa7.png' class='mapa'/> \
         Elige un lugar al que ir:<br> \
         <a href='coches'> Karts(8) </a><br>\
         <a href='plaza'> Plaza(1)</a><br> \
         <a href='agua'> Rápidos Acuáticos(6) </a> </p>",
         {
				enter: function( character, system, from ) {
					if( character.qualities.energia > 0 ) {
						system.doLink( "rusaenergia" );
					} else {
                        system.setCharacterText( "<p>Te intentas montar pero no hay energía suficiente\
                                                                                    para que funcione...Habrá que hacer algo...</p>");
					}
				}
			}
    ),

    rusaenergia: new undum.SimpleSituation(

        "<p class='transient'> \
         Estás delante de la montaña rusa, es muy alta, arriba del todo hay algo que brilla.\
         ¿Será un fragmento de llave?<br>\
        <img src='media/img/mapa7.png' class='mapa'/> \
         Elige un lugar al que ir:<br> \
         <a href='coches'> Karts(8) </a><br>\
         <a href='plaza'> Plaza(1)</a><br> \
         <a href='agua'> Rápidos Acuáticos(6) </a> </p>",
         {
				enter: function( character, system, from ) {
					if(  character.qualities.arreglado == false ) {
                        if(character.qualities.herramientas > 0){
                            system.doLink("arreglar")
                        }else{
                            system.setCharacterText( "<p>La montaña rusa está averiada, necesario Kit Herramientas</p>");
                        }
					}else{
                        system.doLink("rusaherramientas")
                    }
				}
			}
                      
    ),


    arreglar: new undum.SimpleSituation(
        
        "<p class='transient'> \
         Estás delante de la montaña rusa, es muy alta, arriba del todo hay algo que brilla.\
         ¿Será un fragmento de llave?<br>\
         <a href='arreglar2'>Arreglar</a><br>\
        <img src='media/img/mapa7.png' class='mapa'/> \
         Elige un lugar al que ir:<br> \
         <a href='coches'> Karts(8) </a><br>\
         <a href='plaza'> Plaza(1)</a><br> \
         <a href='agua'> Rápidos Acuáticos(6) </a> </p>",
    ),

    arreglar2: new undum.SimpleSituation(
        
        "<p class='transient'> \
         Estás delante de la montaña rusa, es muy alta, arriba del todo hay algo que brilla.\
         ¿Será un fragmento de llave?<br>\
         <a href='arreglar2'>Arreglar</a><br>\
        <img src='media/img/mapa7.png' class='mapa'/> \
         Elige un lugar al que ir:<br> \
         <a href='coches'> Karts(8) </a><br>\
         <a href='plaza'> Plaza(1)</a><br> \
         <a href='agua'> Rápidos Acuáticos(6) </a> </p>",
        {
            enter: function( character, system, from ) {
    system.setQuality( "arreglado" , true )
    system.setQuality("herramientas", character.qualities.herramientas-1);
    system.setCharacterText( "<p>Montaña rusa Arreglada</p>");
        system.doLink("rusaherramientas")
        }
    }
    ),
    
    rusaherramientas: new undum.SimpleSituation(
        "<p class='transient'> \
        Estás delante de la montaña rusa, es muy alta, arriba del todo hay algo que brilla.\
        ¿Será un fragmento de llave?<br>\
        <p class='once' ><a href='montarse'>Montarse</a><p><br> \
       <img src='media/img/mapa7.png' class='mapa'/> \
        Elige un lugar al que ir:<br> \
        <a href='coches'> Karts(8) </a><br>\
        <a href='plaza'> Plaza(1)</a><br> \
        <a href='agua'> Rápidos Acuáticos(6) </a> </p>",
    ),

    montarse: new undum.SimpleSituation(
        "<p> ¡¡Era un fragmento de llave!! Encuentra todos los fragmentos y sal de parque.<br>\
       <img src='media/img/mapa7.png' class='mapa'/> \
        Elige un lugar al que ir:<br> \
        <a href='coches'> Karts(8) </a><br>\
        <a href='plaza'> Plaza(1)</a><br> \
        <a href='agua'> Rápidos Acuáticos(6) </a> </p>",
        {
            enter: function(character, system, action) {
                    system.setQuality("energia", character.qualities.energia-10);
                    if(  character.qualities.fragmento1 == false ) {
                        system.setQuality("fragmentos", character.qualities.fragmentos + 1);
                        system.setQuality( "fragmento1" , true )
                    }
                },
        }
    ),

    /*Guille*/

    /*David*/
    coches: new undum.SimpleSituation(
        "<h1>Coches de choque</h1>\
        <p class='transient'> \
        <img src='media/img/mapa8.png' class='mapa'/> \
         Llegaste a los coches de choque, resulta demasiado aburrido\
         montarte tú solo, pero siempre puedes <a href='mcoches'>explorar</a> y ver si descubres\
         algo nuevo.<br>\
         O bien, puedes elegir un nuevo lugar para explorar.\
         Elige un lugar al que ir:<br> \
         <a href='rusa'> Montaña Rusa(7) </a><br>\
         <a href='tiovivo'> Tiovivo(9) </a><br> \
         <a href='plaza'> Plaza(1)</a> </p>"
    ),

    mcoches: new undum.SimpleSituation(
        "<h1>Coches de choque</h1>\
        <p class='transient'>\
        Afortunadamente está vez has podido encontrar\
        2 kits de herramientas,los cuales se han sumado a tu inventario.\
        puedes seguir explorando el parque...\
        <a href='rusa'> Montaña Rusa(7) </a><br>\
        <a href='tiovivo'> Tiovivo(9) </a><br> \
        <a href='plaza'> Plaza(1)</a> </p>",
        {
            enter: function(character, system, action) {
                if(character.qualities.herramientas == 0 && character.qualities.arreglado == false && character.qualities.energia == 0 ){
                    system.setQuality("herramientas", character.qualities.herramientas+2);
                    system.setCharacterText("<p>Has recogido tus 2 Kit de Herramientas.</p>")
                } else {
                    system.setCharacterText("<p>Ya recogiste los kits de herramientas con anterioridad.</p>")
                    system.doLink("maxkit");
                }
            },
        }
    ),

    maxkit: new undum.SimpleSituation(
        "<h1>Coches de choque</h1>\
        <p class='transient'>\
        Lamentablemente, ya que no quedan más kits de herramientas disponibles, o no has tenido la suerte\
        de encontrar alguno. Puedes seguir explorando y quizá en un futuro puedas volver a \
        encontrar alguno.\
        Elige un lugar al que ir:<br> \
         <a href='rusa'> Montaña Rusa(7) </a><br>\
         <a href='tiovivo'> Tiovivo(9) </a><br> \
         <a href='plaza'> Plaza(1)</a></p>"
    ),

    /*David*/

    /*Andrea*/
    caida: new undum.SimpleSituation(
        "<h1>Caída Libre</h1>\
        <p class='transient'> \
        <img src='media/img/mapa3.png' class='mapa' />\
        Tras observar durante unos minutos la Caída Libre no\
        encuentras nada...<br>\
         Elige otro lugar al que ir:<br> \
         <a href='globos'> Globos(4) </a><br>\
         <a href='luz'> Electricidad(5) </a><br> \
         <a href='plaza'> Plaza(1)</a> </p>"
    ),
    /*Andrea*/

    /*Nadie*/
    agua: new undum.SimpleSituation(
        "<h1>Rápidos acuáticos</h1>\
        <p class='transient'> \
        <img src='media/img/mapa6.png' class='mapa' />\
        Vaya parece que no hay agua... Sólo hay una trampilla con cerradura...\
         Aquí no encontrarás nada...<br>\
         Elige otro lugar al que ir:<br> \
         <a href='rusa'> Montaña Rusa(7) </a><br>\
         <a href='luz'> Electricidad(5) </a><br> \
         <a href='plaza'> Plaza(1)</a> </p>"
    ),
     /*Nadie*/

    /*Andrés*/
    luz: new undum.SimpleSituation(
        "<h1>Caseta de electricidad </h1>\
        <p class='transient'> \
         <br>\
         <a href='arreglarluz'>Activar generador</a><br>\
         <p class='transient'> \
          <img src='media/img/mapa5.png' class='mapa'/> \
          Elige un lugar al que ir:<br> \
          <a href='caida'> Caida Libre(3) </a><br> \
          <a href='agua'> Rápidos Acuáticos(6) </a>",
    ),


    arreglarluz: new undum.SimpleSituation(
        "<h1>Caseta Electricidad </h1> \
        <p class='transient'> <br>\
        <p class='transient'> \
         <img src='media/img/mapa5.png' class='mapa'/> \
         Elige un lugar al que ir:<br> \
         <a href='caida'> Caida Libre(3) </a><br> \
         <a href='agua'> Rápidos Acuáticos(6) </a>",

{
            enter: function(character, system, action) {
                if (character.qualities.herramientas >= 1 && character.qualities.energia != 100) {
                    system.setQuality("herramientas", character.qualities.herramientas - 1);
                    system.setCharacterText("<p>Generador arreglado</p>");
                    if(character.qualities.energia == 0){
                        system.setQuality("energia", character.qualities.energia + 100);
                        system.setCharacterText("<p>100% de Energía</p>");
                    }else{
                        system.setCharacterText("<p>El generador ya tiene energía</p>");
                    }
                } else {
                    if(character.qualities.herramientas < 1) system.setCharacterText("<p>Necesitas un Kit de Herramientas para poder arreglar la electricidad</p>");
                    if(character.qualities.energia == 100) system.setCharacterText("<p>Energía al 100%</p>");
                }
            },
        }
    ),
    /*Andrés*/

    /*Nadie*/
    noria: new undum.SimpleSituation(
        "<h1>Noria</h1>\
        <p class='transient'> \
        <img src='media/img/mapa2.png' class='mapa'/> \
        <br>\
        Tras subir a la noria, no encuentras nada...<br>\
         Elige un lugar al que ir:<br> \
        <a href='globos'> Globos(4) </a><br>\
        <a href='entrada'> Entrada(10) </a><br>\
        <a href='plaza'> Plaza(1)</a></p>"    
    ),
   /*Nadie*/



    
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    energia: new undum.NumericQuality(
        "Energía(%)", {priority:"0001", group:'stats'}
    ),
    herramientas: new undum.NumericQuality(
        "Kit herramientas", {priority:"0002", group:'stats'}
    ),
    fragmentos: new undum.NumericQuality(
        "Fragmentos de llave(3)", {priority:"0003", group:'stats'}
    ),
    llave: new undum.NumericQuality(
        "Llave", {priority:"0004", group:'stats'}
    ),

    arreglado: new undum.OnOffQuality(
        "M.Rusa arreglada", {priority:"0002", group:'stats', onDisplay:"✓"}
    ),
    fragmento1: new undum.OnOffQuality(
        "", {priority:"0002", group:'llave'}
    ),
    fragmento2: new undum.OnOffQuality(
        "", {priority:"0002", group:'llave'}
    ),
    fragmento3: new undum.OnOffQuality(
        "", {priority:"0002", group:'llave'}
    ),

};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */

undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    llave: new undum.QualityGroup('', {priority:"0002"})

};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */

undum.game.init = function(character, system) {
    character.qualities.energia = 0;
    character.qualities.herramientas = 0;
    character.qualities.fragmentos = 0;
    character.qualities.llave = 0;
    system.setQuality( "arreglado" , false )
    system.setQuality( "fragmento1" , false )
    system.setQuality( "fragmento2" , false )
    system.setQuality( "fragmento3" , false )
    system.setCharacterText("<p>Comienza el juego.</p>");
};
