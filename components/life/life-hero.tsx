import { Container, Section } from "@/components/custom/container";

interface LifeHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

/**
 * Life hero. Same void-black ground as the rest of the site, but sits on the
 * dimmer field and uses the quiet end of the ramp (purple-300 / silver) so the
 * section still reads calmer without leaving the system.
 */
export function LifeHero({ title, subtitle, description }: LifeHeroProps) {
  return (
    <Section className="rk-field rk-field-soft py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Eyebrow */}
          <p className="eyebrow mb-[var(--space-4)]">{subtitle}</p>

          {/* Title */}
          <h1 className="heading-serif-lg mb-[var(--space-5)] text-text-primary">{title}</h1>

          {/* Description */}
          <p className="body-serif">{description}</p>

          {/* Trajectory rule — a single hairline, purple at the quiet end */}
          <div
            aria-hidden="true"
            className="mt-[var(--space-7)] h-px w-24 bg-purple-300/40"
          />
        </div>
      </Container>
    </Section>
  );
}
