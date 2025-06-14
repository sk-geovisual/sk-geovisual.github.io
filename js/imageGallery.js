// Array of images for the gallery
const images = [
    { src: 'img/projects/Topo_Spain_A2.jpg', alt: 'Topographic map of Spain', tools: ["qgis", "blender", "affinitydesigner"] , linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-blender-affinitydesigner-activity-7296453220002942977-5pkJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DGFnBE_IWQD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { src: 'img/projects/AZ_AgathlaPeak_rendering_low.jpg', alt: 'Pseudo 3D map of Agathla Peak (Arizona)', tools: ["arcgispro", "blender"], linkedin: '', instagram: ''  },
    { src: 'img/projects/WA_MtRainier_rendering_low.jpg', alt: 'Pseudo 3D map of Mount Rainier (Washington)', tools: ["arcgispro", "blender"], linkedin: '', instagram: ''  },
    { src: 'img/projects/BrightAngel_gruen_rendering_low.jpg', alt: 'Pseudo 3D map of Bright Angel', tools: ["arcgispro", "blender"], linkedin: '', instagram: ''  },
    { src: 'img/projects/map4_minimalistMap_Monza.jpg', alt: '#12WeekGeoChallenge: Minimalist map of Autodromo Nazionale Monza', tools: ["qgis", "affinitydesigner"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_12weekgeochallenge-formula1-qgis-activity-7236251539370127360-tsVN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/C_aEOrAIDVJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/Neumorphism_Ulm.jpg', alt: 'A map of the german city "Ulm" in neumorphism style', tools: ["qgis", "affinitydesigner", "affinitypublisher"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-affinitydesigner-affinitypublisher-activity-7300215610381115395-QQdh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DGgXEjxtRxj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/map10_unexpectedMap_low.jpg', alt: '#12WeekGeoChallenge: Stylistic designed map of the river "Rhein" in Germany using a REM (Relative Elevation Model)', tools: ["qgis", "affinitydesigner"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_12weekgeochallenge-qgis-affinitydesigner-activity-7251294371403173888-66jI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DBExqugNxYh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/N36W112_SimonKraus.png', alt: 'Stylistic designed Tile N36W112 in North America', tools: ["arcgispro"], linkedin: '', instagram: ''  },
    { src: 'img/projects/map8_elevationMap_elevationOfGermany.jpg', alt: '#12WeekGeoChallenge: Elevation Map of Germany', tools: ["qgis", "blender", "affinitydesigner"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_12weekgeochallenge-qgis-affinitydesigner-activity-7246217183272275970-Ygsj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DAgzJkfoO3A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/map3_localLandmarks_FootballSpectatorsGermany_2324.jpg', alt: '#12WeekGeoChallenge: Map of spectator numbers  of professional football leagues in Germany', tools: ["qgis", "affinitydesigner"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_12weekgeochallenge-bundesliga-microsoftexcel-activity-7233730137702223872-FuBx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/C_IhaKfodWY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/map7_polarRegions.jpg', alt: '#12WeekGeoChallenge: Map of the Polar Regions of the earth', tools: ["qgis", "affinitydesigner"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_12weekgeochallenge-qgis-affinitydesigner-activity-7243688004047839232-5M2b?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DAO7mSoIGQi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/map5_creativeLines_SouthernAlpsOfNewZealand_low.jpg', alt: '#12WeekGeoChallenge: Map of the southern alps of New Zealand', tools: ["qgis", "affinitydesigner"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_12weekgeochallenge-qgis-affinitydesigner-activity-7238788280605945856-5xCf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/C_uuH4toJym/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/map6_adventureRoute_Route66.jpg', alt: '#12WeekGeoChallenge: Map of the famous Route 66', tools: ["qgis", "affinitydesigner"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_12weekgeochallenge-route66-qgis-activity-7241385337342603264-D5uy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/C_-RSGKoA75/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/map9_humanImpact.jpg', alt: '#12WeekGeoChallenge: Map of the tree coverage of the area of amazonia', tools: ["arcgispro", "affinitydesigner"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_12weekgeochallenge-arcgispro-affinitydesigner-activity-7249293692627292160-0AbS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/C_-RSGKoA75/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/map11_airQuality.jpg', alt: '#12WeekGeoChallenge: Map of the earth at night', tools: ["qgis", "affinitydesigner"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_12weekgeochallenge-qgis-affinitydesigner-activity-7254152769740132352-6IKx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DBZDcVmIUIq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
    { src: 'img/projects/Suedamerika.png', alt: 'Topographic map of South America', tools: ["arcgispro"], linkedin: '', instagram: ''  },
    { src: 'img/projects/Sichtbarkeitsanalyse-Antennenmast.png', alt: 'Visibility analysis of an antenna mast', tools: ["arcmap"], linkedin: '', instagram: ''  },
    { src: 'img/projects/Europawahl.jpg', alt: 'Thematic map of the European Parliament elections in Germany 2019', tools: ["arcmap"], linkedin: '', instagram: ''  },
    { src: 'img/projects/Plastikkarte-2019.png', alt: 'Map of global plastic waste 2019', tools: ["qgis"], linkedin: '', instagram: ''  },
    { src: 'img/projects/Plakat_Quartier_IV_V.jpg', alt: 'Poster of a real estate property in Würzburg Hubland', tools: ["autocad", "arcgispro", "3dsmax", "davinciresolve", "affinitypublisher"], linkedin: '', instagram: ''  },
    { src: 'img/projects/BrueckeAufMIZ.jpg', alt: 'Imaginary Visualization of an information centre at the river Main in Knetzgau', tools: ["3dsmax", "unity", "affinitypublisher"], linkedin: '', instagram: ''  },
    { src: 'img/projects/rendering_blue_fertig.jpg', alt: 'Rendering of Nothing Phone (3a) for the Nothing Community Project 2025', tools: ["qgis", "affinitypublisher","affinitydesigner", "blender"], linkedin: 'https://www.linkedin.com/posts/simon-kraus-b476b1239_qgis-affinitypublisher-affinitydesigner-activity-7321125771224231936-DNCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteoCcB3kO6gzDQYIgJP8Xaejjv4_lVfjE', instagram: 'https://www.instagram.com/p/DI07AVvN5RC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='  },
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