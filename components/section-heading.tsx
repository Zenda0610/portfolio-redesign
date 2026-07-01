import { cn } from "@/lib/utils"

type Props = {
  kicker: string
  title: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({ kicker, title, align = "left", className }: Props) {
  return (
    <div className={cn("mb-10 flex flex-col gap-3 md:mb-14", align === "center" && "items-center text-center", className)}>
      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
        <span className="h-px w-6 bg-primary" aria-hidden="true" />
        {kicker}
      </span>
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">{title}</h2>
    </div>
  )
}
