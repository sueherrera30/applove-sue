var tache=document.getElementsByClassName("botoncerrar")[0];
var imagenMostrada = document.getElementById("imagenMostrada");
var imagenes = document.getElementsByClassName("imagenes");
var imagenAver= document.getElementById('imagen');

var cuantasImagenes = imagenes.length;
for(var i=0; i< cuantasImagenes; i++){
  imagenes[i].addEventListener("click",mostrar);
}
function mostrar(){
imagenMostrada.style.display="block";
imagenAver.src = this.src;
}

tache.addEventListener("click",cerrarImagen);

function cerrarImagen(){
imagenMostrada.style.display ="none";
}
