"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "@/store/cart";
import { EASE_OUT } from "@/lib/motion";
import { Button } from "@/components/Button";
import { garmentIcons } from "@/components/icons/GarmentIcons";

export function CartDrawer() {
  const isOpen = useCart((s) => s.isOpen);
  const close = useCart((s) => s.close);
  const lines = useCart((s) => s.lines);
  const removeLine = useCart((s) => s.removeLine);
  const total = useCart((s) => s.total());

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/70"
            onClick={close}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col border-l border-ink-border bg-ink"
          >
            <div className="flex items-center justify-between border-b border-ink-border px-6 py-5">
              <h2 className="font-display text-xl uppercase tracking-wide">
                Your Bag ({lines.reduce((n, l) => n + l.quantity, 0)})
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label="Close cart"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-ink-raised"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {lines.length === 0 ? (
                <p className="mt-12 text-center text-sm text-paper-dim">
                  Your bag is empty. Time to change that.
                </p>
              ) : (
                <ul className="space-y-6">
                  {lines.map((line, i) => {
                    const Icon = garmentIcons[line.product.icon];
                    return (
                      <li key={`${line.product.slug}-${line.size}-${i}`} className="flex gap-4">
                        <div className="flex h-20 w-16 shrink-0 items-center justify-center rounded bg-gradient-to-br from-ink-raised to-burgundy-deep/40">
                          <Icon className="h-9 w-9 text-paper-dim" />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-medium">{line.product.name}</p>
                            <button
                              type="button"
                              onClick={() => removeLine(i)}
                              className="cursor-pointer text-xs uppercase tracking-wide text-paper-dim underline-offset-2 hover:text-burgundy-bright hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                          <p className="text-xs text-paper-dim">
                            Size {line.size} · Qty {line.quantity}
                          </p>
                          <p className="mt-1 text-sm text-burgundy-bright">
                            ${(line.product.price * line.quantity).toFixed(2)}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="border-t border-ink-border px-6 py-6">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-paper-dim">Subtotal</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <Button className="w-full" disabled={lines.length === 0}>
                Checkout
              </Button>
              <p className="mt-3 text-center text-[11px] text-paper-dim">
                Shipping and taxes calculated at checkout.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
