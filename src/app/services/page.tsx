import type { Metadata } from "next";
import { Shield, Scale, Lock, Cloud, Radar, Code2, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { services, person } from "@/content/data/profile";
import type { ServiceOffering } from "@/lib/types";

export const metadata: Metadata = {
  title: "Services",
  description: `Cybersecurity leadership and advisory services offered by ${person.name}.`,
};

const iconMap: Record<ServiceOffering["icon"], typeof Shield> = {
  shield: Shield,
  scale: Scale,
  lock: Lock,
  cloud: Cloud,
  radar: Radar,
  code: Code2,
};

export default function ServicesPage() {
  return (
    <div className="pb-24">
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Cybersecurity leadership, on your terms"
            description="From fractional CISO advisory to hands-on Zero Trust and DevSecOps implementation — engagements shaped around what your organization actually needs."
          />
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.slug} index={i} className="flex flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{service.description}</p>
                  <ul className="mt-5 space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="secondary" className="mt-6 self-start">
                    Discuss this
                  </Button>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </div>
  );
}
