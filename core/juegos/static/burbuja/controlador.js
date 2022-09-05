/* JUEGO BURBUJA **********************************
Michael Fabian Rojas Sabogal

Laura Viviana Gomez Urueña

version :1.0.3 
Mayo / 2021

nota: agregar los contadores de puntos 
****************************************************/

var cuadrados = [];
var radioCuadrado = 10;
var velocidadCuadrado = 90;
var cantidadCuadrados = 5;

var cuadradosMalos = [];
var radioCuadradoMalo = 20;
var velocidadCuadradoMalo = 100;
var cantidadCuadradosMalos = 2;

var burbuja
var canvas;
var ctx;

var velocidadBurbuja = 2
var radioBurbuja = 30;
var posBurbuja = {x:400, y:200};
var xdirBurbuja = 0;
var ydirBurbuja = 0;

let colores = ["green","red", "black","blue","orange","gold","lightcoral"];
var numAleatorio
var puntaje = 0;
var vista = new Vista();

/*al cargar la pagina lanza el metodo iniciar asociado al evento LOAD*/
//window.addEventListener("load", iniciar, false);

/*************************se ejecuta al cargar. crea los objetos ***********************************/

//function iniciar (){
	//vista.CargarElementos();
	window.onload = function() {
		vista.cargarPlantilla("inicio");
	};
//}

function iniciarJuego(juego){
	vista.cargarPlantilla(juego);
	vista.CargarElementos();
	main();
}

//**************************CONTROLA EL CICLO REPETITIVO *************************************/
//ESTRUCTURA minima, no ajusta por cambios de velocidad del hardware
function main(){
	requestAnimationFrame(main);

	ctx.clearRect(0,0,  canvas.width, canvas.height);

	//muestra la burbuja
	vista.MostrarBurbuja();

	//muestra los cuadrados
	vista.MostrarCuadrados();

	//muestra los cuadrados malos
	vista.MostrarCuadradosMalos();

	//mueve los objetos
	burbuja.mover();

	//mueve los cuadrados
	for(let i = 0; i < cantidadCuadrados ; i ++){
		cuadrados[i].mover();
	}

	//mueve los cuadrados Malos
	for(let i = 0; i < cantidadCuadradosMalos ; i ++){
		cuadradosMalos[i].mover();
	}
	
	//aumenta el tamaño de la burbuja
	vista.AumentarTamaño();
	
	//elimina el cuadrado cuando choca con la burbuja
	vista.DeleteCuadrados();
}


/************************************* FUNCIONES AUXILIARES ***************************************/
// generar un numero al azar entre min y max
function aleatorio(min, max){
	return Math.round((min + Math.random()*(max-min)));
}

//esta funcion se encuentra en el index
function control(event){
	var cod = event.keyCode;

	if(cod == 38){
		ydirBurbuja = -velocidadBurbuja;
		xdirBurbuja = 0;
	}
	if(cod == 40){
		ydirBurbuja = velocidadBurbuja;
		xdirBurbuja = 0;
	}

	if(cod == 37){
		ydirBurbuja = 0;
		xdirBurbuja = -velocidadBurbuja;
	}
	if(cod == 39){
		ydirBurbuja = 0;
		xdirBurbuja = velocidadBurbuja;
	}
	if(cod == null){
		ydirBurbuja = 0;
		xdirBurbuja = 0;
	}
}

function colicion(Obj1, Obj2){
	let distancia = Math.sqrt((Obj1.x - Obj2.x) * (Obj1.x - Obj2.x) + (Obj1.y - Obj2.y) * (Obj1.y - Obj2.y));

	if (Math.round(distancia) < (Obj1.r + Obj2.r)){
		return true;
	}
}














