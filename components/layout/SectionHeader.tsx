import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "mx-auto max-w-2xl text-center"
      )}
    >
      {eyebrow ? (
        <div className="space-y-3">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            {eyebrow}
          </p>
          <div className="hairline-gold w-24" />
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-[0.02em] text-foreground sm:text-4xl font-serif">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base text-muted-foreground leading-relaxed",
            align === "center" ? "mx-auto max-w-xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
