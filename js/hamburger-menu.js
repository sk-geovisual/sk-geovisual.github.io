const mainNav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const visibility = mainNav.getAttribute("data-visible");
    if (visibility === "false") {
        mainNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        mainNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

// Menü schließen, wenn außerhalb geklickt wird
document.addEventListener("click", (e) => {
    const visibility = mainNav.getAttribute("data-visible");
    if (visibility === "true" && !mainNav.contains(e.target) && e.target !== navToggle) {
        mainNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});