"use client";

import { useEffect } from "react";
import { ChsnMark } from "@/components/Logo";
import { Button } from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grain relative flex min-h-[70dvh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center">
      <ChsnMark className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />
      <p className="relative mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy-bright">
        Error
      </p>
      <h1 className="relative font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl">
        Something Tore
      </h1>
      <p className="relative mt-4 max-w-sm text-base text-paper-dim">
        Something went wrong loading this page. Try again, or head back to
        the shop.
      </p>
      <div className="relative mt-8">
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  );
}
