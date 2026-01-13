import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Ikram Habib Allah's portfolio website.",
    },
  },
  skills: {
    title: " Compétences ",
    description: "Mes compétences professionnelle .",
    metadata: {
      title: "Skills",
      description:
        "Ikram Habib Allah's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projets",
    description: "Présentation de mes projets academiques et professionnelles .",
    metadata: {
      title: "Projects",
      description: "Ikram Habib Allah's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Prenons contact et explorons les possibilités de collaboration..",
    metadata: {
      title: "Contact",
      description: "Contact Ikram Habib Allah.",
    },
  },

  resume: {
    title: "CV ",
    description: "Ikram Habib Allah's resume.",
    metadata: {
      title: "CV",
      description: "Ikram Habib Allah's resume.",
    },
  },
  experience: {
    title: "Expériences ",
    description: "mes expériences Mon parcours profesionnel.",
    metadata: {
      title: "Experiences",
                  description: "Ikram Habib Allah's Mon parcours profesionnel .",
                  },
                },
                formations: {
                  title: "Formations",
                  description: "Mes formations et mes qualifications académiques.",
                  metadata: {
                    title: "Formations",
                    description:
                      "Ikram Habib Allah's educational background and academic qualifications.",
                  },
                },
              };
