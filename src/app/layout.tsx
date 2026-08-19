import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { person, contact } from "@/content/data/profile";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://arockia.cloud";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${person.name} — ${person.role}`,
    template: `%s — ${person.name}`,
  },
  description: person.objective,
  keywords: [
    "CISO",
    "Cybersecurity Leader",
    "vCISO",
    "ISO 27001",
    "Zero Trust",
    "GRC",
    "Cloud Security",
    "IT/OT Security",
  ],
  authors: [{ name: person.name, url: siteUrl }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${person.name} — ${person.role}`,
    description: person.objective,
    siteName: person.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — ${person.role}`,
    description: person.objective,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    url: siteUrl,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.location,
    },
    sameAs: [contact.linkedin],
  };

  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <div id="main-content" className="flex flex-1 flex-col pt-16 sm:pt-20">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
