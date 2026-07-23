import { garmentIcons } from "@/components/icons/GarmentIcons";
import type { Product } from "@/lib/products";
import { ChsnMark } from "@/components/Logo";

const gradients: Record<Product["icon"], string> = {
  hoodie: "from-[#1a1013] via-ink to-ink-raised",
  jacket: "from-burgundy-deep/70 via-ink to-ink-raised",
  tee: "from-ink-raised via-ink to-[#170f11]",
  pants: "from-[#160c0f] via-ink to-ink-raised",
  cap: "from-burgundy-deep/50 via-ink to-ink-raised",
};

export function ProductArt({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const Icon = garmentIcons[product.icon];
  return (
    <div
      className={`grain relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradients[product.icon]} ${className}`}
    >
      <ChsnMark
        className="absolute -bottom-10 -right-10 h-56 w-auto text-white/[0.03]"
        bg="transparent"
      />
      <Icon
        className="relative h-[46%] w-[46%] text-paper/80 transition-transform duration-500 ease-out group-hover:scale-105"
        strokeWidth={1.1}
      />
    </div>
  );
}
