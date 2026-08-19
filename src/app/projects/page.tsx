import type { Metadata } from "next";
import { Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { projects, person } from "@/content/data/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: `Enterprise cybersecurity and product security case studies led by ${person.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="pb-24">
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Enterprise programs delivered end to end"
            description="These engagements involve confidential enterprise environments — presented here as case studies rather than live links."
          />
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <div className="grid gap-6">
            {projects.map((project, i) => (
              <Card key={project.slug} index={i} className="md:p-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{project.summary}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-muted">
                    <Lock className="h-3.5 w-3.5" /> Confidential engagement
                  </span>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      Challenge
                    </p>
                    <p className="mt-2 text-sm text-muted">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      Approach
                    </p>
                    <p className="mt-2 text-sm text-muted">{project.approach}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm text-muted">{project.outcome}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </div>
  );
}
