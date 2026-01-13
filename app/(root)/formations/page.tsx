import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/formations/timeline";
import { formations } from "@/config/formations";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.formations.metadata.title} | Educational Background`,
  description: `${pagesConfig.formations.metadata.description} Explore my educational background and academic qualifications.`,
  keywords: [
    "education",
    "academic qualifications",
    "formation",
    "developer portfolio",
    "degrees",
  ],
  alternates: {
    canonical: `${siteConfig.url}/formations`,
  },
};

export default function FormationsPage() {
  return (
    <PageContainer
      title={pagesConfig.formations.title}
      description={pagesConfig.formations.description}
    >
      <Timeline formations={formations} />
    </PageContainer>
  );
}
