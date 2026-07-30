"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ChsnMark } from "@/components/Logo";

/**
 * Full-bleed campaign frame, no copy. The mark sits in the header directly above
 * this, so the hero carries the image alone; the scroll cue is the only
 * affordance, since there is no headline or button to act on.
 */
export function Hero({ image }: { image?: string }) {
  return (
    <section className="grain relative flex min-h-[92dvh] flex-col justify-end overflow-hidden bg-ink">
      {image ? (
        <>
          <Image
            src={image}
            alt="CHSN Fall / Winter campaign"
            fill
            priority
            sizes="100vw"
            /* A portrait frame crops hard into this wide box. Anchoring above
               centre keeps the subject's head in shot; nudge these if a future
               campaign image is framed differently. */
            className="object-cover object-[62%_34%] sm:object-[50%_30%]"
          />
          {/* Darkens the top so the white mark in the header stays readable, and
              the bottom so the section resolves into the marquee below. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink/60"
          />
        </>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-10%] top-[-10%] h-[60vw] w-[60vw] max-h-[560px] max-w-[560px] rounded-full bg-burgundy/25 blur-[120px]"
          />
          <ChsnMark
            priority
            className="pointer-events-none absolute right-[-6%] top-1/2 h-[130%] w-auto -translate-y-1/2 opacity-[0.05]"
          />
        </>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 mb-8 flex flex-col items-center gap-2 text-paper-dim"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
