import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/content/data/profile";

export function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="border-t border-border bg-surface-2/40 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Enterprise programs, delivered end to end"
            description="Case studies from cybersecurity transformation, identity programs, and secure product architecture."
          />
          <Button href="/projects" variant="secondary" className="shrink-0">
            View all projects <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <Card key={project.slug} index={i} className="flex flex-col">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
