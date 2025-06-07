document.addEventListener('DOMContentLoaded', function() {
  const banner = document.getElementById('cookie-banner');
  if (!localStorage.getItem('cookieConsent')) {
    banner.style.display = 'flex';
  } else if (localStorage.getItem('cookieConsent') === 'accepted') {
    loadGoogleAnalytics();
  }

  document.getElementById('cookie-accept').onclick = function() {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.style.display = 'none';
    loadGoogleAnalytics();
  };

  document.getElementById('cookie-decline').onclick = function() {
    localStorage.setItem('cookieConsent', 'declined');
    banner.style.display = 'none';
    // Optional: Cookies löschen oder Tracking deaktivieren
  };

  function loadGoogleAnalytics() {
    if (!window.googleAnalyticsLoaded) {
      window.googleAnalyticsLoaded = true;
      const script = document.createElement('script');
      script.src = 'js/googleAnalytics.js'; // Pfad zu deiner Datei
      script.async = true;
      document.head.appendChild(script);
    }
  }
});