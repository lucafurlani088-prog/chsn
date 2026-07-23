import { Suspense } from "react";
import type { Metadata } from "next";
import { ShopClient } from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Shop — CHSN",
  description: "Heavyweight fleece and matte outerwear from CHSN.",
};

export default function ShopPage() {
  return (
    <div>
      <div className="border-b border-ink-border px-5 pb-8 pt-14 sm:px-8 sm:pt-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy-bright">
          Full Range
        </p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight sm:text-6xl">
          Shop
        </h1>
      </div>
      <Suspense>
        <ShopClient />
      </Suspense>
    </div>
  );
}
