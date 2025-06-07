document.addEventListener('DOMContentLoaded', function() {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');
  const consent = localStorage.getItem('cookieConsent');

  // Banner nur anzeigen, wenn noch keine Entscheidung getroffen wurde
  if (!consent) {
    banner.style.display = 'flex';
  } else {
    banner.style.display = 'none';
    if (consent === 'accepted') {
      loadGoogleAnalytics();
    }
  }

  acceptBtn.onclick = function() {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.style.display = 'none';
    loadGoogleAnalytics();
  };

  declineBtn.onclick = function() {
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