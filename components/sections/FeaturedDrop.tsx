import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { fadeUp } from "@/lib/motion";

export function FeaturedDrop() {
  const featured = products.filter((p) => p.featured);

  return (
    <section id="drop" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4 sm:mb-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy-bright">
            Latest Drop
          </p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl">
            The Essentials
          </h2>
        </div>
        <Link
          href="/shop"
          className="group flex items-center gap-1 text-sm font-medium uppercase tracking-[0.15em] text-paper-dim transition-colors hover:text-paper"
        >
          View all
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </Reveal>

      <RevealGroup className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-4">
        {featured.map((product, i) => (
          <Reveal key={product.slug} variants={fadeUp}>
            <ProductCard product={product} priority={i === 0} />
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
