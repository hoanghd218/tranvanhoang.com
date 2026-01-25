import { Container, Section } from "@/components/custom/container";

interface LifeHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export function LifeHero({ title, subtitle, description }: LifeHeroProps) {
  return (
    <Section className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative element */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-life-sage/50" />
            <div className="w-2 h-2 rounded-full bg-life-sage" />
            <div className="w-8 h-px bg-life-sage/50" />
          </div>

          {/* Subtitle */}
          <p className="text-sm uppercase tracking-widest text-life-sage font-medium mb-4">
            {subtitle}
          </p>

          {/* Title */}
          <h1 className="heading-serif-lg mb-6 text-foreground">
            {title}
          </h1>

          {/* Description */}
          <p className="body-serif text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Decorative element */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-life-sage/30" />
            <div className="w-2 h-2 rounded-full bg-life-sand" />
            <div className="w-8 h-px bg-life-sage/30" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
