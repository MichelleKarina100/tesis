const imagenes=document.querySelectorAll('.img-galeria')
const imagenesLigth =document.querySelector('.agregar-imagen')
const contenedorLigth=document.querySelector('.imagen-ligth')
const hamburger1=document.querySelector('.hamburger');
const cantidad=document.querySelector('.a1')
const comprar=document.querySelector('.a2')
const listar=document.querySelector('.a3')
const precio=document.querySelector('.form-control')


console.log(imagenes)
console.log(imagenesLigth)
console.log(contenedorLigth)
console.log(contenedorLigth)
imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
//console.log(imagen.getAttribute('src')) con esta linea de codigo capturamos la ruta donde esta la imagen
        aparecerImagen(imagen.getAttribute('src'))
})
})
contenedorLigth.addEventListener('click',(e)=>{
    if(e.target !== imagenesLigth && e.target !== cantidad&& e.target !== precio&& e.target !== comprar&& e.target !== listar){
    contenedorLigth.classList.toggle('show')
    imagenesLigth.classList.toggle('showImage')
    hamburger1.style.opacity='1'
}
})

const aparecerImagen = (imagen)=>{
    imagenesLigth.src = imagen;
    contenedorLigth.classList.toggle('show')
    imagenesLigth.classList.toggle('showImage')
    hamburger1.style.opacity='0'


}
