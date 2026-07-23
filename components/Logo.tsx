import type { SVGProps } from "react";

/**
 * Decorative approximation of the CHSN emblem (two pointed lobes with
 * heart-shaped negative space, pinched at the waist). Used for favicon-scale
 * marks, watermarks and dividers — swap for the production vector file when
 * available.
 */
export function ChsnMark({
  bg = "var(--color-ink)",
  ...props
}: SVGProps<SVGSVGElement> & { bg?: string }) {
  const petal =
    "M100,0 C130,15 150,15 165,45 C185,80 185,130 150,165 C130,185 115,195 100,210 C85,195 70,185 50,165 C15,130 15,80 35,45 C50,15 70,15 100,0 Z";
  const heartDown =
    "M55,30 C40,0 0,0 0,35 C0,65 30,85 55,110 C80,85 110,65 110,35 C110,0 70,0 55,30 Z";
  const heartUp =
    "M55,0 C80,25 110,45 110,75 C110,110 70,110 55,80 C40,110 0,110 0,75 C0,45 30,25 55,0 Z";

  return (
    <svg viewBox="0 0 200 420" aria-hidden="true" {...props}>
      <path d={petal} fill="currentColor" />
      <path d={petal} fill="currentColor" transform="translate(0,210)" />
      <path d={heartDown} fill={bg} transform="translate(45,68)" />
      <path d={heartUp} fill={bg} transform="translate(45,242)" />
      <path
        d="M100,204 C107,215 113,224 100,236 C87,224 93,215 100,204 Z"
        fill={bg}
      />
    </svg>
  );
}

export function ChsnWordmark({
  className,
  dark,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`font-mark tracking-wide ${
        dark ? "text-ink" : "text-paper"
      } ${className ?? ""}`}
    >
      Chsn
    </span>
  );
}
