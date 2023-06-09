var lista = ["img/imagen1.jpg", "img/imagen2.jpg", "img/imagen3.jpg"];
var indice = 0;
var estado;
function carrusel(){
  var ObjImagen;
  ObjImagen = document.getElementById("portada");

  ObjImagen.src = lista[indice];
  indice++;

  if(indice == lista.length)
    indice = 0;

  estado = setTimeout("carrusel()", 1000)
}

function pausa(){
  if (estado != null) {
    clearTimeout(estado);
    estado = null;
  }
}

function play() {
  if (estado == null) {
    carrusel();
  }
}

$(document).ready(function(){
    carrusel();
    $("#pausa").click(function() {
      pausa();
    });

    $("#play").click(function() {
      play();
    });

    $(".imagen").mouseover(function() {
      $(this).css("transform", "scale(1.5)");
      $(this).css("transition", "all 0.5s");
    });
    
    $(".imagen").mouseout(function() {
      $(this).css("transform", "scale(1)");
      $(this).css("transition", "all 0.5s");
    });
});