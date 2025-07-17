// src/lib/translations.js

/** @typedef {'en' | 'fr' | 'sp'} Language */

export const translations = {
  en: {
    welcome: {
      title: "Welcome",
      question: "What are you looking for?",
      portfolio: "Portfolio",
      freelance: "Freelance services"
    },
    freelance: {
      title: "Freelance services",
      heroFirstLine: "YOU THINK ABOUT IT",
      heroSecondLine: "I DO THE REST",
      heroCtaText: "Get in Touch",
      aboutName: "César Hernandez",
      aboutTitle: "A bit about me",
      aboutParagraph1: "I am a doctor in Medical Engineering, with experience in R&D projects related to optical imaging, image processing and Deep Learning. I started Web development as a side hustle but it's becoming more of a reality.",
      aboutParagraph2: "In my research, I'm particularly interested in AI solutions applied to imaging (bonus points if it's medical), combining clean code practices and optimisation. As a web developer, I like to create and design web applications and sites with user-centered design to deliver exceptional digital experiences, always adapted to the client's needs.",
      projectsTitle: "Projects",
      project1: {
        heading: "Optical imaging in scattering media",
        details: "Development of Deep Learning algorithms for the reconstruction of 2D laser projections going through a diffusive layer (Doctoral thesis project)"
      },
      project2: {
        heading: "Medical imaging segmentation",
        details: "Development of applications for the display, exploration and segmentation of MRI slices in four different modalities."
      },
      project3: {
        heading: "OCR for scanned documents and images",
        details: "Development of an algorithm capable of recognizing words in scanned documents and image files for easy location and classification."
      },
      project4: {
        heading: "Cell segmentation in microscopy images",
        details: "Development of image processing algorithms for the segmentation of cells in microscopy images for counting and classification purposes."
      },
      project5: {
        heading: "Object detection and tracking with OpenCV",
        details: "Development of applications for the detection and tracking of objects using OpenCV and Python. Trained with YOLOv5 and YOLOv8 models."
      }
    }
  },
  fr: {
    welcome: {
      title: "Bienvenue",
      question: "Qu'est-ce que vous recherchez ?",
      portfolio: "Portfolio",
      freelance: "Services de freelance"
    },
    freelance: {
      title: "Services freelance",
      heroFirstLine: "VOUS Y PENSEZ",
      heroSecondLine: "JE FAIS LE RESTE",
      heroCtaText: "Contactez-moi",
      aboutName: "César Hernandez",
      aboutTitle: "Un peu sur moi",
      aboutParagraph1: "Je suis docteur en Ingénierie Médicale, avec une expérience dans les projets de R&D liés à l'imagerie optique, au traitement d'images et au Deep Learning. J'ai commencé le développement Web comme activité secondaire, mais cela devient de plus en plus une réalité.",
      aboutParagraph2: "Dans ma recherche, je m'intéresse particulièrement aux solutions d'IA appliquées à l'imagerie (bonus si c'est médical), en combinant des pratiques de code propre et d'optimisation. En tant que développeur web, j'aime créer et concevoir des applications et sites web avec un design centré sur l'utilisateur pour offrir des expériences numériques exceptionnelles, toujours adaptées aux besoins du client.",
      projectsTitle: "Projets",
      project1: {
        heading: "Imagerie optique dans des milieux diffusants",
        details: "Développement d'algorithmes de Deep Learning pour la reconstruction de projections laser 2D traversant une couche diffusive (projet de thèse de doctorat)"
      },
      project2: {
        heading: "Segmentation d'images médicales",
        details: "Développement d'applications pour l'affichage, l'exploration et la segmentation de coupes IRM dans quatre modalités différentes."
      },
      project3: {
        heading: "OCR pour documents scannés et images",
        details: "Développement d'un algorithme capable de reconnaître les mots dans les documents scannés et les fichiers d'images pour une localisation et classification faciles."
      },
      project4: {
        heading: "Segmentation cellulaire dans des images de microscopie",
        details: "Développement d'algorithmes de traitement d'images pour la segmentation des cellules dans les images de microscopie à des fins de comptage et de classification."
      },
      project5: {
        heading: "Détection et suivi d'objets avec OpenCV",
        details: "Développement d'applications pour la détection et le suivi d'objets en utilisant OpenCV et Python. Entraîné avec les modèles YOLOv5 et YOLOv8."
      }
    }
  },
  sp: {
    welcome: {
      title: "Bienvenido(a)",
      question: "¿Qué estás buscando?",
      portfolio: "Portafolio",
      freelance: "Servicios de freelance"
    },
    freelance: {
      title: "Services freelance",
      heroFirstLine: "TU PIENSAS EN ELLO",
      heroSecondLine: "YO HAGO EL RESTO",
      heroCtaText: "Contáctame",
      aboutName: "César Hernandez",
      aboutTitle: "Un poco acerca de mí",
      aboutParagraph1: "Soy doctor en Ingeniería Médica, con experiencia en proyectos R&D ligados a la imagenología óptica, al procesamiento de imágenes y al aprentizaje profundo (Deep Learning). Comencé el desarrollo web como una actividad secundaria, pero se ha convertido más y más en una realidad.",
      aboutParagraph2: "En investigación, estoy particularmente interesado en soluciones de IA aplicadas a la imagenología (puntos extra si es médica), combinando buenas prácticas de codage y optimización. Como desarrollador web, me encanta crear y diseñar aplicaciones y sitios web con un diseñocentrado en el usuario para ofrecer experiencias tecnológicas excepcionales, siempre adaptadas a las necesidades del cliente.",
      projectsTitle: "Projectos",
      project1: {
        heading: "Imagenología óptica en medios difusivos",
        details: "Desarrollo de algoritmos de aprentizaje profundo (Deep Learning) para la reconstrucción de proyecciones láser 2D a través de capas difusivas (projecto de tesis de doctorado)"
      },
      project2: {
        heading: "Segmentación de imágenes médicas",
        details: "Desarrollo de aplicaciones para la visualización, exploración y segmentación de cortes de IRM en cuatro modalidades diferentes."
      },
      project3: {
        heading: "OCR en documentos escaneados e imágenes",
        details: "Desarrollo de algoritmos para el reconocimiento de texto en documentos escaneados y archivos de imagen para la localización y clasificación."
      },
      project4: {
        heading: "Segmentación celular en imágenes de microscopio",
        details: "Desarrollo de algoritmos de procesamiento de imágenes para la segmentación de células en imágenes de microscopio para el conteo y clasificación."
      },
      project5: {
        heading: "Detección y seguimiento de objetos con OpenCV",
        details: "Desarrollo de aplicaciones para la detección y el seguimiento de objetos con OpenCV y Python. Entrenamiento con modelos YOLOv5 y YOLOv8."
      }
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