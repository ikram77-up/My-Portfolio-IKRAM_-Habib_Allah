import { ValidCategory, ValidExpType, ValidSkills } from "./constants"

interface PagesInfoInterface {
  title: string
  imgArr: string[]
  description?: string
}

interface DescriptionDetailsInterface {
  paragraphs: string[]
  bullets: string[]
}

export interface ProjectInterface {
  id: string
  type: ValidExpType
  title: string
  companyName?: string
  category: ValidCategory[]
  shortDescription: string
  websiteLink?: string
  githubLink?: string
  techStack: ValidSkills[]
  coverImage: any
  descriptionDetails: DescriptionDetailsInterface
  pagesInfoArr?: PagesInfoInterface[]
  year?: number
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
    githubLink: "https://github.com/ikram77-up/Gestion-de-cinema",
    techStack: [
      "Java/JEE ",
      "Spring Boot",
      "Spring MVC",
      "Angular",
      "Bootstrap",
      "TypeScript",
      "Node.js",
      "MySQL",
    ],

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
        imgArr: ["/projects/gestionCineme/img2.jpg"],
      },
      {
        title: "interface d’Affichage des salles",
        description:
          "Gestion du profil utilisateur avec favoris, historique et paramètres de personnalisation",
        imgArr: [
          "/projects/gestionCineme/img3.jpg",
          "/projects/gestionCineme/img4.jpg",
        ],
      },
      {
        title: "interface pour taper le nom de client et on code de payement",
        description:
          "Interface interactive pour que les utilisateurs sélectionnent et mettent à jour leurs préférences et intérêts de citations",
        imgArr: ["/projects/gestionCineme/img5.jpg"],
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
        "Dans le cadre de mon étude Ingénieur Informatique & Réseau Option MIAGE a l’Ecole Marocaine des sciences d’Ingénierie en 2éme semestre on étudier L’architecture JEE et notre prof demandé de réaliser une application web avec architecture JEE Application gestion des Cinémas Back-End avec Freamwork Spring Boot et FrontEnd avec Freamwork Angular (Consultations, Saisie, Ajout, Edition, Mise à jour et suppression) , Gestion des Salles et des Places ,Gestion Films ,Gestion Projection , Gestion des ventes des Tickets",
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
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Ce site web développé avec WordPress pour une entreprise multi-services composé d’un département centre d’appel et d’un département création et développement digital, le site présente les services, le recrutement, les formations, les blogs et un espace de contact avec une navigation claire et un design responsive.",
    websiteLink:
      "https://drive.google.com/file/d/1Ls8hQ3m6kaiXBZXI0qewSySTKf34RQWK/view?usp=drive_link",
    githubLink: "",
    techStack: [
      "WordPress",
      "CMS",
      "Zakra theme",
      "Javascript",
      "Node.js",
      "HTML 5",
      "CSS 3",
    ],
    coverImage: "/projects/MBD/MBD.jpg",
    pagesInfoArr: [
      {
        title: "page Home",
        imgArr: ["/projects/MBD/acceuil.jpg"],
      },
      {
        title: "A propos page de MB Digital & Business",
        imgArr: ["/projects/MBD/Apropos.jpg"],
      },
      {
        title: "page de services digital marketing de MB Digital & Business ",
        imgArr: ["/projects/MBD/digital.jpg"],
      },
      {
        title: "page de services telemarketing de MB Digital & Business ",
        imgArr: ["/projects/MBD/telemaketing.jpg"],
      },
      {
        title: "page des formations de MB Digital & Business ",
        imgArr: ["/projects/MBD/formations.jpg"],
      },
      {
        title: "page des blogs de MB Digital & Business ",
        imgArr: ["/projects/MBD/blogs.jpg"],
      },
      {
        title: "page de contact de MB Digital & Business ",
        imgArr: ["/projects/MBD/contact.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Ce projet porte sur le développement d’un site web professionnel sous WordPress destiné à une entreprise active dans deux secteurs complémentaires : le centre d’appel et le développement de solutions digitales, incluant les sites web et les applications mobiles. La mission consistait à concevoir une plateforme claire, moderne et intuitive, permettant de valoriser l’identité de l’entreprise, de présenter ses services et de mettre en avant ses opportunités de recrutement et de formation. Le site comprend plusieurs rubriques clés telles que À propos, Services, Recrutement, Formations, Blog et Contact, assurant une navigation fluide et une expérience utilisateur optimisée. Ce projet illustre mes compétences en WordPress, structuration de contenus, personnalisation de thèmes, design responsive et création de sites institutionnels orientés visibilité, performance et crédibilité.",
      ],
      bullets: [],
    },
  },
  {
    id: "kree-app",
    title: "Kree App",
    companyName: "KREE",
    type: "Professional",
    year: 2025,
    category: ["Mobile Dev", "Full Stack"],
    shortDescription: "Application mobile de ",
    websiteLink:
      "https://drive.google.com/file/d/10FXbS3wmaU2pdEAnyHxhSo9juJS4WexC/view?usp=drive_link",
    githubLink: "https://github.com/ikram77-up/Kree-App.git",
    techStack: [
      "Node.js",
      "MongoDB",
      "express.js",
      "Javascript",
      "React Native",
    ],
    coverImage: "/projects/kree/cover.jpg",
    pagesInfoArr: [
      {
        title: "Page d'Accueil de l'application Kree",
        imgArr: ["/projects/kree/kree1.jpg"],
      },
      {
        title: "interface d'authentification de users de l'application Kree",
        imgArr: ["/projects/kree/auth.jpg"],
      },
      {
        title: "interface profil d'agence",
        imgArr: ["/projects/kree/agence.jpg"],
      },
      {
        title: "interface agence",
        imgArr: ["/projects/kree/attentrequest.jpg"],
      },
      {
        title: "request envoye par client a agence",
        imgArr: ["/projects/kree/notifclient.jpg"],
      },
      {
        title: "agence a envoye offre a client",
        imgArr: ["/projects/kree/carbyagence.jpg"],
      },
      {
        title: "liste des voitures de l'agence",
        imgArr: ["/projects/kree/listcars.jpg"],
      },
      {
        title: "detail de voiture de l'agence",
        imgArr: ["/projects/kree/deatailcar.jpeg"],
      },
      {
        title: "interface de mise a jour d'une voiture de l'agence",
        imgArr: ["/projects/kree/updatecar.jpg"],
      },
      {
        title: "interface demande de voiture par client",
        imgArr: [
          "/projects/kree/demande.jpg",
          "/projects/kree/demandesuite.jpg",
        ],
      },
      {
        title: "la demande de client envoie en succee a les agences",
        imgArr: ["/projects/kree/demandesuccee.jpg"],
      },
      {
        title: "offre de l'agence a envoye en succee a client",
        imgArr: ["/projects/kree/offreagence.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Dans le cadre de mon formation chez geeks institut j'ai travailler sur un projet reel de client KREE ,ce projet c'est une application mobile  Nommez votre prix  .",
        " Cette application  permet aux clients de fixer le prix qu'ils sont prêts à payer pour une location, tout en offrant aux agences partenaires la possibilité de soumettre des offres compétitives.",
        " l'application KREE fonctionne selon un modèle d'enchères inversées basé sur quatre étapes simples :",
        "Le client propose un prix.",
        " Le voyageur saisit ses dates de location, la catégorie de voiture et le prix qu'il est prêt à payer.",
        " Les agences soumettent des contre-propositions.",
        " Les agences partenaires reçoivent la proposition et répondent avec leurs meilleures offres.",
        " Gestion automatisée des convois pour une logistique de livraison et d'enlèvement efficace .",
        "pour plus de detaills consulter demo ",
      ],
      bullets: [],
    },
  },
  {
    id: "nextraction",
    title: "Nextraction",
    companyName: "",
    type: "Academique",
    year: 2024,
    category: ["Web Dev"],
    shortDescription:
      "Est un mini projet de modele de recherche en Python qui prend en charge la recherche lexicale, la recherche sémantique, la fusion en un classement hybride et une étape de réordonnancement pour comparer les approches et présenter les résultats.",
    websiteLink: "",
    githubLink: "https://github.com/ikram77-up/Nextraction-projet.git",
    techStack: ["Python", "Swagger"],
    coverImage: "/projects/nextraction/cover.jpeg",
    descriptionDetails: {
      paragraphs: [
        "Ce mini projet est un module de recherche et une petite API ou interface de ligne de commande prenant en charge : (1) la recherche lexicale (BM25 ou équivalent), (2) la recherche sémantique (embeddings), (3) la fusion en un classement hybride (par exemple, Reciprocal Rank Fusion), et (4) une étape de réordonnancement (inter-encodeur ou réordonnanceur basé sur un modèle linéaire linéaire). permet de comparer les approches et présenter les résultats",
      ],
      bullets: [],
    },
  },
]

export const featuredProjects = Projects.slice(0, 3)
