

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "MBD",
    position: "Responsable Développement d’Applications & Gestion CRM",
    company: "MB Digital & Business",
    location: " oches Noire ,Casablanca , Maroc",
    startDate: new Date("2024-08-28"),
    endDate: new Date("2025-07-10"),
    description: [
      "Gestion du CRM, du reporting, des fichiers de contacts et des outils de gestion de contenu (CMS) ",
      "Création et développement de site web de l’entreprise ‘MB Digital & Business avec Word press ,HTML , CSS , Java Script "
    ],
    achievements: [
      "chargé de la gestion du CRM et des outils de gestion de contenu (CMS), création de  reporting , des fichiers de contacts  chaque jours et contrôler les agents pendant les appels ",
      " Création   de site web de l’entreprise ‘MB Digital & Business avec Word press ,HTML , CSS , Java Script ",
      "Développement de site web de l’entreprise ‘MB Digital & Business avec Word press ,HTML , CSS , Java Script",
    ],
    logo: "/experience/MBD.png",
  },
  {
    id: "dev_java_JEE",
    position: "Stage de fin d’étude en développement web d’un BackOffice",
    company: "MOBIBLANC",
    location: "Sidi Maarouf ,Casablanca ,Maroc",
    startDate: new Date("2022-03-28"),
    endDate: new Date("2022-09-28"),
    description: [
      "Conception et Réalisation des fonctionnalités d’une architecture micro-services pour une implémentation d’un BackOffice de gestion de maintenance des équipement de Client de MOBIBLANC",
    ],
    achievements: [
      "Conception de la solution ( My SQL , sql Workbench , Docker )",
      "Espace admin et utilisateur (Spring Security ,keyclock, intellij IDE )",
      "Gestion des contrats, équipements, prestataires, filtrages de data, import et export des fichiers excel et PDF, Reporting, traiter les anomalies (java 8/11,Architecture microservices ,Spring boot, Spring Cloud hibrnate ,intellij IDE, gitlab)",
      "Participation aux réunions comme Sprint Planning , Sprint Review , Demo(TEIGA )",
    ],
    logo: "/experience/Mobiblanc.png",
  },
  {
    id: "mobile",
    position: "Stage d’été en développement mobile hybrid",
    company: "RED 360",
    location: "Sidi Maaouf ,Casablanca ,Maroc",
    startDate: new Date("2020-07-27"),
    endDate: new Date("2020-08-27"),
    description: [
      "Conception et réalisation d'une application mobile de gestion des recettes ",
    ],
    achievements: [
      "Conception et réalisation de l'application avec (Merise, Fire base , My SQL)",
      "Gestion des recettes et quantités ( IONIC ,Angular ,Android Studio, Git Hub)",
    ],
    logo: "/experience/RED360.png",
  },
  {
    id:"WordPress",
    position  :"Stage de Fin de Formation en développement web",
    company : "RED TIC",
    location : " Sidi Maarouf ,Casablanca ,Maroc ",
    startDate : new Date("2018-12-31"),
    endDate : new Date("2019-02-28"),
    description:[
      "Réalisation d’un site web IHA Agency",
    ],
    achievements:[
      "conception et réalisation de site (Word Press , Wamp,PHP ,MySQL)",
      "Hébergement de site (LWS)",
    ],
    logo : "/experience/REDTIC.png"
  }
 
];
