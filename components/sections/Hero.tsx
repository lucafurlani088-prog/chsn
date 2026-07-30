"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { LinkButton } from "@/components/Button";
import { ChsnMark } from "@/components/Logo";
import { EASE_OUT } from "@/lib/motion";

const line = {
  hidden: { opacity: 0, y: "100%" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT, delay: 0.15 + i * 0.1 },
  }),
};

export function Hero({ image }: { image?: string }) {
  return (
    <section className="grain relative flex min-h-[92dvh] flex-col justify-end overflow-hidden bg-ink px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            /* A portrait frame crops hard into this wide box. Anchoring above
               centre keeps the subject's head in shot; nudge these if a future
               campaign image is framed differently. */
            className="object-cover object-[62%_34%] sm:object-[50%_30%]"
          />
          {/* Scrim: keeps the headline legible over the frame on every crop. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/35 sm:bg-gradient-to-r sm:from-ink sm:via-ink/75 sm:to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"
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

      <p className="relative z-10 mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-burgundy-bright">
        Fall / Winter Collection
      </p>

      <h1 className="relative z-10 font-display text-[16vw] font-normal uppercase leading-[0.85] tracking-tight sm:text-[10vw] lg:text-[7.5vw]">
        <span className="block overflow-hidden">
          <motion.span
            custom={0}
            variants={line}
            initial="hidden"
            animate="show"
            className="block"
          >
            Chosen,
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            custom={1}
            variants={line}
            initial="hidden"
            animate="show"
            className="block text-transparent [-webkit-text-stroke:1.5px_var(--color-paper)] sm:[-webkit-text-stroke:2px_var(--color-paper)]"
          >
            not given.
          </motion.span>
        </span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.6 }}
        className="relative z-10 mt-8 max-w-md text-base leading-relaxed text-paper-dim sm:text-lg"
      >
        Heavyweight fleece and matte outerwear, cut in small runs and finished
        with a single mark. Built for the ones who picked themselves.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.75 }}
        className="relative z-10 mt-10 flex flex-wrap items-center gap-4"
      >
        <LinkButton href="/shop">Shop the Drop</LinkButton>
        <LinkButton href="/lookbook" variant="ghost">
          View Lookbook
        </LinkButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper-dim sm:flex"
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
