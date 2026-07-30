import Image from "next/image";
import { ChsnMark } from "@/components/Logo";
import { LinkButton } from "@/components/Button";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { fadeUp } from "@/lib/motion";
import { looks } from "@/lib/lookbook";
import { asset } from "@/lib/media";

/**
 * Panel shapes for the teaser grid. Imagery is pulled from the lookbook manifest
 * in order, so campaign photos surface here as soon as they land — no second
 * list of filenames to keep in sync.
 */
const panels = [
  {
    className: "col-span-2 row-span-2",
    tone: "from-ink-raised via-ink to-burgundy-deep/60",
  },
  {
    className: "col-span-1 row-span-1",
    tone: "from-burgundy-deep/50 via-ink to-ink-raised",
  },
  {
    className: "col-span-1 row-span-1",
    tone: "from-ink-raised via-ink to-[#170f11]",
  },
  {
    className: "col-span-1 row-span-2",
    tone: "from-[#160c0f] via-ink to-ink-raised",
  },
];

export function LookbookTeaser() {
  // Only looks whose photo actually exists, so no panel renders a broken image.
  const shots = looks
    .map((look) => ({ ...look, photo: asset(look.image) }))
    .filter((look) => look.photo);

  return (
    <section className="border-t border-ink-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy-bright">
              FW Lookbook
            </p>
            <h2 className="font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl">
              Worn, Not Staged
            </h2>
          </div>
          <LinkButton href="/lookbook" variant="ghost">
            Full Lookbook
          </LinkButton>
        </Reveal>

        <RevealGroup
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:[grid-template-rows:repeat(2,14rem)] sm:gap-5"
          stagger={0.1}
        >
          {panels.map((panel, i) => {
            const look = shots[i];
            return (
              <Reveal
                key={i}
                variants={fadeUp}
                className={`grain relative overflow-hidden rounded-sm border border-ink-border bg-gradient-to-br ${panel.tone} ${panel.className} aspect-square sm:aspect-auto`}
              >
                {look?.photo ? (
                  <Image
                    src={look.photo}
                    alt={`${look.title} — CHSN Fall / Winter lookbook`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <ChsnMark className="absolute -bottom-6 -right-6 h-32 w-auto opacity-[0.06]" />
                )}
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
