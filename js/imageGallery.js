// Array of images for the gallery
const images = [
    { src: 'img/projects/Topo_Spain_A2.jpg', alt: 'Topographic map of Spain', tools: ["qgis", "blender", "affinitydesigner"] , linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-blender-affinitydesigner-activity-7296453220002942977-5pkJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DGFnBE_IWQD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { src: 'img/projects/AZ_AgathlaPeak_rendering_low.jpg', alt: 'Pseudo 3D map of Agathla Peak (Arizona)', tools: ["arcgispro", "blender"], linkedin: '', instagram: ''  },
    { src: 'img/projects/WA_MtRainier_rendering_low.jpg', alt: 'Pseudo 3D map of Mount Rainier (Washington)', tools: ["arcgispro", "blender"], linkedin: '', instagram: ''  },
    { src: 'img/projects/BrightAngel_gruen_rendering_low.jpg', alt: 'Pseudo 3D map of Bright Angel', tools: ["arcgispro", "blender"], linkedin: '', instagram: ''  },
    { src: 'img/projects/N36W112_SimonKraus.png', alt: 'Stylistic designed Tile N36W112 in North America', tools: ["arcgispro"], linkedin: '', instagram: ''  },
    { src: 'img/projects/Suedamerika.png', alt: 'Topographic map of South America', tools: ["arcgispro"], linkedin: '', instagram: ''  },
    { src: 'img/projects/Neumorphism_Ulm.jpg', alt: 'A map of the german city "Ulm" in neumorphism style', tools: ["qgis", "affinitydesigner", "affinitypublisher"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-affinitydesigner-affinitypublisher-activity-7300215610381115395-QQdh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DGgXEjxtRxj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/Europawahl.jpg', alt: 'Thematic map of the European Parliament elections in Germany 2019', tools: ["arcmap"], linkedin: '', instagram: ''  },
    { src: 'img/projects/LandkreiseBayern.png', alt: 'Map of the Bavarian Population development 2012-2017', tools: ["arcmap"], linkedin: '', instagram: ''  },
    { src: 'img/projects/Sichtbarkeitsanalyse-Antennenmast.png', alt: 'Visibility analysis of an antenna mast', tools: ["arcmap"], linkedin: '', instagram: ''  },
    { src: 'img/projects/Plastikkarte-2010.png', alt: 'Map of global plastic waste 2010', tools: ["qgis"], linkedin: '', instagram: ''  },
    { src: 'img/projects/Plastikkarte-2019.png', alt: 'Map of global plastic waste 2019', tools: ["qgis"], linkedin: '', instagram: ''  },
    { src: 'img/projects/Plakat_Quartier_IV_V.jpg', alt: 'Poster of a real estate property in Würzburg Hubland', tools: ["autocad", "arcgispro", "3dsmax", "davinciresolve", "affinitypublisher"], linkedin: '', instagram: ''  },
    { src: 'img/projects/BrueckeAufMIZ.jpg', alt: 'Imaginary Visualization of an information centre at the river Main in Knetzgau', tools: ["3dsmax", "unity", "affinitypublisher"], linkedin: '', instagram: ''  },
    { src: 'img/projects/rendering_blue_fertig.jpg', alt: 'Rendering of Nothing Phone (3a) for the Nothing Community Project 2025', tools: ["qgis", "affinitypublisher","affinitydesigner", "blender"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-affinitypublisher-affinitydesigner-activity-7321125771224231936-DNCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DI07AVvN5RC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/rendering_blue_2_fertig.jpg', alt: 'Rendering of Nothing Phone (3a) for the Nothing Community Project 2025', tools: ["qgis", "affinitypublisher","affinitydesigner", "blender"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-affinitypublisher-affinitydesigner-activity-7321125771224231936-DNCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DI07AVvN5RC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/rendering_white_2_fertig.jpg', alt: 'Rendering of Nothing Phone (3a) for the Nothing Community Project 2025', tools: ["qgis", "affinitypublisher","affinitydesigner", "blender"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-affinitypublisher-affinitydesigner-activity-7321125771224231936-DNCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DI07AVvN5RC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/rendering_black_2_fertig.jpg', alt: 'Rendering of Nothing Phone (3a) for the Nothing Community Project 2025', tools: ["qgis", "affinitypublisher","affinitydesigner", "blender"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-affinitypublisher-affinitydesigner-activity-7321125771224231936-DNCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DI07AVvN5RC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    // Add more image objects as needed
    // Tools: arcgispro, qgis, unrealengine, unity, blender, 3dsmax, affinityphoto, affinitydesigner, affinitypublisher, davinciresolve
];

// Mapping: Tool-Name → Icon-Pfad
const toolLogos = {
    unrealengine: "img/Logos_Marken/logo_UnrealEngine.svg",
    arcgispro: "img/Logos_Marken/logo_ArcGIS-Pro.svg",
    qgis: "img/Logos_Marken/logo_QGIS.svg",
    blender: "img/Logos_Marken/logo_Blender.svg",
    affinitydesigner: "img/Logos_Marken/logo_Affinity-Designer.svg",
    affinitypublisher: "img/Logos_Marken/logo_Affinity-Publisher.svg",
    davinciresolve: "img/Logos_Marken/logo_Resolve.svg",
    autocad: "img/Logos_Marken/logo_AutoCAD.svg",
    "3dsmax": "img/Logos_Marken/logo_3dsmax.svg",
    unity: "img/Logos_Marken/logo_Unity.svg",
    arcmap: "img/Logos_Marken/logo_ArcMap.svg"
};

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

        // Tool-Logos zuerst (eigene Zeile)
        const imgData = images[currentIndex];
        const tools = imgData.tools || [];
        let logosHTML = '';
        if (tools.length > 0) {
            logosHTML = `<div class="modal-logos-row">
                <span class="text-before-logos">Made with:</span>` +
                tools.map(tool =>
                    `<img src="${toolLogos[tool]}" alt="${tool}" title="${tool}" class="tool-logos"
                        onerror="this.outerHTML='<span class=&quot;tool-logo-fallback&quot;>${tool}</span>';">`
                ).join('') +
                `</div>`;
        }

        // Social Links in neuer Zeile mit Text davor
        let socialHTML = '';
        if (imgData.linkedin || imgData.instagram) {
            socialHTML = `<div class="modal-logos-row">
                <span class="text-before-logos">View on:</span>`;
            if (imgData.linkedin) {
                socialHTML += `<a href="${imgData.linkedin}" target="_blank"><img src="img/Logos_Marken/linkedin.svg" alt="LinkedIn"></a>`;
            }
            if (imgData.instagram) {
                socialHTML += `<a href="${imgData.instagram}" target="_blank"><img src="img/Logos_Marken/instagram.svg" alt="Instagram"></a>`;
            }
            socialHTML += '</div>';
        }

        modalLink.innerHTML = logosHTML + socialHTML;
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

    // Tool-Logos zuerst (eigene Zeile)
    const tools = imgData.tools || [];
    let logosHTML = '';
    if (tools.length > 0) {
        logosHTML = `<div class="modal-logos-row">
            <span class="text-before-logos">Made with:</span>` +
            tools.map(tool =>
                `<img src="${toolLogos[tool]}" alt="${tool}" title="${tool}" class="tool-logos"
                    onerror="this.outerHTML='<span class=&quot;tool-logo-fallback&quot;>${tool}</span>';">`
            ).join('') +
            `</div>`;
    }

    // Social Links in neuer Zeile mit Text davor
    let socialHTML = '';
    if (imgData.linkedin || imgData.instagram) {
        socialHTML = `<div class="modal-logos-row">
            <span class="text-before-logos">View on:</span>`;
        if (imgData.linkedin) {
            socialHTML += `<a href="${imgData.linkedin}" target="_blank"><img src="img/Logos_Marken/linkedin.svg" alt="LinkedIn"></a>`;
        }
        if (imgData.instagram) {
            socialHTML += `<a href="${imgData.instagram}" target="_blank"><img src="img/Logos_Marken/instagram.svg" alt="Instagram"></a>`;
        }
        socialHTML += '</div>';
    }

    document.getElementById('modal-logos').innerHTML = logosHTML + socialHTML;
}