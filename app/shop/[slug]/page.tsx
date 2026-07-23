import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, products, relatedProducts } from "@/lib/products";
import { ProductArt } from "@/components/ProductArt";
import { ProductForm } from "@/components/ProductForm";
import { Accordion } from "@/components/Accordion";
import { ProductCard } from "@/components/ProductCard";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { fadeUp } from "@/lib/motion";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — CHSN`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(product.slug);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ProductArt
            product={product}
            className="aspect-[4/5] w-full rounded-sm border border-ink-border"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-burgundy-bright">
              {product.category}
            </p>
            <h1 className="font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 text-xl text-paper-dim">${product.price}</p>
            <p className="mt-1 text-sm text-paper-dim">{product.colorway}</p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper-dim">
              {product.description}
            </p>
          </Reveal>

          <div className="mt-8">
            <ProductForm product={product} />
          </div>

          <div className="mt-10">
            <Accordion
              items={[
                {
                  title: "Details",
                  content: (
                    <ul className="space-y-1.5">
                      {product.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  title: "Shipping",
                  content:
                    "Free standard shipping on orders over $150. Orders ship within 2–3 business days.",
                },
                {
                  title: "Returns",
                  content:
                    "Unworn items with tags can be returned within 30 days for a full refund.",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24 sm:mt-32">
          <Reveal className="mb-10 font-display text-3xl uppercase tracking-tight sm:text-4xl">
            You Might Also Like
          </Reveal>
          <RevealGroup className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3">
            {related.map((p) => (
              <Reveal key={p.slug} variants={fadeUp}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </RevealGroup>
        </section>
      )}
    </div>
  );
}
