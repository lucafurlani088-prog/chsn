"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { RevealGroup, Reveal } from "@/components/Reveal";
import { fadeUp } from "@/lib/motion";

export function ShopClient() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("category") ?? "All";
  const [active, setActive] = useState<(typeof categories)[number]>(
    (categories as readonly string[]).includes(initial)
      ? (initial as (typeof categories)[number])
      : "All"
  );

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 sm:pb-32">
      <div className="mb-10 flex flex-wrap gap-2 sm:mb-14" role="tablist" aria-label="Filter by category">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={`relative cursor-pointer rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-bright ${
                isActive ? "text-paper" : "text-paper-dim hover:text-paper"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="shop-filter-pill"
                  className="absolute inset-0 rounded-full bg-burgundy"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          );
        })}
      </div>

      <RevealGroup
        key={active}
        className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-4"
      >
        {filtered.map((product) => (
          <Reveal key={product.slug} variants={fadeUp}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </RevealGroup>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-paper-dim">
          No pieces in this category yet.
        </p>
      )}
    </div>
  );
}
