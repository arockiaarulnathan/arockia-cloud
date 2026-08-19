import type { Metadata } from "next";
import Image from "next/image";
import { Award, GraduationCap, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerReveal, StaggerItem } from "@/components/motion/StaggerReveal";
import { ExperienceTimeline } from "@/components/ui/Timeline";
import { SkillTagGroup, SoftSkillRings } from "@/components/ui/SkillBar";
import {
  awards,
  certifications,
  education,
  experience,
  person,
  previousExperience,
  softSkills,
  summary,
  technicalSkills,
} from "@/content/data/profile";

export const metadata: Metadata = {
  title: "Profile",
  description: `Full profile of ${person.name}: career history, certifications, education, and technical skills.`,
};

export default function ProfilePage() {
  return (
    <div className="pb-24">
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src="/images/avatar.jpg"
              alt={`${person.name} · ${person.role}`}
              width={112}
              height={112}
              className="h-20 w-20 shrink-0 self-center rounded-full border-2 border-accent/40 object-cover sm:h-28 sm:w-28 sm:self-auto"
            />
            <SectionHeading
              eyebrow="Profile"
              title={`${person.name} · ${person.role}`}
              description={person.objective}
            />
          </div>
          <FadeIn delay={0.1} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {summary.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-border/60 bg-surface/60 p-5 shadow-lg shadow-black/5 backdrop-blur-xl text-sm text-muted"
              >
                {point}
              </div>
            ))}
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Career" title="Experience timeline" />
          <div className="mt-12">
            <ExperienceTimeline items={experience} />
          </div>

          <FadeIn className="mt-14">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Previous Experience
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {previousExperience.map((role) => (
                <div
                  key={`${role.company}-${role.start}`}
                  className="rounded-2xl border border-border/60 bg-surface/60 p-5 shadow-lg shadow-black/5 backdrop-blur-xl"
                >
                  <p className="font-medium text-foreground">{role.role}</p>
                  <p className="text-sm text-accent">{role.company}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                    {role.location} · {role.start} - {role.end}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Education"
                title="Academic background"
              />
              <div className="mt-8 space-y-4">
                {education.map((item) => (
                  <div
                    key={item.degree}
                    className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface/60 p-5 shadow-lg shadow-black/5 backdrop-blur-xl"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{item.degree}</p>
                      <p className="text-sm text-muted">{item.school}</p>
                      <p className="text-xs uppercase tracking-wide text-muted">
                        {item.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Credentials" title="Certifications" />
              <div className="mt-8 space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface/60 p-5 shadow-lg shadow-black/5 backdrop-blur-xl"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <BadgeCheck className="h-5 w-5" />
                    </span>
                    <p className="font-medium text-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Recognition" title="Awards & achievements" />
          <StaggerReveal className="mt-8 grid gap-4 sm:grid-cols-2">
            {awards.map((award) => (
              <StaggerItem key={award.title}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border/60 bg-surface/60 p-5 shadow-lg shadow-black/5 backdrop-blur-xl">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{award.title}</p>
                    <p className="text-xs uppercase tracking-wide text-accent">
                      {award.org}
                    </p>
                    <p className="mt-1 text-sm text-muted">{award.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionHeading eyebrow="Technical Skills" title="Tools & technologies" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {technicalSkills.map((group, i) => (
                  <SkillTagGroup key={group.category} index={i} {...group} />
                ))}
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Soft Skills" title="How he leads" />
              <div className="mt-8">
                <SoftSkillRings items={softSkills} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
