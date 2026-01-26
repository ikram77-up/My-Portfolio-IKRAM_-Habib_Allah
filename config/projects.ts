import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  title: string;
  companyName?: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  coverImage: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr?: PagesInfoInterface[];
  year?: number;
}

export const Projects: ProjectInterface[] = [
 
  {
    id: "Gestion_De_Cinema",
    title: "Site Web de Gestion de Cinéma",
    companyName: "",
    type: "Academique",
    year: 2021,
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Réalisation d'un site web de gestion de cinéma qui facilite au client de réserver un film dans le cinéma qui veut .",
    websiteLink:
      "https://drive.google.com/file/d/1poD-7Qane6tSytQYsg2ZcyX0Yngu_XEK/view?usp=drive_link",
      githubLink:
      "https://github.com/ikram77-up/Gestion-de-cinema",
    techStack: [ "Java/JEE ","Spring Boot","Spring MVC","Angular","Bootstrap","TypeScript", "Node.js", "MySQL",],
   
    coverImage: "/projects/gestionCineme/couverture.jpg",
    pagesInfoArr: [
      {
        title: "Affichage des Villes",
        description:
          "présentation des interfaces (villes, Cinémas, Salle qui porte Projection qui va porter aussi les Flims et Les Séances et chaque séance porte le time et le prix et chaque prix demande le nom de client et le code de payement pour acheter le ticket pour regarder le films qui est dans chaque Projection",
        imgArr: ["/projects/gestionCineme/img1.jpg"],
      },
      {
        title: "Affichage de cinéma pour chaque ville",
        description:
          "Fonctionnalité permettant aux utilisateurs de télécharger des citations sous forme de belles images pour le partage sur les réseaux sociaux",
        imgArr: [
          "/projects/gestionCineme/img2.jpg"
        ],
      },
      {
        title: "interface d’Affichage des salles",
        description:
          "Gestion du profil utilisateur avec favoris, historique et paramètres de personnalisation",
        imgArr: ["/projects/gestionCineme/img3.jpg",
          "/projects/gestionCineme/img4.jpg"],
      },
      {
        title: "interface pour taper le nom de client et on code de payement",
        description:
          "Interface interactive pour que les utilisateurs sélectionnent et mettent à jour leurs préférences et intérêts de citations",
        imgArr: [
          "/projects/gestionCineme/img5.jpg",
        ],
      },
      {
        title: " affichage d'interface de Ticket est vendu par succès",
        description:
          "Design adaptatif assurant une expérience utilisateur optimale sur diverses tailles d'appareils et orientations",
        imgArr: ["/projects/gestionCineme/img6.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Dans cadre de mon étude Ingénieur Informatique & Réseau Option MIAGE a l’Ecole Marocaine des sciences d’Ingénierie en 2éme semestre on étudier L’architecture JEE et notre prof demandé de réaliser une application web avec architecture JEE Application gestion des Cinémas Back-End avec Freamwork Spring Boot et FrontEnd avec Freamwork Angular (Consultations, Saisie, Ajout, Edition, Mise à jour et suppression) , Gestion des Salles et des Places ,Gestion Films ,Gestion Projection , Gestion des ventes des Tickets",
      ],
      bullets: [],
    },
  },
  {
    id: "mb-digital-business",
    title: " Site Web MB Digital & Business",
    companyName: "MB Digital & Business",
    type: "Professional",
    year: 2025,
    category: ["Web Dev" ,"Full Stack","UI/UX"],
    shortDescription:
      "Ce site web développé avec WordPress pour une entreprise multi-services composé d’un département centre d’appel et d’un département création et développement digital, le site présente les services, le recrutement, les formations, les blogs et un espace de contact avec une navigation claire et un design responsive.",
       websiteLink:
       "https://drive.google.com/file/d/1Ls8hQ3m6kaiXBZXI0qewSySTKf34RQWK/view?usp=drive_link",
    githubLink: "",
    techStack: ["WordPress","CMS","Zakra theme", "Javascript" , "Node.js", "HTML 5", "CSS 3"],
    coverImage: "/projects/MBD/MBD.jpg",
    pagesInfoArr: [
      {
        title: "Écran de Démarrage",
        description: "Écran de démarrage animé personnalisé avec l'image de marque de l'application",
        imgArr: ["/projects/apex/app_7.webp"],
      },
      {
        title: "Authentification Connexion/Inscription",
        description: "Système d'authentification utilisateur sécurisé avec Firebase",
        imgArr: ["/projects/apex/app_1.webp"],
      },
      {
        title: "Écran d'Exploration de Tous les Produits",
        description: "Navigation interactive des produits avec catégories et filtres",
        imgArr: ["/projects/apex/app_3.webp"],
      },
      {
        title: "Panneau d'Administration",
        description:
          "Tableau de bord administratif complet pour la gestion des produits et des commandes",
        imgArr: ["/projects/apex/app_4.webp", "/projects/apex/app_6.webp"],
      },
      {
        title: "Navigation Latérale",
        description: "Navigation latérale intuitive pour une navigation facile dans l'application",
        imgArr: ["/projects/apex/app_5.webp"],
      },
      {
        title: "Base de Données Firebase",
        description:
          "Structure de base de données en temps réel pour une gestion efficace des données",
        imgArr: ["/projects/apex/db.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "L'application Apex Shopping représente une solution complète de commerce électronique mobile que j'ai développée à partir de zéro en utilisant React Native et Firebase. Ce projet met en valeur ma capacité à créer une application de shopping complète avec des fonctionnalités utilisateur et administrateur.",
        "L'application dispose d'un système d'authentification robuste, permettant aux utilisateurs de s'inscrire et de se connecter en toute sécurité. L'interface d'exploration des produits est conçue avec l'expérience utilisateur à l'esprit, intégrant une navigation fluide et des options de filtrage intuitives.",
        "L'un des points forts est le panneau d'administration, qui offre un contrôle complet sur la gestion des produits, le traitement des commandes et le suivi des stocks. L'intégration avec Firebase assure une synchronisation des données en temps réel et une persistance fiable des données.",
        "L'architecture de l'application met l'accent sur l'évolutivité et la performance, utilisant Redux pour la gestion de l'état et suivant les meilleures pratiques pour le développement d'applications mobiles. Le design UI/UX se concentre sur la fourniture d'une expérience d'achat fluide sur différentes tailles d'appareils.",
      ],
      bullets: [
        "Mise en œuvre d'une authentification et autorisation utilisateur sécurisées utilisant Firebase",
        "Conception et développement d'un système intuitif de navigation de produits et de panier d'achat",
        "Création d'un panneau d'administration complet pour la gestion des produits et des commandes",
        "Intégration de la synchronisation des données en temps réel utilisant Firebase Database",
        "Mise en œuvre de la gestion de l'état utilisant Redux pour une performance optimale",
        "Conception de composants UI réactifs suivant les principes mobile-first",
        "Incorporation d'animations et de transitions fluides pour une expérience utilisateur améliorée",
      ],
    },
  },
  {
    id: "kree app",
    title: "Kree App",
    companyName: "KREE",
    type: "Professional",
    year: 2025,
    category: ["Mobile Dev","Full Stack"],
    shortDescription:
      "Application mobile de ",
    websiteLink: "https://blog.builtdesign.in",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Typescript"],
    coverImage: "/projects/kree/cover.jpg",
    pagesInfoArr: [
      {
        title: "Page d'Accueil du Blog",
        description:
          "Page d'accueil moderne et réactive présentant les articles en vedette",
        imgArr: ["/projects/builtdesign-blogs/blog_2.webp"],
      },
      {
        title: "Liste des Blogs",
        description:
          "Affichage organisé de tous les articles de blog avec recherche et filtrage",
        imgArr: ["/projects/builtdesign-blogs/blog_3.webp"],
      },
      {
        title: "Navigation par Catégorie",
        description: "Système de navigation intuitif basé sur les catégories",
        imgArr: ["/projects/builtdesign-blogs/blog_1.webp"],
      },
      {
        title: "Vue de l'Article",
        description:
          "Mise en page d'article propre et lisible avec support multimédia riche",
        imgArr: [
          "/projects/builtdesign-blogs/blog_4.webp",
          "/projects/builtdesign-blogs/blog_5.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Dans le cadre de la plateforme Builtdesign, j'ai développé un site web de blog sophistiqué qui sert de centre de contenu pour le leadership d'opinion et les connaissances de l'industrie de l'entreprise. Le projet a exploité Next.js et React pour créer une plateforme rapide et conviviale pour le SEO.",
        "La plateforme de blog présente un design moderne et réactif qui privilégie la lisibilité et l'engagement des utilisateurs. J'ai mis en œuvre un système de gestion de contenu robuste utilisant Netlify CMS, permettant à l'équipe de contenu de publier et de gérer facilement les articles de blog.",
        "L'architecture comprend le rendu côté serveur pour une performance et un SEO optimaux, tandis que MongoDB fournit un stockage de contenu flexible. TypeScript assure la fiabilité et la maintenabilité du code tout au long de l'application.",
        "Les principales caractéristiques comprennent la navigation basée sur les catégories, la fonctionnalité de recherche et un éditeur de texte riche pour la création de contenu. La plateforme prend en charge divers types de contenu, y compris les images, les extraits de code et les médias intégrés.",
      ],
      bullets: [
        "Développement d'une plateforme de blog moderne utilisant Next.js et React avec TypeScript",
        "Mise en œuvre de Netlify CMS pour une gestion efficace du contenu",
        "Création d'un design réactif qui privilégie la lisibilité et l'engagement des utilisateurs",
        "Construction du rendu côté serveur pour une performance et un SEO optimaux",
        "Intégration de MongoDB pour un stockage et une gestion flexibles du contenu",
        "Développement de la navigation basée sur les catégories et de la fonctionnalité de recherche",
        "Mise en œuvre de capacités d'édition de texte riche pour la création de contenu",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);