import { ChsnMark } from "@/components/Logo";

export function Marquee({ text }: { text: string }) {
  const items = Array.from({ length: 8 });
  return (
    <div className="overflow-hidden border-y border-ink-border bg-ink py-5">
      <div className="flex w-max animate-marquee items-center gap-10">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center gap-10" aria-hidden={group === 1}>
            {items.map((_, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-10 font-display text-2xl uppercase tracking-wide text-paper-dim sm:text-3xl"
              >
                {text}
                <ChsnMark className="h-5 w-auto" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
