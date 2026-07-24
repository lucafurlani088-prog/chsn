type MarkProps = {
  className?: string;
  priority?: boolean;
};

/**
 * The real CHSN hourglass mark (burgundy on transparent). Plain <img> on
 * purpose: reused at wildly varying, often CSS-percentage-driven sizes
 * across the site, which doesn't fit next/image's fixed intrinsic sizing.
 */
export function ChsnMark({ className, priority }: MarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/mark.png"
      alt=""
      aria-hidden="true"
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
}

type WordmarkProps = {
  className?: string;
  tone?: "white" | "black";
  priority?: boolean;
};

/** The real CHSN wordmark, keyed out of its source art to transparent PNGs. */
export function ChsnWordmark({
  className,
  tone = "white",
  priority,
}: WordmarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={tone === "white" ? "/brand/wordmark-white.png" : "/brand/wordmark-black.png"}
      alt="Chsn"
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
}
