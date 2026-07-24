"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { EASE_OUT } from "@/lib/motion";

export function NewsletterBanner() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="border-t border-ink-border bg-burgundy-deep/20">
      <Reveal className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy-bright">
          Early Access
        </p>
        <h2 className="font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl">
          Be Chosen First
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base text-paper-dim">
          Join the list for early drop access, restock alerts, and nothing
          else.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="hero-email" className="sr-only">
            Email address
          </label>
          <input
            id="hero-email"
            type="email"
            required
            placeholder="you@email.com"
            autoComplete="email"
            className="w-full rounded-full border border-ink-border bg-ink px-5 py-3.5 text-sm text-paper placeholder:text-paper-dim focus:border-burgundy focus:outline-none"
          />
          <motion.button
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            type="submit"
            className="cursor-pointer whitespace-nowrap rounded-full bg-burgundy px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-burgundy-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-bright focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Notify Me
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={
            submitted
              ? { opacity: 1, height: "auto" }
              : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.3, ease: EASE_OUT }}
          role="status"
          className="mt-4 overflow-hidden text-sm text-burgundy-bright"
        >
          You&apos;re on the list. Welcome to CHSN.
        </motion.p>
      </Reveal>
    </section>
  );
}
