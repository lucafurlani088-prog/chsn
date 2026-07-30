/**
 * Lookbook / campaign imagery.
 *
 * Deliberately decoupled from `lib/products.ts`: product entries carry flat-lay
 * packshots, while these are worn campaign frames. A look may point at a product
 * so the tile links somewhere useful, but it does not have to.
 *
 * `image` is the path the photo is *expected* at. Drop the file in at that path
 * and the tile picks it up on the next build — until then the tile renders its
 * art placeholder. See `public/lookbook/README.md`.
 */
export type Look = {
  id: string;
  /** Overline label, e.g. "Look 01". Derived from position when absent. */
  title: string;
  /** Product to link to, when the look features one. */
  slug?: string;
  /** Expected path under `public/`. */
  image: string;
  /** Tailwind grid span classes for the masonry-ish desktop grid. */
  span?: string;
  /** Drives the placeholder aspect ratio and object framing. */
  orientation: "portrait" | "landscape";
  /** Placeholder gradient used until the photo lands. */
  tone: string;
  /** Garment line-art shown on the placeholder. */
  icon: "hoodie" | "jacket" | "tee" | "pants" | "cap";
};

export const looks: Look[] = [
  {
    id: "hood-up",
    title: "Hood Up",
    slug: "signature-tracksuit",
    image: "/lookbook/campaign-01.jpg",
    span: "sm:row-span-2",
    orientation: "portrait",
    tone: "from-ink-raised via-ink to-burgundy-deep/60",
    icon: "hoodie",
  },
  {
    id: "signature-tracksuit",
    title: "Signature Tracksuit",
    slug: "signature-tracksuit",
    image: "/products/tracksuit.webp",
    orientation: "portrait",
    tone: "from-burgundy-deep/50 via-ink to-ink-raised",
    icon: "hoodie",
  },
  {
    id: "off-duty",
    title: "Off Duty",
    slug: "signature-tracksuit",
    image: "/lookbook/campaign-02.jpg",
    span: "sm:row-span-2",
    orientation: "portrait",
    tone: "from-[#160c0f] via-ink to-ink-raised",
    icon: "hoodie",
  },
  {
    // Full-length styling shot. No `slug`: neither the heart-graphic top nor the
    // panelled wide-leg jeans are in the catalogue yet, and pointing this at the
    // nearest product would mislabel the garments.
    id: "full-fit",
    title: "Full Fit",
    image: "/lookbook/campaign-03.jpg",
    // Three rows, not two: a head-to-toe frame needs a tile tall enough not to
    // crop the shoes off, which is the whole point of a full-length shot.
    span: "sm:row-span-3",
    orientation: "portrait",
    tone: "from-ink-raised via-ink to-burgundy-deep/50",
    icon: "tee",
  },
  {
    id: "essential-hoodie",
    title: "Essential Hoodie",
    slug: "essential-hoodie",
    image: "/lookbook/look-essential-hoodie.jpg",
    orientation: "landscape",
    tone: "from-ink-raised via-ink to-[#170f11]",
    icon: "hoodie",
  },
  {
    id: "signature-bomber",
    title: "Signature Bomber",
    slug: "signature-bomber",
    image: "/lookbook/look-signature-bomber.jpg",
    orientation: "landscape",
    tone: "from-burgundy-deep/40 via-ink to-ink-raised",
    icon: "jacket",
  },
  {
    id: "utility-cargo",
    title: "Utility Cargo Pant",
    slug: "utility-cargo",
    image: "/lookbook/look-utility-cargo.jpg",
    // Plain tile rather than col-span-2: a full-width tile cannot sit alongside
    // the row-span-3 Full Fit frame, which strands it and leaves a dead row.
    span: "",
    orientation: "landscape",
    tone: "from-ink-raised via-ink to-burgundy-deep/40",
    icon: "pants",
  },
];

/** Campaign frame used as the homepage hero backdrop. */
export const heroCampaignImage = "/lookbook/campaign-01.jpg";
