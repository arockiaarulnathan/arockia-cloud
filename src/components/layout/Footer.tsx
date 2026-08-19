import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Container } from "@/components/ui/Container";
import { contact, person } from "@/content/data/profile";

const FOOTER_LINKS = [
  { href: "/profile", label: "Profile" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-10 py-14 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-semibold text-foreground">
            {person.name}
          </p>
          <p className="mt-2 text-sm text-muted">{person.role}</p>
          <p className="mt-4 text-sm text-muted">{contact.location}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              aria-label="Phone"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
              Site
            </p>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>{contact.email}</li>
              <li>{contact.phone}</li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {person.name}. All rights reserved.</p>
        <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
      </Container>
    </footer>
  );
}
