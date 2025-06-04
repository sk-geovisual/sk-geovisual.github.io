const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.main-nav li a');

function setActiveNav() {
    let current = '';
    const scrollPos = window.scrollY + window.innerHeight / 3; // etwas weiter unten triggern

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);
window.addEventListener('DOMContentLoaded', setActiveNav);