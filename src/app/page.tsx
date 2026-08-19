import { Hero } from "@/components/sections/Hero";
import { CompetenciesGrid } from "@/components/sections/CompetenciesGrid";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CompetenciesGrid />
      <ProjectsPreview />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
