import Image from "next/image"
import Link from "next/link"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { Button } from "@/components/ui/button"
import { home, teamMembers, pages } from "@/lib/content"

export default function TeamPreview() {
  const profile = pages.team.profile

  return (
    <section className="py-24 sm:py-32">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow={home.teamPreview.eyebrow}
          title={home.teamPreview.title}
          description={home.teamPreview.description}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/50">
              <Image
                src={profile.image.src}
                alt={profile.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-foreground">
                {profile.title}
              </p>
              <p className="text-sm text-muted-foreground">{profile.role}</p>
            </div>
          </div>
          {teamMembers.slice(0, 3).map((member) => (
            <div key={member.name} className="space-y-4">
              {member.image ? (
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/50">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-border/50 bg-muted">
                  <span className="font-serif text-3xl tracking-[0.2em] text-foreground">
                    {member.initials}
                  </span>
                </div>
              )}
              <div>
                <p className="text-base font-semibold text-foreground">
                  {member.name}
                </p>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
        <Button asChild variant="outline" className="h-11">
          <Link href={home.teamPreview.ctaHref}>
            {home.teamPreview.ctaLabel}
          </Link>
        </Button>
      </Container>
    </section>
  )
}
