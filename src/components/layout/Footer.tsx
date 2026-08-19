import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contact, person, services } from "@/content/data/profile";

const SITE_LINKS = [
  { href: "/profile", label: "Profile" },
  { href: "/services", label: "Skills & Domains" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: contact.linkedin, label: "LinkedIn", icon: LinkedInIcon, external: true },
  { href: `mailto:${contact.email}`, label: "Email", icon: Mail, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-10 border-b border-border pb-12 lg:flex-row lg:items-center">
          <div>
            <p className="font-display text-2xl font-semibold text-foreground">
              Let&apos;s build a stronger security program.
            </p>
            <p className="mt-2 max-w-lg text-sm text-muted">
              Open to vCISO engagements, advisory work, and enterprise security
              leadership roles.
            </p>
          </div>
          <Button href="/contact" className="w-fit shrink-0">
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-12 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-y-0">
          <div className="sm:col-span-3 lg:col-span-1">
            <Link
              href="/"
              className="font-display text-lg font-semibold text-foreground"
            >
              Arockia<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted">
              {person.name} · {person.role}, {contact.location}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
              Site
            </p>
            <ul className="space-y-3">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-start gap-2 transition-colors hover:text-accent"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="break-all">{contact.email}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" /> {contact.location}
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {person.name}. All rights reserved.
        </p>
        <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
      </Container>
    </footer>
  );
}
