import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export default function Prose({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("prose", className)} {...props} />
}
