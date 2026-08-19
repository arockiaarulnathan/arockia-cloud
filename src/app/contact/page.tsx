import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { contact, person } from "@/content/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${person.name} for vCISO advisory, cybersecurity strategy, or speaking engagements.`,
};

const infoCards = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, "")}` },
  { icon: LinkedInIcon, label: "LinkedIn", value: "arockia-arulnathan", href: contact.linkedin },
  { icon: MapPin, label: "Location", value: contact.location, href: undefined },
];

export default function ContactPage() {
  return (
    <div className="pb-24">
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your security program"
            description="Open to vCISO engagements, advisory work, speaking opportunities, and enterprise security leadership roles."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <FadeIn className="space-y-4">
              {infoCards.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
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
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="block transition-transform hover:-translate-y-0.5"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </FadeIn>

            <FadeIn delay={0.1} className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
