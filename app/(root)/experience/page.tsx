import { Metadata } from "next"

import PageContainer from "@/components/common/page-container"
import Timeline from "@/components/experience/timeline"
import { experiences } from "@/config/experience"
import { pagesConfig } from "@/config/pages"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: `${pagesConfig.experience.metadata.title} | Chronologie de l'expérience professionnelle`,
  description: `${pagesConfig.experience.metadata.description} Explorez mon parcours professionnel et les étapes de ma carrière dans le développement de logiciels.`,
  keywords: [
    "chronologie de l'expérience",
    "expérience professionnelle",
    "expérience de développeur de logiciels",
    "developer portfolio",
    "expérience de travail",
  ],
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
}

export default function ExperiencePage() {
  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <Timeline experiences={experiences} />
    </PageContainer>
  )
}
