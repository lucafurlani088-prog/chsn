import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { looks } from "@/lib/lookbook";
import { asset } from "@/lib/media";
import { ChsnMark } from "@/components/Logo";
import { garmentIcons } from "@/components/icons/GarmentIcons";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { fadeUp } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Lookbook — CHSN",
  description: "FW Lookbook — CHSN, worn not staged.",
};

export default function LookbookPage() {
  return (
    <div>
      <div className="border-b border-ink-border px-5 pb-8 pt-14 sm:px-8 sm:pt-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy-bright">
          Fall / Winter
        </p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight sm:text-6xl">
          Lookbook
        </h1>
        <p className="mt-4 max-w-md text-base text-paper-dim">
          Shot on the block, not in a studio. Every look from the current
          collection.
        </p>
      </div>

      <RevealGroup className="grid grid-cols-1 gap-4 px-5 py-14 sm:auto-rows-[16rem] sm:grid-cols-3 sm:gap-5 sm:px-8 sm:py-20">
        {looks.map((look, i) => {
          const Icon = garmentIcons[look.icon];
          const photo = asset(look.image);
          const tileClass =
            "grain relative flex h-full min-h-[16rem] flex-col justify-end overflow-hidden rounded-sm border border-ink-border bg-gradient-to-br p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-bright";

          const body = (
            <>
              {photo ? (
                <>
                  <Image
                    src={photo}
                    alt={`${look.title} — CHSN Fall / Winter lookbook`}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 640px) 66vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Anchors the caption against bright frames — the overline
                      sits high on short tiles, so the scrim has to carry that
                      far up too. */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent"
                  />
                </>
              ) : (
                <>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${look.tone}`}
                    aria-hidden="true"
                  />
                  <ChsnMark className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-auto opacity-[0.05]" />
                  <Icon
                    className="pointer-events-none absolute right-6 top-6 h-16 w-16 text-paper/50 transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1}
                  />
                </>
              )}
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-burgundy-bright [text-shadow:0_1px_10px_rgba(0,0,0,0.9)]">
                  Look {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 font-display text-2xl uppercase leading-none tracking-tight [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
                  {look.title}
                </p>
              </div>
            </>
          );

          return (
            <Reveal
              key={look.id}
              variants={fadeUp}
              className={`group relative ${look.span ?? ""}`}
            >
              {look.slug ? (
                <Link href={`/shop/${look.slug}`} className={tileClass}>
                  {body}
                </Link>
              ) : (
                <div className={tileClass}>{body}</div>
              )}
            </Reveal>
          );
        })}
      </RevealGroup>
    </div>
  );
}
