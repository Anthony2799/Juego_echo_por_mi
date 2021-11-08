'use strickt';
console.log(this)

// Obtenemos los elementos DIV a los que queremos añadir nuestro evento onclick
var elementos = document.getElementsByClassName("cajaD");
// Recorremos todos los elementos
for (var i=0; i<elementos.length; i++) {
      // Añadimos el evento onclick al div
      crearEvento(elementos[i], "click", function(){
            // Hacemos que muestre el contenido del DIV
           alert(this.innerHTML);
      });
}
/*
const button = document.getElementsByClassName('juego');
button.addEventListener('click', function(event) { 
  console.log('button clicked');
});*/