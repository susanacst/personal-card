// Índice actual del slide (diapositiva) en el que estamos.
let currentIndex = 0;

// Función para mover las diapositivas en el carrusel.
function moveSlide(direction) {
    // Selecciona todas las diapositivas con la clase "slide".
    const slides = document.querySelectorAll('.slide');
    // Obtiene el número total de diapositivas.
    const totalSlides = slides.length;

    // Quita la clase "active" de la diapositiva actual, para dejar de mostrarla.
    slides[currentIndex].classList.remove('active');

    // Calcula el nuevo índice de la diapositiva.
    // Suma el índice actual + la dirección (1 para adelante, -1 para atrás).
    // Se usa el operador % (módulo) para que, si llegamos al final, volvamos al principio.
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Añade la clase "active" a la nueva diapositiva, para mostrarla.
    slides[currentIndex].classList.add('active');

    // Desplaza el contenedor del carrusel según el índice de la diapositiva.
    // Multiplicamos el índice actual por 100 para mover el contenedor del carrusel.
    // Así, cada diapositiva ocupa el 100% del ancho del contenedor.
    document.querySelector('.carousel-container').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Código para el carrusel de cartas (las tarjetas que giran automáticamente).
    window.onload = function() {
    // Selecciona el contenedor que tiene todas las cartas.
    const cardsContainer = document.getElementById('cards');
    // Selecciona una carta para obtener su ancho (incluyendo el espacio entre cartas).
    const card = document.querySelector('.card-presentacion-carrusel');
    // Calcula el ancho de una carta más el margen (24px de margen en este caso).
    const cardWidth = card.offsetWidth + 24; 
    // Variable para almacenar la posición actual de desplazamiento.
    let scrollPosition = 0;

    // Ejecuta este código cada 2 segundos.
    setInterval(() => {
        // Aumenta la posición de desplazamiento en el ancho de una carta.
        scrollPosition += cardWidth;

        // Si la posición de desplazamiento es mayor o igual al final del contenedor,
        // volvemos a la posición inicial (hacemos que el carrusel empiece de nuevo).
        if (scrollPosition >= cardsContainer.scrollWidth - cardsContainer.clientWidth) {
            scrollPosition = 0;
        }

        // Desplaza el contenedor de las cartas suavemente a la nueva posición.
        cardsContainer.scrollTo({
            left: scrollPosition,  // Nueva posición horizontal de desplazamiento.
            behavior: 'smooth'     // Hace que el desplazamiento sea suave.
        });
    }, 2000);  // Cambia de carta cada 2 segundos.
};
