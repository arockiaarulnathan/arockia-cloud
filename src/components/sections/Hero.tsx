"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";
import { person, certifications } from "@/content/data/profile";

const headline = "Securing enterprises through strategy, governance, and Zero Trust.";

const stats = [
  { value: 13, suffix: "+", label: "Years in Cybersecurity" },
  { value: 6, suffix: "", label: "Leadership Roles" },
  { value: certifications.length, suffix: "", label: "Certifications" },
  { value: 5, suffix: "", label: "Flagship Programs" },
];

export function Hero() {
  const words = headline.split(" ");

  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 24, 0], x: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-6rem] top-1/3 h-80 w-80 rounded-full bg-cyan/20 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-accent backdrop-blur"
            >
              {person.role} · {person.location}
            </motion.p>

            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.05 }}
                  className={
                    word.includes("Zero") || word.includes("Trust.")
                      ? "text-gradient inline-block"
                      : "inline-block"
                  }
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 max-w-2xl text-base text-muted sm:text-lg"
            >
              {person.objective}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button href="/profile">
                View Profile <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Get in Touch
              </Button>
              <a
                href="/resume/Arockia_Arulnathan_CV.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-cyan opacity-30 blur-2xl" />
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-full bg-gradient-to-br from-accent to-cyan p-[3px]"
              >
                <div className="rounded-full bg-background p-1.5">
                  <Image
                    src="/images/avatar.jpg"
                    alt={`${person.name} — ${person.role}`}
                    width={288}
                    height={288}
                    priority
                    className="h-48 w-48 rounded-full object-cover sm:h-60 sm:w-60 lg:h-72 lg:w-72"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
