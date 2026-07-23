import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HoodieIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14c2.5-3 5-4.5 12-4.5S41.5 11 44 14l9 9-6 6-5-4v27a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V25l-5 4-6-6 9-9Z" />
      <path d="M24 14c0 5 3.5 8 8 8s8-3 8-8" />
      <path d="M27 16v6M37 16v6" />
    </svg>
  );
}

export function JacketIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 12l-9 5 3 8 6-3v28a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V22l6 3 3-8-9-5-5 4h-10l-5-4Z" />
      <path d="M27 12v40M22 24v5" />
    </svg>
  );
}

export function TeeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 12 10 18l4 9 6-3v25a1.6 1.6 0 0 0 1.6 1.6h20.8A1.6 1.6 0 0 0 44 49V24l6 3 4-9-12-6-4 4h-12l-4-4Z" />
      <path d="M26 12c0 4 2.7 6.5 6 6.5s6-2.5 6-6.5" />
    </svg>
  );
}

export function PantsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M18 10h28l1.6 40a1.4 1.4 0 0 1-1.4 1.5h-6.4a1.4 1.4 0 0 1-1.4-1.3L36 28l-2.4 22.2a1.4 1.4 0 0 1-1.4 1.3h-6.4a1.4 1.4 0 0 1-1.4-1.5L26 10" />
      <path d="M18 10h28M18 18h28" />
    </svg>
  );
}

export function CapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 34c0-11 9-19 20-19s20 8 20 19" />
      <path d="M8 36c8 4 40 4 48 0" />
      <path d="M8 36c0 3 3 6 8 6M56 36c0 3-3 6-8 6" />
    </svg>
  );
}

export const garmentIcons = {
  hoodie: HoodieIcon,
  jacket: JacketIcon,
  tee: TeeIcon,
  pants: PantsIcon,
  cap: CapIcon,
};
