import { create } from "zustand";
import type { Product } from "@/lib/products";

export type CartLine = {
  product: Product;
  size: string;
  quantity: number;
};

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  addItem: (product: Product, size: string) => void;
  removeLine: (index: number) => void;
  total: () => number;
  count: () => number;
};

export const useCart = create<CartState>((set, get) => ({
  lines: [],
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  addItem: (product, size) =>
    set((state) => {
      const existing = state.lines.findIndex(
        (l) => l.product.slug === product.slug && l.size === size
      );
      if (existing >= 0) {
        const lines = [...state.lines];
        lines[existing] = {
          ...lines[existing],
          quantity: lines[existing].quantity + 1,
        };
        return { lines, isOpen: true };
      }
      return {
        lines: [...state.lines, { product, size, quantity: 1 }],
        isOpen: true,
      };
    }),
  removeLine: (index) =>
    set((state) => ({ lines: state.lines.filter((_, i) => i !== index) })),
  total: () =>
    get().lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0),
  count: () => get().lines.reduce((sum, l) => sum + l.quantity, 0),
}));
