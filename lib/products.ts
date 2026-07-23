export type Product = {
  slug: string;
  name: string;
  category: "Hoodies" | "Outerwear" | "Tees" | "Bottoms" | "Accessories";
  price: number;
  colorway: string;
  icon: "hoodie" | "jacket" | "tee" | "pants" | "cap";
  description: string;
  details: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "essential-hoodie",
    name: "Essential Hoodie",
    category: "Hoodies",
    price: 168,
    colorway: "Burgundy / Black",
    icon: "hoodie",
    description:
      "Heavyweight 480gsm fleece cut for a relaxed drop shoulder, garment-dyed for a worn-in depth that only gets better with age.",
    details: [
      "480gsm brushed-back cotton fleece",
      "Garment-dyed, enzyme washed",
      "Dropped shoulder, boxy fit",
      "Embroidered chest mark",
    ],
    featured: true,
  },
  {
    slug: "signature-bomber",
    name: "Signature Bomber",
    category: "Outerwear",
    price: 328,
    colorway: "Black / Burgundy",
    icon: "jacket",
    description:
      "A two-tone bomber built from a matte ripstop shell with a quilted lining — the flagship piece of the collection.",
    details: [
      "Matte ripstop shell, quilted lining",
      "Color-blocked sleeve construction",
      "Embroidered back mark",
      "Ribbed collar, cuff and hem",
    ],
    featured: true,
  },
  {
    slug: "midweight-tee",
    name: "Midweight Tee",
    category: "Tees",
    price: 68,
    colorway: "Black",
    icon: "tee",
    description:
      "220gsm combed cotton with a boxy, slightly cropped block fit. The everyday layer under everything else.",
    details: [
      "220gsm combed cotton jersey",
      "Boxy block fit",
      "Reinforced collar seam",
      "Puff-print chest mark",
    ],
    featured: true,
  },
  {
    slug: "utility-cargo",
    name: "Utility Cargo Pant",
    category: "Bottoms",
    price: 184,
    colorway: "Washed Black",
    icon: "pants",
    description:
      "Tapered cargo built in a brushed twill with articulated knees and a burgundy interior waistband tape.",
    details: [
      "Brushed cotton twill",
      "Articulated knee construction",
      "Tapered leg, elastic cuff",
      "Interior burgundy waist tape",
    ],
  },
  {
    slug: "quarter-zip-fleece",
    name: "Quarter-Zip Fleece",
    category: "Hoodies",
    price: 148,
    colorway: "Charcoal",
    icon: "hoodie",
    description:
      "Polar fleece quarter-zip with a stand collar, designed to layer clean under the Signature Bomber.",
    details: [
      "Polar fleece, brushed interior",
      "Stand collar, half-zip placket",
      "Woven chest mark",
      "Relaxed fit",
    ],
  },
  {
    slug: "long-sleeve-tee",
    name: "Long Sleeve Tee",
    category: "Tees",
    price: 82,
    colorway: "Burgundy",
    icon: "tee",
    description:
      "Same 220gsm cotton block as the Midweight Tee, extended to a long sleeve with a ribbed cuff.",
    details: [
      "220gsm combed cotton jersey",
      "Ribbed cuff",
      "Boxy block fit",
      "Puff-print chest mark",
    ],
  },
  {
    slug: "shell-jacket",
    name: "Packable Shell Jacket",
    category: "Outerwear",
    price: 246,
    colorway: "Black",
    icon: "jacket",
    description:
      "Lightweight water-resistant shell that packs into its own chest pocket — built for transit between seasons.",
    details: [
      "Water-resistant ripstop nylon",
      "Packs into chest pocket",
      "Adjustable hood and hem",
      "Taped seams",
    ],
  },
  {
    slug: "wide-leg-trouser",
    name: "Wide Leg Trouser",
    category: "Bottoms",
    price: 196,
    colorway: "Black",
    icon: "pants",
    description:
      "Tailoring-inspired wide leg trouser in a heavy twill, finished with a burgundy interior seam tape.",
    details: [
      "Heavy cotton twill",
      "Wide leg, tapered ankle break",
      "Interior burgundy seam tape",
      "Side-adjust waistband",
    ],
  },
  {
    slug: "structured-cap",
    name: "Structured Cap",
    category: "Accessories",
    price: 54,
    colorway: "Black / Burgundy",
    icon: "cap",
    description:
      "Six-panel structured cap with a burgundy underbrim and embroidered mark, finished with a metal clasp.",
    details: [
      "Six-panel structured crown",
      "Burgundy underbrim",
      "Embroidered mark, metal clasp",
      "One size, adjustable",
    ],
  },
];

export const categories = [
  "All",
  "Hoodies",
  "Outerwear",
  "Tees",
  "Bottoms",
  "Accessories",
] as const;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(slug: string, count = 3) {
  const current = getProduct(slug);
  if (!current) return products.slice(0, count);
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .concat(products.filter((p) => p.slug !== slug && p.category !== current.category))
    .slice(0, count);
}
