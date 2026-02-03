import Image from "next/image"
import Link from "next/link"
import Container from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { home } from "@/lib/content"

export default function Hero() {
  return (
    <section className="border-b border-accent/20 bg-background">
      <Container className="py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                {home.hero.eyebrow}
              </p>
              <div className="hairline-gold w-28" />
            </div>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-[0.02em] text-foreground sm:text-5xl lg:text-6xl font-serif">
              {home.hero.title}
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg max-w-xl">
              {home.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={home.hero.primaryCta.href}>
                  {home.hero.primaryCta.label}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={home.hero.secondaryCta.href}>
                  {home.hero.secondaryCta.label}
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground max-w-xl">
              {home.hero.trustLine}
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-border/50">
              <Image
                src={home.hero.image.src}
                alt={home.hero.image.alt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
