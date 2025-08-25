
let translations = {};

function loadLanguage(lang) {
  fetch(`${lang}.json`)
    .then(res => res.json())
    .then(data => {
      translations = data;
      applyTranslations();
      localStorage.setItem('language', lang);
    });
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

function changeLanguage(lang) {
  loadLanguage(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'en';
  loadLanguage(savedLang);
});
