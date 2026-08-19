import type { Metadata } from "next";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { contact, person } from "@/content/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${person.name} for vCISO advisory, cybersecurity strategy, or speaking engagements.`,
};

const secondaryInfo = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "arockia-arulnathan",
    href: contact.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: contact.location,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-cyan/15 blur-3xl"
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your security program"
            description="Open to vCISO engagements, advisory work, speaking opportunities, and enterprise security leadership roles. Email is the fastest way to reach me."
          />

          <FadeIn delay={0.1} className="mx-auto mt-12 max-w-xl">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-surface/70 via-surface/70 to-accent-soft/70 p-8 text-center shadow-lg shadow-black/5 backdrop-blur-xl sm:p-12">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Mail className="h-6 w-6" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-muted">
                Email
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 inline-block break-all font-display text-xl font-semibold text-foreground transition-colors hover:text-accent sm:text-2xl"
              >
                {contact.email}
              </a>
              <p className="mx-auto mt-4 max-w-sm text-sm text-muted">
                I typically respond within 1–2 business days.
              </p>
              <Button href={`mailto:${contact.email}`} className="mt-8">
                Send an email <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {secondaryInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-surface/60 p-5 shadow-lg shadow-black/5 backdrop-blur-xl">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-transform hover:-translate-y-0.5"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
