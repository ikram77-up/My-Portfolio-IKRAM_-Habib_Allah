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
  startDate: Date;
  endDate: Date;
  coverImage: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr?: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
 
  {
    id: "the-super-quotes",
    title: "Application The Super Quotes",
    companyName: "The Super Quotes",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack"],
    shortDescription:
      "Amélioration de l'application The Super Quotes avec JavaScript, React Native, des API, la magie de Redux et des débuts sur le Google Play Store.",
    websiteLink:
      "https://play.google.com/store/apps/details?id=com.thesuperlife",
    techStack: ["React Native", "Node.js", "MongoDB", "Javascript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    coverImage: "/projects/superquotes/logo.png",
    pagesInfoArr: [
      {
        title: "Page de Visualisation des Citations",
        description:
          "Affichage de citations élégamment conçu avec des thèmes personnalisables et des options de partage",
        imgArr: ["/projects/superquotes/app_2.webp"],
      },
      {
        title: "Composant de Téléchargement de Citations",
        description:
          "Fonctionnalité permettant aux utilisateurs de télécharger des citations sous forme de belles images pour le partage sur les réseaux sociaux",
        imgArr: [
          "/projects/superquotes/app_4.webp",
          "/projects/superquotes/app_7.webp",
        ],
      },
      {
        title: "Gestion de Compte",
        description:
          "Gestion du profil utilisateur avec favoris, historique et paramètres de personnalisation",
        imgArr: ["/projects/superquotes/app_6.webp"],
      },
      {
        title: "Page de Sélection et Mise à Jour des Intérêts",
        description:
          "Interface interactive pour que les utilisateurs sélectionnent et mettent à jour leurs préférences et intérêts de citations",
        imgArr: [
          "/projects/superquotes/app_1.webp",
          "/projects/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsivité",
        description:
          "Design adaptatif assurant une expérience utilisateur optimale sur diverses tailles d'appareils et orientations",
        imgArr: ["/projects/superquotes/app_5.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "S'aventurer dans le monde de la créativité chez The Super Quotes a été un voyage exaltant. En tant que développeur passionné, j'ai mené la charge dans la création d'une application convaincante de la conception à l'achèvement, utilisant le duo dynamique de JavaScript et React Native.",
        "Le cœur de ma réalisation résidait dans l'intégration transparente des API, tissant une tapisserie de flux de données qui a propulsé la fonctionnalité de l'application vers de nouveaux sommets.",
        "Avec la magie de Redux, j'ai chorégraphié une symphonie de gestion d'état et d'optimisation des performances, orchestrant un ballet de réactivité qui a séduit les utilisateurs à chaque interaction.",
        "Un crescendo m'attendait alors que je dévoilais l'aboutissement de mon travail sur la grande scène du Google Play Store. Les débuts de l'application ont marqué une époque, ouvrant les portes à un large public désireux d'embrasser le charme de The Super Quotes.",
      ],
      bullets: [
        "Direction du développement de bout en bout d'une application captivante utilisant JavaScript et React Native.",
        "Champion de l'intégration des API, harmonisant le flux de données et améliorant la fonctionnalité de l'application.",
        "Réalisation de la magie Redux pour assurer la gestion de l'état et optimiser les performances, offrant une expérience utilisateur fascinante.",
        "Lancement de l'application sur le Google Play Store, capturant les cœurs et élargissant sa base d'utilisateurs.",
      ],
    },
  },
  {
    id: "apex-shopping",
    title: "Application Shopping Apex",
    companyName: "Apex Shopping",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack"],
    shortDescription:
      "Développement d'une application mobile de shopping riche en fonctionnalités avec panneau d'administration, authentification utilisateur et gestion transparente des produits utilisant React Native et Firebase.",
    githubLink: "https://github.com/ikram77-up/apex-shopping-app",
    techStack: ["React Native", "Javascript", "Redux", "Node.js", "express.js"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    coverImage: "/projects/apex/logo.png",
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
    id: "builtdesign-blogs",
    title: "Blogs Builtdesign",
    companyName: "Builtdesign",
    type: "Professional",
    category: ["Full Stack"],
    shortDescription:
      "Création du site web vibrant de blogs de Builtdesign utilisant Netlify CMS et React pour des expériences de contenu engageantes.",
    websiteLink: "https://blog.builtdesign.in",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Typescript"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    coverImage: "/projects/builtdesign-blogs/logo.png",
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