"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/store/cart";
import { Button } from "@/components/Button";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export function ProductForm({ product }: { product: Product }) {
  const [size, setSize] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);
  const addItem = useCart((s) => s.addItem);

  return (
    <div>
      <fieldset>
        <legend className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-paper-dim">
          Size
          <span className="text-paper-dim/70 normal-case tracking-normal">
            Size guide
          </span>
        </legend>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Size">
          {sizes.map((s) => {
            const isActive = size === s;
            return (
              <button
                key={s}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => {
                  setSize(s);
                  setError(false);
                }}
                className={`h-11 min-w-11 cursor-pointer rounded-full border px-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-bright ${
                  isActive
                    ? "border-burgundy bg-burgundy text-paper"
                    : "border-ink-border text-paper hover:border-paper-dim"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
        {error && (
          <p role="alert" className="mt-2 text-xs text-burgundy-bright">
            Please select a size before adding to bag.
          </p>
        )}
      </fieldset>

      <div className="mt-8">
        <Button
          className="w-full sm:w-auto"
          onClick={() => {
            if (!size) {
              setError(true);
              return;
            }
            addItem(product, size);
            setAdded(true);
            window.setTimeout(() => setAdded(false), 1800);
          }}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" /> Added to Bag
            </>
          ) : (
            `Add to Bag — $${product.price}`
          )}
        </Button>
      </div>
    </div>
  );
}
