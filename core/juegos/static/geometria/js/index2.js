var figuras =  [];

	/*draggable permite mover los elementos con el ratón. El revert:invalid devuelve a su posicion inicial si la figura no corresponde con la de la derecha
	droppable crea objetos de elementos que se pueden arrastrar */
		$(document).ready(function(){

			$(".cuadrado").draggable({revert:"invalid"});
			$(".circulo").draggable({revert:"invalid"});
			$(".estrella").draggable({revert:"invalid"});
			$(".triangulo").draggable({revert:"invalid"});

			$("#recuadro-cuadrado").droppable({accept : ".cuadrado", tolerance:"fit" , drop:colocarFigura});
			$("#recuadro-circulo").droppable({accept : ".circulo", tolerance:"fit" , drop:colocarFigura});
			$("#recuadro-estrella").droppable({accept : ".estrella", tolerance:"fit" , drop:colocarFigura});
			$("#recuadro-triangulo").droppable({accept : ".triangulo", tolerance:"fit" , drop:colocarFigura});

		});
	/* La funcion colocarFigura lo que hace es que cuando se arrastra la figura de la izquierda en el recuadro correspondiente de la derecha, el recuadro de las figuras de la derecha 
	cambia de color según el color de las figuras de la derecha */
		function colocarFigura(event,ui){
			var formas= ui.draggable.attr("class");
           
			if(formas.includes("cuadrado")){
				$(".cuadrado").css("visibility","hidden");
				$("#recuadro-cuadrado").css('background-color', 'yellow');
				document.getElementsByClassName("sonido")[0].innerHTML+="<embed src='audio/acierto.mp3' hidden='true' autostart='true' loop='false'>";
				figuras.push('.cuadrado');
			} else if (formas.includes("circulo")){
				$(".circulo").css("visibility","hidden");
				$("#recuadro-circulo").css('background-color','red');
				document.getElementsByClassName("sonido")[0].innerHTML+="<embed src='audio/acierto.mp3' hidden='true' autostart='true' loop='false'>";
				figuras.push('.circulo');
			} else if (formas.includes("estrella")){
				$(".estrella").css("visibility","hidden");
				$("#recuadro-estrella").css('background-color','purple');
				document.getElementsByClassName("sonido")[0].innerHTML+="<embed src='audio/acierto.mp3' hidden='true' autostart='true' loop='false'>";
				figuras.push('.estrella');			
			} else if(formas.includes("triangulo")){
				$(".triangulo").css("visibility","hidden");
				$("#recuadro-triangulo").css('background-color','blue');
				document.getElementsByClassName("sonido")[0].innerHTML+="<embed src='audio/acierto.mp3' hidden='true' autostart='true' loop='false'>";
				figuras.push('.triangulo');
				/* En esta parte queríamos que cuando hubiese un error de posicionamiento mostrase un mensaje de error acompañado de un sonido, pero no funciona */
			} else{
               $(".cuadrado").draggable({revert:"valid"});
			   $(".circulo").draggable({revert:"valid"});
			   $(".estrella").draggable({revert:"valid"});
			   $(".triangulo").draggable({revert:"valid"}); 
               document.getElementsByClassName("sonido")[0].innerHTML+="<h4> Has fallado </h4>";
               document.getElementsByClassName("sonido")[0].innerHTML+="<embed src='audio/error.mp3' hidden='true' autostart='true' loop='false'>";
            }

			finPartida();
		}
	/* La funcion finPartida hace que una vez que se ha completado el juego, muestra una imagen que informa de que ha ganado, acompañada de un sonido */
		function finPartida(){	
            if(figuras.length==4){
				document.getElementsByClassName("sonido")[0].innerHTML+="<embed src='audio/ganador.mp3' hidden='true' autostart='true' loop='false'>";
                document.getElementsByClassName("sonido")[0].innerHTML+="<img src='image/ganador.png' >";
			}
		}
	/* La funcion volver a jugar recarga la página y llama a la funcion aleatorio para que las figuras cambien de posición. La funcio aleatorio funciona,
	 pero al hacer el reload no conseguimos que las figuras mantengan la posicion aleatoria y vuelve a recargarse con su posicion inicial. */
		function volverAJugar(){
			location.reload();
			aleatorio();
		}
	/*La funcion aleatorio hace que las figuras de las dos columnas cambien de posición de manera aleatoria*/
		function aleatorio(){
			var columnas = $("#dosColumnas");
			var fig = columnas.children();
			while(fig.length){
				columnas.append(fig.splice(Math.floor(Math.random() * fig.length), 1)[0]);
			}
		}

		