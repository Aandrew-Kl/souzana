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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-serif">
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
