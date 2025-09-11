// src/lib/translations.js

/** @typedef {'en' | 'fr' | 'sp'} Language */

export const translations = {
    fr: {
        titlePage: "César Aha",
        construction: {
            title: "Site en construction",
            lookingText: "Vous cherchez le portfolio ? Cliquez",
            clickHere: "ici",
            hireText: "Si vous souhaitez engager mes services, veuillez me contacter par email à"
        },
        navigation: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            firstLine: "De l’idée au lancement et au-delà,",
            secondLine: "je donne vie à vos projets.",
            cta1: "Explorer les projets",
            cta2: "Contactez-moi"
        },
        about: {
            name: "César Hernandez",
            title: "À propos de moi",
            paragraph1: "Je suis docteur en Ingénierie Médicale, avec une expérience dans les projets de R&D liés à l'imagerie optique, au traitement d'images et au Deep Learning. Également, je fais du développement Web.",
            paragraph2: "Dans ma recherche, je m'intéresse particulièrement aux solutions d'IA appliquées à l'imagerie (bonus si c'est médical), en combinant des pratiques de code propre et d'optimisation. En tant que développeur web, j'aime créer et concevoir des applications et sites web avec un design centré sur l'utilisateur pour offrir des expériences numériques exceptionnelles, toujours adaptées aux besoins du client.",
            studiesTitle: "Formations",
            studies1: {
                heading: "Licence en Ingénierie Médicale",
                placeAndDate: "Sinaloa, Mexique | Sep 2014 - Jan 2018",
                details: "Axée sur le développement de prototypes en utilisant des compétences en électronique, mécanique et programmation."
            },
            studies2: {
                heading: "Doctorat en Ingénierie Médicale et Diplôme en R&D",
                placeAndDate: "Londres, Royaume-Uni | Oct 2019 - Avr 2025",
                details: "Développement de systèmes d'imagerie optique en utilisant des méthodes de reconstruction conventionnelles, des algorithmes d'optimisation et du Deep Learning."
            },
            experienceTitle: "Expériences professionnelles",
            experience1: {
                heading: "Chercheur en doctorat",
                placeAndDate: "Queen Mary University of London | Oct 2019 - Avr 2025",
                details: "Imagerie optique, Deep Learning pour la reconstruction d'images avec Python, Tensorflow et Keras."
            },
            experience2: {
                heading: "Chargé de travaux pratiques",
                placeAndDate: "Queen Mary University of London | Sep 2021 - Août 2023",
                details: "Enseignement et tutorat en Mathématiques, Physique, Électronique et programmation Python pour les étudiants de premier cycle."
            },
            experience3: {
                heading: "Ingénieur R&D",
                placeAndDate: "Tecnológico de Monterrey | Août 2017 - Jan 2018",
                details: "Développement d'un système de suivi oculaire en utilisant C# et VS Code."
            }
        },
        skills: {
            title: "Compétences",
            nameSection1: "Développement scientifique",
            nameSection2: "Bibliothèques (Python)",
            nameSection3: "Développement d'applications et web (Langages)",
            nameSection4: "Développement d'applications et web (Frameworks et autres outils)"
        },
        projects: {
            title: "Projets",
            project1: {
                heading: "Imagerie optique dans des milieux diffusants",
                details: "Modèles de Deep Learning pour la reconstruction d'objets derrière des milieux diffusants (thèse de doctorat)",
                description: "Développement d'algorithmes de Deep Learning pour la reconstruction de projections laser 2D traversant une couche diffusive (projet de thèse de doctorat)"
            },
            project2: {
                heading: "Site portfolio développé avec Svelte et Vite",
                details: "Site personnel créé avec Svelte dans VS Code, déployé via GitHub et hébergé sur Netlify",
                description: "Site portfolio personnel développé avec Svelte dans VS Code, déployé via GitHub et mis à jour automatiquement sur Netlify à chaque commit."
            },
            project3: {
                heading: "Generateur IA d'exercices mathematiques",
                details: "Plateforme de génération de contenu mathématique, avec suivi des performances et exercices adaptatifs.",
                description: "Application conçue pour une expérience personnalisée de l’élève, basée sur son niveau, son temps de réflexion et ses erreurs récurrentes. Moteur : Python - Backend : FastAPI - Frontend : Svelte"
            },
            project4: {
                heading: "OCR pour documents scannés et images",
                details: "Algorithmes de reconnaissance optique de caractères pour images et documents numérisés",
                description: "Développement d'un algorithme capable de reconnaître les mots dans les documents scannés et les fichiers d'images pour une localisation et classification faciles."
            },
            project5: {
                heading: "Segmentation cellulaire dans des images de microscopie",
                details: "Algorithmes de traitement d'image pour la segmentation cellulaire dans des images de microscopie",
                description: "Développement d'algorithmes de traitement d'images pour la segmentation des cellules dans les images de microscopie à des fins de comptage et de classification."
            },
            project6: {
                heading: "Détection et suivi d'objets avec OpenCV",
                details: "Détection et suivi d'objets dans des vidéos à l'aide d'OpenCV et de Python",
                description: "Développement d'applications pour la détection et le suivi d'objets en utilisant OpenCV et Python. Entraîné avec les modèles YOLOv5 et YOLOv8."
            },
            project7: {
                heading: "Segmentation d'images médicales",
                details: "Visualisation, exploration et segmentation de coupes d'IRM",
                description: "Développement d'applications pour l'affichage, l'exploration et la segmentation de coupes IRM dans quatre modalités différentes."
            }
        },
        readMore: "Afficher plus",
        viewOnGithub: "Voir sur GitHub",
        contact: {
            title: "Contactez-moi!",
            description: "Je serais ravi d’avoir de vos nouvelles ! Que vous ayez une question, que vous souhaitiez discuter d’un projet ou simplement dire bonjour, n’hésitez pas à me contacter.",
            tags: {
                name: "Nom complet",
                email: "Email",
                phone: "Téléphone",
                optional: "(Optional)",
                service: "Service",
                specify: "Veuillez préciser",
                message: "Message"
            },
            dropdown: {
                option1: "Sélectionnez une option...",
                option2: "Projets R&D",
                option3: "Développement d'applications",
                option4: "Création des sites web",
                option5: "Cours particuliers",
                option6: "Autre"
            },
            placeholder: {
                name: "Entrez votre nom complet",
                email: "Entrez votre address email",
                phone: "Entrez votre numéro de téléphone",
                specify: "Veuillez fournir une description générale de votre demande",
                message: "Veuillez fournir une description détaillée de votre demande"
            },
            errors: {
                field: "Ce champ est requis",
                validEmail: "Veuillez entrer une address e-mail valide",
                service: "Veuillez sélectionner un service",
            },
            characters: "caractères",
            button: {
                always: "Envoyer",
                sending: "En train d'envoyer..."
            },
            submit: {
                success: "Message envoyé avec succès ! Je vous répondrai bientôt.",
                error: "Désolé, une erreur est survenue lors de l’envoi de votre message. Veuillez réessayer."
            }
        },
        termsOfUse: {
            title: "Conditions d'utilisation",
            
            purpose: {
                subtitle: "Objet",
                content: "Les présentes conditions générales d'utilisation ont pour objet de définir les modalités et conditions d'utilisation du site c-aha.com, ainsi que les droits et obligations dans ce cadre."
            },
            
            siteAccess: {
                subtitle: "Accès au site",
                content: "L'accès au site est gratuit et ouvert à tous. Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge."
            },
            
            siteUsage: {
                subtitle: "Utilisation du site",
                content: "L'utilisateur s'engage à utiliser le site de manière loyale et conformément à sa destination. Il est interdit :",
                prohibitions: [
                    "D'utiliser le site à des fins illégales ou non autorisées",
                    "De tenter de perturber le fonctionnement du site",
                    "De copier, reproduire ou distribuer le contenu sans autorisation",
                    "D'usurper l'identité d'autrui"
                ]
            },
            
            intellectualProperty: {
                subtitle: "Propriété intellectuelle",
                content: "Le contenu du site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable."
            },
            
            responsibility: {
                subtitle: "Responsabilité",
                content: "César Hernandez Alvarez s'efforce de fournir des informations exactes et à jour, mais ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive."
            },
            
            personalData: {
                subtitle: "Données personnelles",
                content: "Le traitement des données personnelles est régi par notre",
                linkText: "Politique de Confidentialité",
                additionalContent: ". Droit applicable Les présentes conditions sont soumises au droit français. Tout litige sera de la compétence exclusive des tribunaux français."
            },
            
            termsModification: {
                subtitle: "Modification des conditions",
                content: "Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prennent effet dès leur publication sur le site."
            }
        },
        privacyPolicy: {
            title: "Politique de confidentialité",
            
            dataController: {
                subtitle: "Responsable du traitement des données",
                responsible: "Responsable",
                responsibleName: "César HERNANDEZ ALVAREZ",
                status: "Statut",
                statusValue: "Entrepreneur individuel (EI)",
                contact: "Contact",
                contactEmail: "c.aha.contact@gmail.com"
            },
            
            dataCollection: {
                subtitle: "Données collectées et finalités",
                
                contactForm: {
                    subtitle: "Formulaire de contact",
                    dataCollected: "Données collectées",
                    dataTypes: "Nom, numéro de téléphone, adresse email, message",
                    purpose: "Finalité",
                    purposeText: "Répondre à vos demandes de contact et vous fournir les informations demandées",
                    legalBasis: "Base légale",
                    legalBasisText: "Consentement (article 6.1.a du RGPD)",
                    retention: "Durée de conservation",
                    retentionText: "Les données sont conservées le temps nécessaire pour traiter votre demande, puis supprimées dans un délai maximum de 3 ans"
                },
                
                cookiesNavigation: {
                    subtitle: "Cookies et données de navigation",
                    dataCollected: "Données collectées",
                    dataTypes: "Adresse IP, type de navigateur, pages visitées",
                    purpose: "Finalité",
                    purposeText: "Assurer le bon fonctionnement du site et analyser son utilisation",
                    legalBasis: "Base légale",
                    legalBasisText: "Intérêt légitime (article 6.1.f du RGPD)",
                    retention: "Durée de conservation",
                    retentionText: "13 mois maximum"
                }
            },
            
            dataUsage: {
                subtitle: "Utilisation des données",
                intro: "Vos données personnelles sont uniquement utilisées pour :",
                purposes: [
                    "Répondre à vos demandes via le formulaire de contact",
                    "Assurer le bon fonctionnement technique du site",
                    "Respecter nos obligations légales"
                ],
                weDoNot: "Nous ne :",
                prohibitions: [
                    "Vendons jamais vos données à des tiers",
                    "Utilisons vos données à des fins commerciales non sollicitées",
                    "Envoyons de newsletters sans votre consentement explicite"
                ]
            },
            
            dataSharing: {
                subtitle: "Partage des données",
                intro: "Vos données ne sont partagées avec aucun tiers, excepté :",
                exceptions: [
                    "Notre hébergeur dans le cadre technique du fonctionnement du site",
                    "Les autorités compétentes si la loi l'exige"
                ]
            },
            
            gdprRights: {
                subtitle: "Vos droits (RGPD)",
                intro: "Conformément au Règlement Général sur la Protection des Données, vous disposez des droits suivants :",
                rights: [
                    "Droit d'accès : obtenir une copie des données vous concernant",
                    "Droit de rectification : corriger des données inexactes",
                    "Droit à l'effacement : demander la suppression de vos données",
                    "Droit à la limitation : limiter le traitement de vos données",
                    "Droit à la portabilité : récupérer vos données dans un format structuré",
                    "Droit d'opposition : vous opposer au traitement de vos données"
                ],
                exerciseRights: "Pour exercer ces droits :",
                contactText: "contactez-nous à c.aha.contact@gmail.com."
            },
            
            complaints: {
                subtitle: "Réclamation",
                intro: "Vous avez le droit de déposer une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :",
                website: "Site web :",
                websiteUrl: "https://www.cnil.fr",
                address: "Adresse :",
                addressText: "3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07",
                phone: "Téléphone",
                phoneNumber: "01 53 73 22 22"
            }
        },
        legalNotices: {
            title: "Mentions legales",
            
            siteEditor: {
                subtitle: "Informations sur l'éditeur du site",
                name: "Nom",
                nameValue: "César HERNANDEZ ALVAREZ",
                status: "Statut",
                statusValue: "Entrepreneur individuel (EI)",
                phone: "Téléphone",
                phoneValue: "+33 6 77 51 42 90",
                email: "Email",
                emailValue: "c.aha.contact@gmail.com",
                siret: "SIRET",
                siretValue: "98834237400010"
            },
            
            publicationDirector: {
                subtitle: "Directeur de la publication",
                director: "Directeur de la publication",
                directorName: "César HERNANDEZ ALVAREZ",
                contact: "Contact",
                contactEmail: "c.aha.contact@gmail.com"
            },
            
            hosting: {
                subtitle: "Hébergement du site",
                host: "Hébergeur",
                hostName: "Netlify",
                hostAddress: "Adresse de l'hébergeur",
                hostAddressValue: "512 2nd Street, Suite 200 San Francisco, CA 94107",
                hostPhone: "Téléphone de l'hébergeur",
                hostPhoneValue: "+1 844-899-7312",
                hostEmail: "E-mail de l'hébergeur",
                hostEmailValue: "support@netlify.com"
            },
            
            intellectualProperty: {
                subtitle: "Propriété intellectuelle",
                content: "L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quelconque est formellement interdite sauf autorisation expresse du directeur de la publication."
            }
        },
        cookieManagement: {
            title: "Gestion des cookies",
            
            whatIsCookie: {
                subtitle: "Qu'est-ce qu'un cookie ?",
                content: "Un cookie est un petit fichier texte stocké sur votre appareil lors de la visite d'un site web. Il permet de mémoriser des informations sur votre navigation."
            },
            
            cookieTypes: {
                subtitle: "Types de cookies utilisés",
                
                strictlyNecessary: {
                    subtitle: "Cookies strictement nécessaires",
                    content: "Ces cookies sont indispensables au fonctionnement du site. Ils ne nécessitent pas votre consentement.",
                    examples: "Exemples :",
                    examplesList: [
                        "Cookies de session pour maintenir votre connexion",
                        "Cookies de sécurité pour prévenir les attaques"
                    ]
                },
                
                analytics: {
                    subtitle: "Cookies de mesure d'audience",
                    content: "Ces cookies nous permettent d'analyser l'utilisation du site pour l'améliorer.",
                    purpose: "Finalité",
                    purposeText: "Statistiques anonymes de fréquentation",
                    duration: "Durée",
                    durationText: "13 mois maximum",
                    consent: "Consentement",
                    consentText: "Requis"
                }
            },
            
            preferencesManagement: {
                subtitle: "Gestion de vos préférences",
                content: "Vous pouvez accepter ou refuser les cookies non essentiels via le bandeau qui apparaît lors de votre première visite."
            },
            
            browserSettings: {
                subtitle: "Paramétrage de votre navigateur",
                intro: "Vous pouvez configurer votre navigateur pour :",
                options: [
                    "Être averti avant qu'un cookie soit enregistré",
                    "Refuser systématiquement les cookies",
                    "Supprimer les cookies existants"
                ],
                browserInstructions: {
                    subtitle: "Instructions par navigateur :",
                    chrome: "Chrome",
                    chromeInstructions: "Menu > Paramètres > Confidentialité et sécurité > Cookies et autres données de sites",
                    firefox: "Firefox",
                    firefoxInstructions: "Menu > Options > Vie privée et sécurité > Cookies et données de sites",
                    safari: "Safari",
                    safariInstructions: "Préférences > Confidentialité",
                    edge: "Edge",
                    edgeInstructions: "Menu > Paramètres > Cookies et autorisations de site"
                }
            },
            
            contact: {
                subtitle: "Contact",
                content: "Pour toute question concernant notre politique de cookies, contactez-nous à :",
                email: "c.aha.contact@gmail.com"
            }
        }
    },
    en: {
        titlePage: "César Aha",
        construction: {
            title: "Site under construction",
            lookingText: "Looking for the portfolio? Click",
            clickHere: "here",
            hireText: "If you wish to hire my services, please contact me via email at"
        },
        navigation: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            firstLine: "From concept to launch and beyond,",
            secondLine: "I help your ideas come alive.",
            cta1: "Explore projects",
            cta2: "Get in touch"
        },
        about: {
            name: "César Hernandez",
            title: "A bit about me",
            paragraph1: "I am a doctor in Medical Engineering, with experience in R&D projects related to optical imaging, image processing and Deep Learning. I also do web development.",
            paragraph2: "In my research, I'm particularly interested in AI solutions applied to imaging (bonus points if it's medical), combining clean code practices and optimisation. As a web developer, I like to create and design web applications and sites with user-centered design to deliver exceptional digital experiences, always adapted to the client's needs.",
            studiesTitle: "Studies",
            studies1: {
                heading: "BS in Medical Engineering",
                placeAndDate: "Sinaloa, Mexico | Sep 2014 - Jan 2018",
                details: "Focused in the development of prototyping by using electronics, mechanics and programming skills."
            },
            studies2: {
                heading: "PhD in Medical Engineering and Diploma in R&D",
                placeAndDate: "London, United Kingdom | Oct 2019 - Apr 2025",
                details: "Development of optical imaging systems by using conventional reconstruction methods, optimisation algorithms and Deep Learning."
            },
            experienceTitle: "Professional Experiences",
            experience1: {
                heading: "PhD Researcher",
                placeAndDate: "Queen Mary University of London | Oct 2019 - Apr 2025",
                details: "Optical imaging, Deep Learning for the reconstruction of images with Python, Tensorflow and Keras."
            },
            experience2: {
                heading: "Laboratory Demonstrator",
                placeAndDate: "Queen Mary University of London | Sep 2021 - Aug 2023",
                details: "Teaching and tutoring for Math, Physics, Electronics and Python programming to undergraduate students."
            },
            experience3: {
                heading: "R&D Engineer",
                placeAndDate: "Tecnológico de Monterrey | Aug 2017 - Jan 2018",
                details: "Development of an eyetracking system by using C# and VS Code."
            }
        },
        skills: {
            title: "Skills",
            nameSection1: "Scientific Development",
            nameSection2: "Libraries (Python)",
            nameSection3: "App & web development (Languages)",
            nameSection4: "App & web development (Frameworks and other tools)"
        },
        projects: {
            title: "Projects",
            project1: {
                heading: "Optical imaging in scattering media",
                details: "Deep Learning models for the reconstruction of objects behind scattering media (PhD thesis)",
                description: "Development of Deep Learning algorithms for the reconstruction of 2D laser projections going through a diffusive layer (Doctoral thesis project)"
            },
            project2: {
                heading: "Portfolio website using Svelte and Vite",
                details: "Personal website built using Svelte in VS Code, deployed by GitHub and hosted by Netlify",
                description: "Personal portfolio website built with Svelte in VS Code, deployed via GitHub and automatically updated on Netlify with each commit."
            },
            project3: {
                heading: "AI math generator",
                details: "Platform for practicing mathematical operations with performance tracker and adaptive exercises",
                description: "App designed for the personalised experience of the student, based on level, time of reflexion and recurrent mistakes. Engine: Python - Backend: FastAPI - Frontend: Svelte"
            },
            project4: {
                heading: "OCR for scanned documents and images",
                details: "Optical Character Recognition algorithms for images and scanned documents",
                description: "Development of an algorithm capable of recognizing words in scanned documents and image files for easy location and classification."
            },
            project5: {
                heading: "Cell segmentation in microscopy images",
                details: "Image processing algorithms for cell segmentation in microscopy images",
                description: "Development of image processing algorithms for the segmentation of cells in microscopy images for counting and classification purposes."
            },
            project6: {
                heading: "Object detection and tracking with OpenCV",
                details: "Detection and tracking of objects in video data by using OpenCV and Python",
                description: "Development of applications for the detection and tracking of objects using OpenCV and Python. Trained with YOLOv5 and YOLOv8 models."
            },
            project7: {
                heading: "Medical imaging segmentation",
                details: "Visualization, exploration and segmentation of MRI slices",
                description: "Development of applications for the display, exploration and segmentation of MRI slices in four different modalities."
            }
        },
        readMore: "Read more",
        viewOnGithub: "View on GitHub",
        contact: {
            title: "Get in touch!",
            description: "I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out.",
            tags: {
                name: "Full name",
                email: "Email",
                phone: "Phone number",
                optional: "(Optional)",
                service: "Service",
                specify: "Please specify",
                message: "Message"
            },
            dropdown: {
                option1: "Please select an option...",
                option2: "R&D projects",
                option3: "App development",
                option4: "Website creation",
                option5: "Private classes",
                option6: "Other"
            },
            placeholder: {
                name: "Enter your full name",
                email: "Enter your email address",
                phone: "Enter your phone number",
                specify: "Please provide a general description of your request",
                message: "Please provide a detailed description of your request"
            },
            errors: {
                field: "This field is required",
                validEmail: "Please enter a valid email address",
                service: "Please select a service",
            },
            characters: "characters",
            button: {
                always: "Send message",
                sending: "Sending..."
            },
            submit: {
                success: "Message sent successfully! I'll get back to you soon.",
                error: "Sorry, there was an error sending your message. Please try again."
            }
        },
        termsOfUse: {
            title: "Terms of Use",
            
            purpose: {
                subtitle: "Purpose",
                content: "These general terms of use are intended to define the terms and conditions of use of the c-aha.com website, as well as the rights and obligations in this context."
            },
            
            siteAccess: {
                subtitle: "Site Access",
                content: "Access to the site is free and open to all. All costs incurred by the user to access the service (computer equipment, software, Internet connection, etc.) are at their expense."
            },
            
            siteUsage: {
                subtitle: "Site Usage",
                content: "The user undertakes to use the site fairly and in accordance with its intended purpose. It is prohibited:",
                prohibitions: [
                    "To use the site for illegal or unauthorized purposes",
                    "To attempt to disrupt the functioning of the site",
                    "To copy, reproduce or distribute content without authorization",
                    "To impersonate others"
                ]
            },
            
            intellectualProperty: {
                subtitle: "Intellectual Property",
                content: "The content of the site (texts, images, videos, etc.) is protected by copyright. Any reproduction, even partial, is prohibited without prior authorization."
            },
            
            responsibility: {
                subtitle: "Responsibility",
                content: "César Hernandez Alvarez strives to provide accurate and up-to-date information, but cannot guarantee the accuracy, completeness or timeliness of the information disseminated. The user acknowledges using this information at their own exclusive responsibility."
            },
            
            personalData: {
                subtitle: "Personal Data",
                content: "The processing of personal data is governed by our",
                linkText: "Privacy Policy",
                additionalContent: ". Applicable Law These conditions are subject to French law. Any dispute will be under the exclusive jurisdiction of French courts."
            },
            
            termsModification: {
                subtitle: "Terms Modification",
                content: "We reserve the right to modify these terms at any time. Modifications take effect upon their publication on the site."
            }
        },
        privacyPolicy: {
            title: "Privacy Policy",
            
            dataController: {
                subtitle: "Data Processing Controller",
                responsible: "Responsible",
                responsibleName: "César HERNANDEZ ALVAREZ",
                status: "Status",
                statusValue: "Individual Entrepreneur (EI)",
                contact: "Contact",
                contactEmail: "c.aha.contact@gmail.com"
            },
            
            dataCollection: {
                subtitle: "Data Collected and Purposes",
                
                contactForm: {
                    subtitle: "Contact Form",
                    dataCollected: "Data collected",
                    dataTypes: "Name, phone number, email address, message",
                    purpose: "Purpose",
                    purposeText: "To respond to your contact requests and provide you with the requested information",
                    legalBasis: "Legal basis",
                    legalBasisText: "Consent (article 6.1.a of GDPR)",
                    retention: "Retention period",
                    retentionText: "Data is kept for the time necessary to process your request, then deleted within a maximum period of 3 years"
                },
                
                cookiesNavigation: {
                    subtitle: "Cookies and Navigation Data",
                    dataCollected: "Data collected",
                    dataTypes: "IP address, browser type, pages visited",
                    purpose: "Purpose",
                    purposeText: "To ensure proper functioning of the site and analyze its usage",
                    legalBasis: "Legal basis",
                    legalBasisText: "Legitimate interest (article 6.1.f of GDPR)",
                    retention: "Retention period",
                    retentionText: "13 months maximum"
                }
            },
            
            dataUsage: {
                subtitle: "Data Usage",
                intro: "Your personal data is only used to:",
                purposes: [
                    "Respond to your requests via the contact form",
                    "Ensure proper technical functioning of the site",
                    "Comply with our legal obligations"
                ],
                weDoNot: "We do not:",
                prohibitions: [
                    "Ever sell your data to third parties",
                    "Use your data for unsolicited commercial purposes",
                    "Send newsletters without your explicit consent"
                ]
            },
            
            dataSharing: {
                subtitle: "Data Sharing",
                intro: "Your data is not shared with any third parties, except:",
                exceptions: [
                    "Our hosting provider within the technical framework of site operation",
                    "Competent authorities if required by law"
                ]
            },
            
            gdprRights: {
                subtitle: "Your Rights (GDPR)",
                intro: "In accordance with the General Data Protection Regulation, you have the following rights:",
                rights: [
                    "Right of access: obtain a copy of data concerning you",
                    "Right of rectification: correct inaccurate data",
                    "Right to erasure: request deletion of your data",
                    "Right to restriction: limit the processing of your data",
                    "Right to portability: retrieve your data in a structured format",
                    "Right to object: object to the processing of your data"
                ],
                exerciseRights: "To exercise these rights:",
                contactText: "contact us at c.aha.contact@gmail.com."
            },
            
            complaints: {
                subtitle: "Complaints",
                intro: "You have the right to file a complaint with the National Commission for Information Technology and Civil Liberties (CNIL):",
                website: "Website:",
                websiteUrl: "https://www.cnil.fr",
                address: "Address:",
                addressText: "3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07",
                phone: "Phone",
                phoneNumber: "01 53 73 22 22"
            }
        },
        legalNotices: {
            title: "Legal Notices",
            
            siteEditor: {
                subtitle: "Information about the site editor",
                name: "Name",
                nameValue: "César HERNANDEZ ALVAREZ",
                status: "Status",
                statusValue: "Individual Entrepreneur (EI)",
                phone: "Phone",
                phoneValue: "+33 6 77 51 42 90",
                email: "Email",
                emailValue: "c.aha.contact@gmail.com",
                siret: "SIRET",
                siretValue: "98834237400010"
            },
            
            publicationDirector: {
                subtitle: "Publication Director",
                director: "Publication Director",
                directorName: "César HERNANDEZ ALVAREZ",
                contact: "Contact",
                contactEmail: "c.aha.contact@gmail.com"
            },
            
            hosting: {
                subtitle: "Site Hosting",
                host: "Host",
                hostName: "Netlify",
                hostAddress: "Host Address",
                hostAddressValue: "512 2nd Street, Suite 200 San Francisco, CA 94107",
                hostPhone: "Host Phone",
                hostPhoneValue: "+1 844-899-7312",
                hostEmail: "Host Email",
                hostEmailValue: "support@netlify.com"
            },
            
            intellectualProperty: {
                subtitle: "Intellectual Property",
                content: "This entire site falls under French and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations. The reproduction of all or part of this site on any electronic medium is strictly prohibited except with express authorization from the publication director."
            }
        },
        cookieManagement: {
            title: "Cookie Management",
            
            whatIsCookie: {
                subtitle: "What is a cookie?",
                content: "A cookie is a small text file stored on your device when visiting a website. It allows information about your browsing to be remembered."
            },
            
            cookieTypes: {
                subtitle: "Types of cookies used",
                
                strictlyNecessary: {
                    subtitle: "Strictly necessary cookies",
                    content: "These cookies are essential for the website to function. They do not require your consent.",
                    examples: "Examples:",
                    examplesList: [
                        "Session cookies to maintain your connection",
                        "Security cookies to prevent attacks"
                    ]
                },
                
                analytics: {
                    subtitle: "Audience measurement cookies",
                    content: "These cookies allow us to analyze site usage to improve it.",
                    purpose: "Purpose",
                    purposeText: "Anonymous traffic statistics",
                    duration: "Duration",
                    durationText: "13 months maximum",
                    consent: "Consent",
                    consentText: "Required"
                }
            },
            
            preferencesManagement: {
                subtitle: "Managing your preferences",
                content: "You can accept or refuse non-essential cookies via the banner that appears during your first visit."
            },
            
            browserSettings: {
                subtitle: "Browser configuration",
                intro: "You can configure your browser to:",
                options: [
                    "Be warned before a cookie is saved",
                    "Systematically refuse cookies",
                    "Delete existing cookies"
                ],
                browserInstructions: {
                    subtitle: "Instructions by browser:",
                    chrome: "Chrome",
                    chromeInstructions: "Menu > Settings > Privacy and security > Cookies and other site data",
                    firefox: "Firefox",
                    firefoxInstructions: "Menu > Options > Privacy & Security > Cookies and Site Data",
                    safari: "Safari",
                    safariInstructions: "Preferences > Privacy",
                    edge: "Edge",
                    edgeInstructions: "Menu > Settings > Cookies and site permissions"
                }
            },
            
            contact: {
                subtitle: "Contact",
                content: "For any questions regarding our cookie policy, contact us at:",
                email: "c.aha.contact@gmail.com"
            }
        }
    },
    sp: {
        titlePage: "César Aha",
        construction: {
            title: "Sitio en construcción",
            lookingText: "¿Buscas el portafolio? Haz clic",
            clickHere: "aquí",
            hireText: "Si deseas contratar mis servicios, por favor contáctame por email a"
        },
        navigation: {
            home: "Inicio",
            about: "Acerca de",
            skills: "Habilidades",
            projects: "Projectos",
            contact: "Contacto"
        },
        hero: {
            firstLine: "Desde la idea hasta el lanzamiento y más allá,",
            secondLine: "le doy vida a tus projectos.",
            cta1: "Explorar projectos",
            cta2: "Contáctame"
        },
        about: {
            name: "César Hernandez",
            title: "Un poco acerca de mí",
            paragraph1: "Soy doctor en Ingeniería Biomédica, con experiencia en proyectos R&D ligados a la imagenología óptica, al procesamiento de imágenes y al aprentizaje profundo (Deep Learning). También me dedico al desarrollo web.",
            paragraph2: "En investigación, estoy particularmente interesado en soluciones de IA aplicadas a la imagenología (puntos extra si es médica), combinando buenas prácticas de codage y optimización. Como desarrollador web, me encanta crear y diseñar aplicaciones y sitios web con un diseñocentrado en el usuario para ofrecer experiencias tecnológicas excepcionales, siempre adaptadas a las necesidades del cliente.",
            studiesTitle: "Educación",
            studies1: {
                heading: "Licenciatura en Ingeniería Biomédica",
                placeAndDate: "Sinaloa, México | Sep 2014 - Ene 2018",
                details: "Enfocada en el desarrollo de prototipos utilizando habilidades de electrónica, mecánica y programación."
            },
            studies2: {
                heading: "Doctorado en Ingeniería Médica y Diploma en I+D",
                placeAndDate: "Londres, Reino Unido | Oct 2019 - Abr 2025",
                details: "Desarrollo de sistemas de imagenología óptica utilizando métodos de reconstrucción convencionales, algoritmos de optimización y Deep Learning."
            },
            experienceTitle: "Experiencias Profesionales",
            experience1: {
                heading: "Investigador de Doctorado",
                placeAndDate: "Queen Mary University of London | Oct 2019 - Abr 2025",
                details: "Imagenología óptica, Deep Learning para la reconstrucción de imágenes con Python, Tensorflow y Keras."
            },
            experience2: {
                heading: "Demostrador de Laboratorio",
                placeAndDate: "Queen Mary University of London | Sep 2021 - Ago 2023",
                details: "Enseñanza y tutoría en Matemáticas, Física, Electrónica y programación en Python para estudiantes de pregrado."
            },
            experience3: {
                heading: "Ingeniero de I+D",
                placeAndDate: "Tecnológico de Monterrey | Ago 2017 - Ene 2018",
                details: "Desarrollo de un sistema de seguimiento ocular utilizando C# y VS Code."
            }
        },
        skills: {
            title: "Habilidades",
            nameSection1: "Desarrollo científico",
            nameSection2: "Librerías (Python)",
            nameSection3: "Desarrollo de aplicaciones y web (Lenguajes)",
            nameSection4: "Desarrollo de aplicaciones y web (Frameworks y otras herramientas)"
        },
        projects: {
            title: "Projectos",
            project1: {
                heading: "Imagenología óptica en medios difusivos",
                details: "Modelos de Deep Learning para la reconstrucción de objetos detrás de medios difusivos (tesis doctoral)",
                description: "Desarrollo de algoritmos de aprentizaje profundo (Deep Learning) para la reconstrucción de proyecciones láser 2D a través de capas difusivas (projecto de tesis de doctorado)"
            },
            project2: {
                heading: "Sitio web de portafolio usando Svelte y Vite",
                details: "Sitio web personal creado con Svelte en VS Code, desplegado mediante GitHub y alojado en Netlify",
                description: "Sitio web de portafolio personal desarrollado con Svelte en VS Code, desplegado a través de GitHub y actualizado automáticamente en Netlify con cada commit."
            },
            project3: {
                heading: "Generador IA de operaciones matemáticas",
                details: "Plataforma para practicar operaciones matemáticas con seguimiento del rendimiento y ejercicios adaptativos",
                description: "Aplicación diseñada para una experiencia personalizada del estudiante, basada en su nivel, tiempo de reflexión y errores recurrentes. Motor: Python - Backend: FastAPI - Frontend: Svelte"
            },
            project4: {
                heading: "OCR en documentos escaneados e imágenes",
                details: "Algoritmos de reconocimiento óptico de caracteres para imágenes y documentos escaneados",
                description: "Desarrollo de algoritmos para el reconocimiento de texto en documentos escaneados y archivos de imagen para la localización y clasificación."
            },
            project5: {
                heading: "Segmentación celular en imágenes de microscopio",
                details: "Algoritmos de procesamiento de imágenes para la segmentación celular en imágenes de microscopía",
                description: "Desarrollo de algoritmos de procesamiento de imágenes para la segmentación de células en imágenes de microscopio para el conteo y clasificación."
            },
            project6: {
                heading: "Detección y seguimiento de objetos con OpenCV",
                details: "Detección y seguimiento de objetos en archivos de video utilizando OpenCV y Python",
                description: "Desarrollo de aplicaciones para la detección y el seguimiento de objetos con OpenCV y Python. Entrenamiento con modelos YOLOv5 y YOLOv8."
            },
            project7: {
                heading: "Segmentación de imágenes médicas",
                details: "Visualización, exploración y segmentación de cortes de RM",
                description: "Desarrollo de aplicaciones para la visualización, exploración y segmentación de cortes de IRM en cuatro modalidades diferentes."
            }
        },
        readMore: "Ver más",
        viewOnGithub: "Ver en GitHub",
        contact: {
            title: "Contáctame!",
            description: "¡Me encantaría leerte! Ya sea que tengas una pregunta, quieras hablar sobre un proyecto o simplemente saludar, no dudes en ponerte en contacto conmigo.",
            tags: {
                name: "Nombre completo",
                email: "E-mail",
                phone: "Número de teléfono",
                optional: "(Opcional)",
                service: "Servicio",
                specify: "Por favor especifica",
                message: "Mensaje"
            },
            dropdown: {
                option1: "Por favor elije una opción...",
                option2: "Proyectos I+D",
                option3: "Desarrollo de aplicaciones",
                option4: "Creación de sitions web",
                option5: "Cursos particulares",
                option6: "Otro"
            },
            placeholder: {
                name: "Ingresa tu nombre completo",
                email: "Ingresa tu e-mail",
                phone: "Ingresa tu número de teléfono",
                specify: "Por favor proporciona una descripción general de tu solicitud",
                message: "Por favor proporciona una descripción detallada de tu solicitud"
            },
            errors: {
                field: "Este campo es obligatorio",
                validEmail: "Por favor ingresa una dirección de correo electrónico válida",
                service: "Por favor elije un servicion"
            },
            characters: "caracteres",
            button: {
                always: "Enviar",
                sending: "Enviando..."
            },
            submit: {
                success: "¡Mensaje enviado! Te responderé pronto.",
                error: "Lo siento, ha habido un error al enviar tu mensaje. Por favor intenta de nuevo."
            }
        },
        termsOfUse: {
            title: "Términos de Uso",
            
            purpose: {
                subtitle: "Objeto",
                content: "Los presentes términos generales de uso tienen por objeto definir las modalidades y condiciones de uso del sitio c-aha.com, así como los derechos y obligaciones en este marco."
            },
            
            siteAccess: {
                subtitle: "Acceso al Sitio",
                content: "El acceso al sitio es gratuito y abierto a todos. Todos los gastos en los que incurra el usuario para acceder al servicio (equipo informático, software, conexión a Internet, etc.) corren a su cargo."
            },
            
            siteUsage: {
                subtitle: "Uso del Sitio",
                content: "El usuario se compromete a utilizar el sitio de manera leal y conforme a su destino. Está prohibido:",
                prohibitions: [
                    "Utilizar el sitio con fines ilegales o no autorizados",
                    "Intentar perturbar el funcionamiento del sitio",
                    "Copiar, reproducir o distribuir el contenido sin autorización",
                    "Usurpar la identidad de otros"
                ]
            },
            
            intellectualProperty: {
                subtitle: "Propiedad Intelectual",
                content: "El contenido del sitio (textos, imágenes, videos, etc.) está protegido por derechos de autor. Cualquier reproducción, incluso parcial, está prohibida sin autorización previa."
            },
            
            responsibility: {
                subtitle: "Responsabilidad",
                content: "César Hernandez Alvarez se esfuerza por proporcionar información precisa y actualizada, pero no puede garantizar la exactitud, integridad o actualidad de la información difundida. El usuario reconoce utilizar esta información bajo su exclusiva responsabilidad."
            },
            
            personalData: {
                subtitle: "Datos Personales",
                content: "El tratamiento de datos personales se rige por nuestra",
                linkText: "Política de Privacidad",
                additionalContent: ". Derecho Aplicable Estas condiciones están sujetas al derecho francés. Cualquier disputa será de la jurisdicción exclusiva de los tribunales franceses."
            },
            
            termsModification: {
                subtitle: "Modificación de los Términos",
                content: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entran en vigor tras su publicación en el sitio."
            }
        },
        privacyPolicy: {
            title: "Política de Privacidad",
            
            dataController: {
                subtitle: "Responsable del Tratamiento de Datos",
                responsible: "Responsable",
                responsibleName: "César HERNANDEZ ALVAREZ",
                status: "Estado",
                statusValue: "Empresario Individual (EI)",
                contact: "Contacto",
                contactEmail: "c.aha.contact@gmail.com"
            },
            
            dataCollection: {
                subtitle: "Datos Recopilados y Finalidades",
                
                contactForm: {
                    subtitle: "Formulario de Contacto",
                    dataCollected: "Datos recopilados",
                    dataTypes: "Nombre, número de teléfono, dirección de correo electrónico, mensaje",
                    purpose: "Finalidad",
                    purposeText: "Responder a sus solicitudes de contacto y proporcionarle la información solicitada",
                    legalBasis: "Base legal",
                    legalBasisText: "Consentimiento (artículo 6.1.a del RGPD)",
                    retention: "Período de conservación",
                    retentionText: "Los datos se conservan el tiempo necesario para procesar su solicitud, luego se eliminan en un plazo máximo de 3 años"
                },
                
                cookiesNavigation: {
                    subtitle: "Cookies y Datos de Navegación",
                    dataCollected: "Datos recopilados",
                    dataTypes: "Dirección IP, tipo de navegador, páginas visitadas",
                    purpose: "Finalidad",
                    purposeText: "Asegurar el buen funcionamiento del sitio y analizar su uso",
                    legalBasis: "Base legal",
                    legalBasisText: "Interés legítimo (artículo 6.1.f del RGPD)",
                    retention: "Período de conservación",
                    retentionText: "13 meses máximo"
                }
            },
            
            dataUsage: {
                subtitle: "Uso de los Datos",
                intro: "Sus datos personales solo se utilizan para:",
                purposes: [
                    "Responder a sus solicitudes a través del formulario de contacto",
                    "Asegurar el buen funcionamiento técnico del sitio",
                    "Cumplir con nuestras obligaciones legales"
                ],
                weDoNot: "No:",
                prohibitions: [
                    "Vendemos nunca sus datos a terceros",
                    "Utilizamos sus datos para fines comerciales no solicitados",
                    "Enviamos boletines informativos sin su consentimiento explícito"
                ]
            },
            
            dataSharing: {
                subtitle: "Compartir Datos",
                intro: "Sus datos no se comparten con terceros, excepto:",
                exceptions: [
                    "Nuestro proveedor de alojamiento dentro del marco técnico del funcionamiento del sitio",
                    "Las autoridades competentes si la ley lo exige"
                ]
            },
            
            gdprRights: {
                subtitle: "Sus Derechos (RGPD)",
                intro: "De acuerdo con el Reglamento General de Protección de Datos, usted tiene los siguientes derechos:",
                rights: [
                    "Derecho de acceso: obtener una copia de los datos que le conciernen",
                    "Derecho de rectificación: corregir datos inexactos",
                    "Derecho al olvido: solicitar la eliminación de sus datos",
                    "Derecho a la limitación: limitar el procesamiento de sus datos",
                    "Derecho a la portabilidad: recuperar sus datos en un formato estructurado",
                    "Derecho de oposición: oponerse al procesamiento de sus datos"
                ],
                exerciseRights: "Para ejercer estos derechos:",
                contactText: "contáctenos en c.aha.contact@gmail.com."
            },
            
            complaints: {
                subtitle: "Reclamaciones",
                intro: "Tiene derecho a presentar una reclamación ante la Comisión Nacional de Informática y Libertades (CNIL):",
                website: "Sitio web:",
                websiteUrl: "https://www.cnil.fr",
                address: "Dirección:",
                addressText: "3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07",
                phone: "Teléfono",
                phoneNumber: "01 53 73 22 22"
            }
        },
        legalNotices: {
            title: "Avisos Legales",
            
            siteEditor: {
                subtitle: "Información sobre el editor del sitio",
                name: "Nombre",
                nameValue: "César HERNANDEZ ALVAREZ",
                status: "Estado",
                statusValue: "Empresario Individual (EI)",
                phone: "Teléfono",
                phoneValue: "+33 6 77 51 42 90",
                email: "Email",
                emailValue: "c.aha.contact@gmail.com",
                siret: "SIRET",
                siretValue: "98834237400010"
            },
            
            publicationDirector: {
                subtitle: "Director de Publicación",
                director: "Director de publicación",
                directorName: "César HERNANDEZ ALVAREZ",
                contact: "Contacto",
                contactEmail: "c.aha.contact@gmail.com"
            },
            
            hosting: {
                subtitle: "Alojamiento del Sitio",
                host: "Proveedor de alojamiento",
                hostName: "Netlify",
                hostAddress: "Dirección del proveedor",
                hostAddressValue: "512 2nd Street, Suite 200 San Francisco, CA 94107",
                hostPhone: "Teléfono del proveedor",
                hostPhoneValue: "+1 844-899-7312",
                hostEmail: "Email del proveedor",
                hostEmailValue: "support@netlify.com"
            },
            
            intellectualProperty: {
                subtitle: "Propiedad Intelectual",
                content: "Todo este sitio está sujeto a la legislación francesa e internacional sobre derechos de autor y propiedad intelectual. Todos los derechos de reproducción están reservados, incluyendo documentos descargables y representaciones iconográficas y fotográficas. La reproducción total o parcial de este sitio en cualquier soporte electrónico está estrictamente prohibida salvo autorización expresa del director de publicación."
            }
        },
        cookieManagement: {
            title: "Gestión de Cookies",
            
            whatIsCookie: {
                subtitle: "¿Qué es una cookie?",
                content: "Una cookie es un pequeño archivo de texto almacenado en su dispositivo al visitar un sitio web. Permite recordar información sobre su navegación."
            },
            
            cookieTypes: {
                subtitle: "Tipos de cookies utilizadas",
                
                strictlyNecessary: {
                    subtitle: "Cookies estrictamente necesarias",
                    content: "Estas cookies son esenciales para el funcionamiento del sitio. No requieren su consentimiento.",
                    examples: "Ejemplos:",
                    examplesList: [
                        "Cookies de sesión para mantener su conexión",
                        "Cookies de seguridad para prevenir ataques"
                    ]
                },
                
                analytics: {
                    subtitle: "Cookies de medición de audiencia",
                    content: "Estas cookies nos permiten analizar el uso del sitio para mejorarlo.",
                    purpose: "Finalidad",
                    purposeText: "Estadísticas anónimas de tráfico",
                    duration: "Duración",
                    durationText: "13 meses máximo",
                    consent: "Consentimiento",
                    consentText: "Requerido"
                }
            },
            
            preferencesManagement: {
                subtitle: "Gestión de sus preferencias",
                content: "Puede aceptar o rechazar las cookies no esenciales a través del banner que aparece durante su primera visita."
            },
            
            browserSettings: {
                subtitle: "Configuración de su navegador",
                intro: "Puede configurar su navegador para:",
                options: [
                    "Ser advertido antes de que se guarde una cookie",
                    "Rechazar sistemáticamente las cookies",
                    "Eliminar las cookies existentes"
                ],
                browserInstructions: {
                    subtitle: "Instrucciones por navegador:",
                    chrome: "Chrome",
                    chromeInstructions: "Menú > Configuración > Privacidad y seguridad > Cookies y otros datos de sitios",
                    firefox: "Firefox",
                    firefoxInstructions: "Menú > Opciones > Privacidad y Seguridad > Cookies y Datos del Sitio",
                    safari: "Safari",
                    safariInstructions: "Preferencias > Privacidad",
                    edge: "Edge",
                    edgeInstructions: "Menú > Configuración > Cookies y permisos del sitio"
                }
            },
            
            contact: {
                subtitle: "Contacto",
                content: "Para cualquier pregunta sobre nuestra política de cookies, contáctenos en:",
                email: "c.aha.contact@gmail.com"
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