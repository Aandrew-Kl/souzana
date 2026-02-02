import type { PostBlock } from "@/lib/content"

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("el-GR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date)
}

export function estimateReadingTime(content: PostBlock[]) {
  const words = content
    .map((block) => {
      if (block.type === "list") {
        return block.items.join(" ")
      }
      return block.text
    })
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 220))
  return `${minutes} λεπτά ανάγνωσης`
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/(^-|-$)+/g, "")
}
