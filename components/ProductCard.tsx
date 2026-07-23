import Link from "next/link";
import type { Product } from "@/lib/products";
import { ProductArt } from "@/components/ProductArt";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-bright rounded-sm"
    >
      <ProductArt
        product={product}
        className="aspect-[4/5] w-full rounded-sm border border-ink-border transition-colors duration-300 group-hover:border-burgundy/60"
      />
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-medium">{product.name}</p>
          <p className="mt-0.5 text-xs text-paper-dim">{product.colorway}</p>
        </div>
        <p className="shrink-0 text-sm text-burgundy-bright">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
