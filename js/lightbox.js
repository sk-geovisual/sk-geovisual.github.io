// ...existing code...
let currentIndex = 0;

// Bild beim Klick auf ein Galerie-Bild im Modal anzeigen
gallery.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        modal.style.display = 'flex';
        modalImg.src = event.target.src;
        modalImg.alt = event.target.alt;
        document.body.classList.add('modal-open');
        currentIndex = Array.from(gallery.children).indexOf(event.target);
    }
});

// Vorheriges Bild anzeigen
document.querySelector('.prev').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
});

// Nächstes Bild anzeigen
document.querySelector('.next').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
});

// Modal beim Klicken außerhalb des Bildes schließen
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});