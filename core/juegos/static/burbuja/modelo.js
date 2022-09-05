/****** definicion de la clase  Burbujas *********************************************/
class Burbuja{
    constructor(){
    	this.x = posBurbuja['x'];
    	this.y = posBurbuja['y'];
    	this.r = radioBurbuja;
    	this.color = colores[3];
    }
 // cambia la posicion del objeto 
    setxy(x,y){
    	this.x += x;
    	this.y += y;
	}

 // dibuja el objeto en el canvas
 	dibujar(ctx){
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.arc(this.x, this.y, this.r, 0 , 2*Math.PI);
		ctx.stroke();
 	}   
// mueve el objeto en el canvas
 	mover(){
		let nx =  xdirBurbuja;
		let ny =  ydirBurbuja;
		burbuja.setxy(nx,ny);
		// limites reflejo para que la burbuja aparezca en el lado contrario
		if (burbuja.x > canvas.width ){
			let nx = 0;
			let ny = burbuja.y;
			burbuja.x = nx;
			burbuja.y = ny;
		}
		if (burbuja.x < 0 ){
			let nx = canvas.width;
			let ny = burbuja.y;
			burbuja.x = nx;
			burbuja.y = ny;
		}
		if (burbuja.y > canvas.height ){
			let nx = burbuja.x;
			let ny = 0;
			burbuja.x = nx;
			burbuja.y = ny;
		}
		if (burbuja.y < 0 ){
			let nx = burbuja.x;
			let ny = canvas.height;
			burbuja.x = nx;
			burbuja.y = ny;
		}
	}
}

/****************** definicion de la clase  cuadrado ***********************************************/
class Cuadrado{
	constructor(){
			// se le asigna un numero aleatorio en el que no estè cerca al area de la burbuja
			do { 
				this.x = aleatorio(0, canvas.width - 15);
				this.y = aleatorio(0, canvas.height - 15);
				numAleatorio = Math.sqrt((posBurbuja['x'] - this.x) * (posBurbuja['x'] - this.x) + (posBurbuja['y'] - this.y) * (posBurbuja['y'] - this.y))
			}
			while ( numAleatorio < (radioBurbuja + radioCuadrado) * 2);
    	
    	// se le asigna un numero aleatorio para cada direccion, teniendo en cuenta la velocidad
    	this.xdir = Math.floor(Math.random() * 76 + 25) / velocidadCuadrado;
    	if (Math.floor(Math.random() * 2) == 0) {
            this.xdir = -this.xdir;
        }
    	this.ydir = Math.floor(Math.random() * 76 + 25) / velocidadCuadrado;
    	if (Math.floor(Math.random() * 2) == 0) {
            this.ydir = -this.ydir;
        }

        this.r = radioCuadrado;	
		this.color = colores[2];
	}
	// dibuja el objeto en el canvas
 	dibujar(ctx){
		ctx.fillStyle = this.color;
 		ctx.fillRect(this.x, this.y, this.r, this.r);
 	}
	// mueve el objeto en el canvas
 	mover(){	    	

 		this.x += this.xdir;
        this.y += this.ydir;
        

		// rebote del cuadrado en cada una de las paredes
        if (this.x - radioCuadrado / 2 < 0 && this.x < 0) {
            this.xdir = -this.xdir;
        }
        if (this.x + radioCuadrado / 2 > canvas.width && this.x > 0) {
            this.xdir = -this.xdir;
        }
        if (this.y - radioCuadrado / 2 < 0 && this.y < 0) {
            this.ydir = -this.ydir;
        }
        if (this.y + radioCuadrado / 2 > canvas.height && this.y > 0) {
            this.ydir = -this.ydir;
        }

       /* if(this.x + radioCuadrado > burbuja.x - radioBurbuja){
        	this.xdir = -this.xdir;
        }
        if(this.x - radioCuadrado < burbuja.x + radioBurbuja){
        	this.xdir = this.xdir;
        } */
       
 	} 

}

/****************** definicion de la clase Cuadrado malo***********************************************/

class CuadradoMalo{
	constructor(){
			// se le asigna un numero aleatorio en el que no estè cerca al area de la burbuja
			do { 
				this.x = aleatorio(0, canvas.width - 15);
				this.y = aleatorio(0, canvas.height - 15);
				numAleatorio = Math.sqrt((posBurbuja['x'] - this.x) * (posBurbuja['x'] - this.x) + (posBurbuja['y'] - this.y) * (posBurbuja['y'] - this.y))
			}
			while ( numAleatorio < (radioBurbuja + radioCuadradoMalo) * 2);

    	// se le asigna un numero aleatorio para cada direccion, teniendo en cuenta la velocidad
    	this.xdir = Math.floor(Math.random() * 76 + 25) / velocidadCuadradoMalo;
    	if (Math.floor(Math.random() * 2) == 0) {
            this.xdir = -this.xdir;
        }
    	this.ydir = Math.floor(Math.random() * 76 + 25) / velocidadCuadradoMalo;
    	if (Math.floor(Math.random() * 2) == 0) {
            this.ydir = -this.ydir;
        }

        this.r = radioCuadradoMalo;	
		this.color = colores[1];
	}
	//dibuja el cuadrado en el canvas
	dibujar(ctx){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.r, this.r);
	}
	mover(){	    	

		this.x += this.xdir;
	   	this.y += this.ydir;
	   

	   // rebote del cuadrado en cada una de las paredes
	   if (this.x - radioCuadrado / 2 < 0 && this.x < 0) {
		   this.xdir = -this.xdir;
	   }
	   if (this.x + radioCuadrado / 2 > canvas.width && this.x > 0) {
		   this.xdir = -this.xdir;
	   }
	   if (this.y - radioCuadrado / 2 < 0 && this.y < 0) {
		   this.ydir = -this.ydir;
	   }
	   if (this.y + radioCuadrado / 2 > canvas.height && this.y > 0) {
		   this.ydir = -this.ydir;
	   }

	  /* if(this.x + radioCuadrado > burbuja.x - radioBurbuja){
		   this.xdir = -this.xdir;
	   }
	   if(this.x - radioCuadrado < burbuja.x + radioBurbuja){
		   this.xdir = this.xdir;
	   } */
	  
	} 
}