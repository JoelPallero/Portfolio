(function(){
  document.addEventListener("DOMContentLoaded", () => {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith("es") ? "es" : "en"; // Determina si es español o inglés
    setLanguage(lang); // Aplica el idioma al contenido
  });

  function setLanguage(lang) {
    document.documentElement.lang = lang; // Establece el idioma en la etiqueta <html>
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
  }

})();