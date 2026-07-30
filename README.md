# CHSN

Storefront for CHSN — *chosen, not given*. Next.js App Router, Tailwind v4,
Framer Motion, Zustand for the cart.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run lint
```

## Adding photography

Photos are added by dropping files into `public/` at documented paths — no code
change needed for slots that already exist. Anything declared but not yet
delivered falls back to a placeholder rather than a broken image, so the site is
always shippable mid-shoot.

- **Campaign / lookbook shots** → `public/lookbook/`.
  See [`public/lookbook/README.md`](public/lookbook/README.md) for the filename
  for each slot. Slots live in `lib/lookbook.ts`.
- **Product packshots** → `public/products/`, then set `image` on that product in
  `lib/products.ts`.

`lib/media.ts` does the existence check at build time.

## Layout

| Path                | What's there                                                 |
| ------------------- | ------------------------------------------------------------ |
| `app/`              | Routes: home, `/shop`, `/shop/[slug]`, `/lookbook`, `/about` |
| `components/`       | UI; `components/sections/` holds the homepage blocks          |
| `lib/products.ts`   | Catalogue — the single source for products                     |
| `lib/lookbook.ts`   | Campaign / lookbook slots                                     |
| `store/cart.ts`     | Cart state                                                    |

The cart is client-side only; there's no checkout wired up yet.

## Brand

Ink black `#0a0a0b`, burgundy accent, Anton display over Epilogue body. Logo
assets are in `public/brand/`.
