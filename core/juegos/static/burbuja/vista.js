/******************************* VISTA ******************************************/
class Vista {
    constructor(){

    }

    cargarPlantilla(plantilla){
		let template = document.getElementById(plantilla);

		if (template){
			var clon = template.content.cloneNode(true);
			document.getElementById("cuerpo").innerHTML ="";
			document.getElementById("cuerpo").appendChild(clon);
		}
	}

    //carga los elementos en la pantalla
    CargarElementos(){
        canvas = document.getElementById("canvas");
        ctx  = canvas.getContext("2d");
        document.getElementById("puntaje").innerHTML = puntaje;
        
    
        // crea el objeto de la clase burbuja
        burbuja = new Burbuja();
    
        // crea los objetos de la clase cuadrado
        for(let i = 0 ; i < cantidadCuadrados; i++){
            //lo agrega al array
            cuadrados.push( new Cuadrado() );	
        }

        // crea los objetos de la clase cuadradoMalo
        for(let i = 0 ; i < cantidadCuadradosMalos; i++){
            //lo agrega al array
            cuadradosMalos.push( new CuadradoMalo() );	
        }
    
    }

    //muestra los cuadrados trayendo la informacion desde el modelo
    MostrarCuadrados(){
        for (let i = 0 ; i < cantidadCuadrados ; i++){
            cuadrados[i].dibujar(ctx);
        }
    
    }

    //muestra los cuadrados malos trayendo la informacion desde el modelo
    MostrarCuadradosMalos(){
        for (let i = 0 ; i < cantidadCuadradosMalos ; i++){
            cuadradosMalos[i].dibujar(ctx);
        }
    
    }   

    //muestra los cuadrados trayendo la informacion desde el modelo
    MostrarBurbuja(){
        burbuja.dibujar(ctx);
    }

    //se desaparecen los cuadrados cuando se chocan con la burbuja
    DeleteCuadrados(){
        for(let i = 0; i < cantidadCuadrados ; i ++){
            let x = colicion(burbuja,cuadrados[i])
            if (x) {
                var indice = i ; // obtenemos el indice
                cuadrados.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
                cantidadCuadrados = cuadrados.length // se asigna la nueva cantidad de cuadrados
                puntaje = puntaje + 1;
                document.getElementById("puntaje").innerHTML = puntaje;
            }
        }
    }

    //aumenta el tamaño de la burbuja cuando se chocan con la burbuja
    AumentarTamaño(){
        for(let i = 0; i < cantidadCuadrados ; i ++){
            let x = colicion(burbuja,cuadrados[i])
            if (x) {
                let nuevoRadio = radioBurbuja + 1;
                radioBurbuja = nuevoRadio;
                burbuja.r = nuevoRadio;
            }
        }
    }

    


}