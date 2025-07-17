// src/lib/translations.js

/** @typedef {'en' | 'fr' | 'sp'} Language */

export const translations = {
  en: {
    welcome: {
      title: "Welcome",
      question: "What are you looking for?",
      portfolio: "Portfolio",
      freelance: "Freelance services"
    }
  },
  fr: {
    welcome: {
      title: "Bienvenue",
      question: "Qu'est-ce que vous recherchez ?",
      portfolio: "Portfolio",
      freelance: "Services de freelance"
    }
  },
  sp: {
    welcome: {
      title: "Bienvenido(a)",
      question: "¿Qué estás buscando?",
      portfolio: "Portafolio",
      freelance: "Servicios de freelance"
    }
  }
};

/**
 * @param {Language} lang - The language code
 * @returns {typeof translations.fr}
 */
export function getTranslation(lang) {
  return translations[lang] || translations.fr;
}