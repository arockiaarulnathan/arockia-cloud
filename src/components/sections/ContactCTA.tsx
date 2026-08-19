import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function ContactCTA() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <FadeIn className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-surface/70 via-surface/70 to-accent-soft/70 p-10 text-center shadow-lg shadow-black/5 backdrop-blur-xl sm:p-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Need a security leader who can turn strategy into results?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Whether it&apos;s a vCISO engagement, a Zero Trust rollout, or ISO 27001
            certification, let&apos;s talk about what your organization needs.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
