import { ChsnMark } from "@/components/Logo";
import { LinkButton } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="grain relative flex min-h-[70dvh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center">
      <ChsnMark className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />
      <p className="relative mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy-bright">
        404
      </p>
      <h1 className="relative font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl">
        Not Chosen
      </h1>
      <p className="relative mt-4 max-w-sm text-base text-paper-dim">
        This page didn&apos;t make the cut. It may have sold out, moved, or
        never existed.
      </p>
      <div className="relative mt-8">
        <LinkButton href="/">Back Home</LinkButton>
      </div>
    </div>
  );
}
