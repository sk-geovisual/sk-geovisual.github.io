// Array of images for the gallery
const images = [
    { src: 'img/projects/Topo_Spain_A2.jpg', alt: 'Topographic map of Spain'},
    { src: 'img/projects/AZ_AgathlaPeak_rendering_low.jpg', alt: 'Pseudo 3D map of Agathla Peak (Arizona)' },
    { src: 'img/projects/WA_MtRainier_rendering_low.jpg', alt: 'Pseudo 3D map of Mount Rainier (Washington)' },
    { src: 'img/projects/UT_TheGoosenecks_rendering_low.jpg', alt: 'Pseudo 3D map of The Goosenecks (Utah)' },
    { src: 'img/projects/WY_GrandTeton_rendering_low.jpg', alt: 'Pseudo 3D map of Grand Teton National Park (Wyoming)' },
    { src: 'img/projects/BrightAngel_gruen_rendering_low.jpg', alt: 'Pseudo 3D map of Bright Angel' },
    { src: 'img/projects/N36W112_SimonKraus.png', alt: 'Randomly designed Tile N36W112 in North America' },
    { src: 'img/projects/Suedamerika.png', alt: 'Topographic map of Latin America' },
    { src: 'img/projects/Neumorphism_Ulm.jpg', alt: 'A map of the german city "Ulm" in neumorphism style' },
    { src: 'img/projects/Europawahl.jpg', alt: 'Thematic map of the European Parliament elections in Germany 2019' },
    { src: 'img/projects/LandkreiseBayern.png', alt: 'Map of the Bavarian Population development 2012-2017' },
    { src: 'img/projects/RegierungsbezirkeBayern.png', alt: 'Map of the Bavarian Population development 2012-2017 based on their Regierungsbezirke' },
    { src: 'img/projects/Sichtbarkeitsanalyse-Antennenmast.png', alt: 'Visibility analysis of an antenna mast' },
    { src: 'img/projects/Plastikkarte-2010.png', alt: 'Map of global plastic waste 2010' },
    { src: 'img/projects/Plastikkarte-2019.png', alt: 'Map of global plastic waste 2019' },
    { src: 'img/projects/Plakat_Quartier_IV_V.jpg', alt: 'Poster of a real estate property in Würzburg Hubland' },
    { src: 'img/projects/Residenzplatz/Plakat_Residenzplatz.png', alt: 'Imaginary Visualization of the Residenzplatz in Würzburg' },
    { src: 'img/projects/Plakat_Semester3.png', alt: 'Poster about my work in the third semester of my studies' },
    { src: 'img/projects/BrueckeAufMIZ.jpg', alt: 'Imaginary Visualization of an information centre at the river Main in Knetzgau' },
    { src: 'img/projects/strassenlaterne.jpg', alt: 'Rendering of a 3D-model of a street lamp' },
    { src: 'img/projects/rendering_blue_fertig.jpg', alt: 'Rendering of a 3D-model of Nothing Phone (3a)' },
    { src: 'img/projects/rendering_blue_2_fertig.jpg', alt: 'Rendering of a 3D-model of Nothing Phone (3a)' },
    { src: 'img/projects/rendering_white_2_fertig.jpg', alt: 'Rendering of a 3D-model of Nothing Phone (3a)' },
    { src: 'img/projects/rendering_black_2_fertig.jpg', alt: 'Rendering of a 3D-model of Nothing Phone (3a)' },

    // Add more image objects as needed
];

// Reference to the gallery container
const gallery = document.getElementById('gallery');

// Dynamically create and insert image elements
images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.loading = "lazy"; // Lazy Loading for performance
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    gallery.appendChild(imgElement);
});

// Modal-Referenzen
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modal-img');
let currentIndex = 0;

// Modal beim Bild-Klick öffnen
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
        closeModal();
    }
});

// Modal über das X schließen
document.querySelector('.close').addEventListener('click', function() {
    closeModal();
});

// Modal über ESC-Taste schließen
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal.style.display === 'flex') {
        closeModal();
    }
});

// Zentrale Funktion zum Schließen des Modals
function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}