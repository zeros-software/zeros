import { cn } from "@/lib/utils"

export function ZerosLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <img src="/icon.svg" alt="" aria-hidden="true" className="size-5" />
      <span className="font-heading text-xl leading-none tracking-tight">
        Zeros
      </span>
    </span>
  )
}
