import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { LinkButton } from "@/components/Button";
import { fadeIn, scaleIn } from "@/lib/motion";

export function Manifesto() {
  return (
    <section className="border-t border-ink-border bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal
          variants={scaleIn}
          className="relative aspect-[4/5] overflow-hidden rounded-sm border border-ink-border bg-ink-raised"
        >
          <Image
            src="/products/tracksuit.webp"
            alt="CHSN Signature Tracksuit, laid flat"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal variants={fadeIn}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy-bright">
            The House
          </p>
          <h2 className="font-display text-3xl uppercase leading-[0.95] tracking-tight sm:text-4xl lg:text-5xl">
            We don&apos;t chase trends.
            <br />
            We outlast them.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper-dim sm:text-lg">
            CHSN started as a rejection of disposable fashion — heavyweight
            fabrics, small production runs, and a single mark worn by people
            who make their own choices. Every piece is built to be lived in
            for years, not one season.
          </p>
          <div className="mt-8">
            <LinkButton href="/about" variant="ghost">
              Read Our Story
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
