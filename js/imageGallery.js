// Array of images for the gallery
const images = [
    { src: 'img/projects/Topo_Spain_A2.jpg', alt: 'Topographic map of Spain', linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-blender-affinitydesigner-activity-7296453220002942977-5pkJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DGFnBE_IWQD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { src: 'img/projects/AZ_AgathlaPeak_rendering_low.jpg', alt: 'Pseudo 3D map of Agathla Peak (Arizona)', linkedin: '', instagram: ''  },
    { src: 'img/projects/WA_MtRainier_rendering_low.jpg', alt: 'Pseudo 3D map of Mount Rainier (Washington)', linkedin: '', instagram: ''  },
    { src: 'img/projects/UT_TheGoosenecks_rendering_low.jpg', alt: 'Pseudo 3D map of The Goosenecks (Utah)', linkedin: '', instagram: ''  },
    { src: 'img/projects/WY_GrandTeton_rendering_low.jpg', alt: 'Pseudo 3D map of Grand Teton National Park (Wyoming)', linkedin: '', instagram: ''  },
    { src: 'img/projects/BrightAngel_gruen_rendering_low.jpg', alt: 'Pseudo 3D map of Bright Angel', linkedin: '', instagram: ''  },
    { src: 'img/projects/N36W112_SimonKraus.png', alt: 'Stylistic designed Tile N36W112 in North America', linkedin: '', instagram: ''  },
    { src: 'img/projects/Suedamerika.png', alt: 'Topographic map of South America', linkedin: '', instagram: ''  },
    { src: 'img/projects/Neumorphism_Ulm.jpg', alt: 'A map of the german city "Ulm" in neumorphism style', linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-affinitydesigner-affinitypublisher-activity-7300215610381115395-QQdh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DGgXEjxtRxj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/Europawahl.jpg', alt: 'Thematic map of the European Parliament elections in Germany 2019', linkedin: '', instagram: ''  },
    { src: 'img/projects/LandkreiseBayern.png', alt: 'Map of the Bavarian Population development 2012-2017', linkedin: '', instagram: ''  },
    { src: 'img/projects/RegierungsbezirkeBayern.png', alt: 'Map of the Bavarian Population development 2012-2017 based on their Regierungsbezirke', linkedin: '', instagram: ''  },
    { src: 'img/projects/Sichtbarkeitsanalyse-Antennenmast.png', alt: 'Visibility analysis of an antenna mast', linkedin: '', instagram: ''  },
    { src: 'img/projects/Plastikkarte-2010.png', alt: 'Map of global plastic waste 2010', linkedin: '', instagram: ''  },
    { src: 'img/projects/Plastikkarte-2019.png', alt: 'Map of global plastic waste 2019', linkedin: '', instagram: ''  },
    { src: 'img/projects/Plakat_Quartier_IV_V.jpg', alt: 'Poster of a real estate property in Würzburg Hubland', linkedin: '', instagram: ''  },
    { src: 'img/projects/Residenzplatz/Plakat_Residenzplatz.png', alt: 'Imaginary Visualization of the Residenzplatz in Würzburg', linkedin: '', instagram: ''  },
    { src: 'img/projects/Plakat_Semester3.png', alt: 'Poster about my work in the third semester of my studies', linkedin: '', instagram: ''  },
    { src: 'img/projects/BrueckeAufMIZ.jpg', alt: 'Imaginary Visualization of an information centre at the river Main in Knetzgau', linkedin: '', instagram: ''  },
    { src: 'img/projects/strassenlaterne.jpg', alt: 'Rendering of a 3D-model of a street lamp', linkedin: '', instagram: ''  },
    { src: 'img/projects/rendering_blue_fertig.jpg', alt: 'Rendering of a 3D-model of Nothing Phone (3a)', linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-affinitypublisher-affinitydesigner-activity-7321125771224231936-DNCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DI07AVvN5RC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/rendering_blue_2_fertig.jpg', alt: 'Rendering of a 3D-model of Nothing Phone (3a)', linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-affinitypublisher-affinitydesigner-activity-7321125771224231936-DNCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DI07AVvN5RC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/rendering_white_2_fertig.jpg', alt: 'Rendering of a 3D-model of Nothing Phone (3a)', linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-affinitypublisher-affinitydesigner-activity-7321125771224231936-DNCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DI07AVvN5RC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/rendering_black_2_fertig.jpg', alt: 'Rendering of a 3D-model of Nothing Phone (3a)', linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-affinitypublisher-affinitydesigner-activity-7321125771224231936-DNCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DI07AVvN5RC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
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
const modalCaption = document.getElementById('modal-caption');
const modalLink = document.getElementById('modal-logos');
let currentIndex = 0;

// Modal beim Bild-Klick öffnen
gallery.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        modal.style.display = 'flex';
        modalImg.src = event.target.src;
        modalImg.alt = event.target.alt;
        modalCaption.textContent = event.target.alt; // Alt-Text als Caption anzeigen
        document.body.classList.add('modal-open');
        currentIndex = Array.from(gallery.children).indexOf(event.target);

        // Social Links einfügen
        const imgData = images[currentIndex];
        let linksHTML = '';
        if (imgData.linkedin) {
            linksHTML += `<a href="${imgData.linkedin}" target="_blank"><img src="img/Logos_Marken/linkedin.svg" alt="LinkedIn" style="height:2rem;margin:0 0.5rem;"></a>`;
        }
        if (imgData.instagram) {
            linksHTML += `<a href="${imgData.instagram}" target="_blank"><img src="img/Logos_Marken/instagram.svg" alt="Instagram" style="height:2rem;margin:0 0.5rem;"></a>`;
        }
        modalLink.innerHTML = linksHTML;
    }
});

// Vorheriges Bild anzeigen
document.querySelector('.prev').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalContent();
});

// Nächstes Bild anzeigen
document.querySelector('.next').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    updateModalContent();
});

// Modal beim Klicken außerhalb des Bildes schließen
// window.addEventListener('click', function(event) {
//     if (event.target === modal) {
//         closeModal();
//     }
// });

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

// Funktion zum Aktualisieren des Modal-Inhalts
function updateModalContent() {
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
    modalCaption.textContent = images[currentIndex].alt;
    const imgData = images[currentIndex];
    let linksHTML = '';

    if (imgData.linkedin) {
        linksHTML += `<a href="${imgData.linkedin}" target="_blank"><img src="img/Logos_Marken/linkedin.svg" alt="LinkedIn"></a>`;
    }
    if (imgData.instagram) {
        linksHTML += `<a href="${imgData.instagram}" target="_blank"><img src="img/Logos_Marken/instagram.svg" alt="Instagram"></a>`;
    }

    document.getElementById('modal-logos').innerHTML = linksHTML;
}