import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container className="text-center">
        <FadeIn>
          <p className="font-display text-7xl font-semibold text-gradient">404</p>
          <h1 className="mt-4 font-display text-2xl font-semibold text-foreground">
            This page doesn&apos;t exist.
          </h1>
          <p className="mt-3 text-muted">
            The page you&apos;re looking for may have moved or never existed.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/">Back to home</Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
