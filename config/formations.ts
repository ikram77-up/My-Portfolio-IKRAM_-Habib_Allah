export interface FormationInterface {
  id: string
  degree: string
  school: string
  startDate: Date
  endDate: Date | "Present" | "En cours"
  description: string[]
  logo?: string
}

export const formations: FormationInterface[] = [
  {
    id: "bac",
    degree: "Baccalauréat en Sciences physique",
    school: "LYCÉE LMSALLA",
    startDate: new Date("2016-09-06"),
    endDate: new Date("2017-07-10"),
    description: [],
    logo: "/formations/Lmsalla.png",
  },
  {
    id: "technicien",
    degree: "Diplôme en Technicienne Spécialise en développement informatique",
    school: "OFPPT CFMONTIC ISTA INTIC 1",
    startDate: new Date("2017-09-10"),
    endDate: new Date("2019-06-21"),
    description: [],
    logo: "/formations/ISTA.png",
  },
  {
    id: "ingenieur",
    degree: "Diplôme en Ingénieur Informatique & Réseau Option MIAGE",
    school: "École marocaine des sciences de l'ingénieur(EMSI)",
    startDate: new Date("2019-09-21"),
    endDate: new Date("2022-09-15"),
    description: [],
    logo: "/formations/emsi.png",
  },
  {
    id: "fullstack",
    degree: "Formation en développement Full Stack",
    school: "Geeks Institut La Startup Station",
    startDate: new Date("2025-08-11"),
    endDate: "En cours",
    description: [],
    logo: "/formations/GI.png",
  },
]
