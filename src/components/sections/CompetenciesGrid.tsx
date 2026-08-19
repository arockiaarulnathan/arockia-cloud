"use client";

import {
  ShieldCheck,
  Scale,
  Boxes,
  Cloud,
  KeyRound,
  Radar,
  Gauge,
  Layers,
  ShieldAlert,
  Users,
  FileCheck2,
  Network,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { StaggerReveal, StaggerItem } from "@/components/motion/StaggerReveal";
import { coreCompetencies } from "@/content/data/profile";

const icons = [
  ShieldCheck,
  Scale,
  Boxes,
  Cloud,
  KeyRound,
  Radar,
  ShieldAlert,
  Gauge,
  Layers,
  Users,
  FileCheck2,
  Network,
];

export function CompetenciesGrid() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-cyan/10 blur-3xl"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Core Competencies"
          title="A track record built across strategy, architecture, and operations"
          description="Twelve areas of focus that consistently show up across every enterprise security program he has led."
        />
        <StaggerReveal className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {coreCompetencies.map((competency, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={competency}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border/60 bg-surface/60 p-5 shadow-lg shadow-black/5 backdrop-blur-xl transition-colors hover:border-accent/50">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {competency}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </Container>
    </section>
  );
}
