import type { Metadata } from "next";
import { ChsnMark } from "@/components/Logo";
import { LinkButton } from "@/components/Button";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { fadeUp } from "@/lib/motion";

export const metadata: Metadata = {
  title: "About — CHSN",
  description: "The story behind CHSN — chosen, not given.",
};

const values = [
  {
    title: "Small Runs",
    body: "Every drop is produced in limited quantities. When it sells out, it doesn't come back the same way twice.",
  },
  {
    title: "Real Weight",
    body: "480gsm fleece, brushed twill, matte ripstop. Nothing in the line is built to feel disposable.",
  },
  {
    title: "One Mark",
    body: "A single burgundy mark, placed with intent. No noise, no filler graphics.",
  },
];

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Drops / year", value: "4" },
  { label: "Units per run", value: "< 500" },
  { label: "Country", value: "Made abroad" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="grain relative overflow-hidden border-b border-ink-border px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <ChsnMark
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-[26rem] w-auto text-white/[0.035]"
          bg="transparent"
        />
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy-bright">
            About CHSN
          </p>
          <h1 className="max-w-3xl font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl">
            Chosen, not given.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper-dim sm:text-lg">
            CHSN was built for people who picked their own path — cut from
            heavyweight fabric, produced in small runs, and finished with a
            single mark that means something to the people wearing it.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="font-display text-3xl uppercase leading-[1.05] tracking-tight text-paper sm:text-4xl">
          &ldquo;We started CHSN because everything on the rack felt like it
          was made to be replaced. We wanted to make the opposite — pieces
          that earn a place in rotation and stay there.&rdquo;
        </Reveal>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-paper-dim">
          — CHSN Founders
        </p>
      </section>

      <section className="border-y border-ink-border bg-ink-raised/40">
        <RevealGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-14 sm:grid-cols-4 sm:px-8">
          {stats.map((s) => (
            <Reveal key={s.label} variants={fadeUp} className="text-center sm:text-left">
              <p className="font-display text-4xl uppercase tracking-tight text-burgundy-bright sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-paper-dim">
                {s.label}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-12 font-display text-3xl uppercase tracking-tight sm:text-4xl">
          What We Won&apos;t Compromise On
        </Reveal>
        <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
          {values.map((v) => (
            <Reveal
              key={v.title}
              variants={fadeUp}
              className="border-t border-ink-border pt-6"
            >
              <h3 className="mb-3 font-display text-xl uppercase tracking-tight text-burgundy-bright">
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed text-paper-dim">
                {v.body}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <section className="border-t border-ink-border px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl">
            Wear the Mark
          </h2>
          <div className="mt-8 flex justify-center">
            <LinkButton href="/shop">Shop the Collection</LinkButton>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
