/* menu hamburguesa*/
document.querySelector('.hamburger').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    if (menu.style.maxHeight === '0px') {
      menu.style.maxHeight = '500px';  /* Esto hace que el menú tenga la altura necesaria para mostrar todo su contenido */
    } else {
      menu.style.maxHeight = '0px';  /* Esto hace que el menú no tenga altura */
    }
  });

 

  /* Zom a las imagenes de info3*/
  window.onload = function() {
    var elements = document.querySelectorAll('.Info3 *'); // Selecciona todos los elementos dentro de .InfoInicio
  
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('mouseover', zoomIn); // Evento al pasar el mouse
      elements[i].addEventListener('mouseout', zoomOut); // Evento al quitar el mouse
    }
  }
  
  function zoomIn(event) {
    event.target.classList.add('zoom');
    event.target.style.transform = "scale(1.1)"; // Aumenta el tamaño del elemento
  }
  
  function zoomOut(event) {
    event.target.classList.remove('zoom');
    event.target.style.transform = "scale(1)"; // Restaura el tamaño original del elemento
  }
  

/* Zom a las imagenes de info3*/
document.addEventListener('mousemove', function(e) {
  for (var i = 0; i < 1; i++) { 
    var estrellita = document.createElement('div');
    estrellita.className = 'estrellita';
    estrellita.style.left = (e.pageX + Math.random() * 50 - 25) + 'px'; // Posición aleatoria alrededor del cursor
    estrellita.style.top = (e.pageY + Math.random() * 50 - 25) + 'px'; // Posición aleatoria alrededor del cursor
    document.body.appendChild(estrellita);

    setTimeout(function() {
      document.body.removeChild(estrellita);
    }, 300); // Reduce el tiempo de vida de las estrellas a 0.3 segundos
  }
});

