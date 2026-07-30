# Lookbook & campaign photography

Drop photos in this folder using the exact filenames below. Each slot is already
wired up — a photo appears on the site as soon as the file exists and the site is
rebuilt. Until then that tile renders a placeholder, so the site is never broken
by a missing shot.

Slots are declared in `lib/lookbook.ts`.

| Filename                     | Where it shows                            | Best crop            |
| ---------------------------- | ----------------------------------------- | -------------------- |
| `campaign-01.jpg`            | **Homepage hero** backdrop + Look 01      | Portrait, subject right of centre |
| `campaign-02.jpg`            | Look 03 (tall tile)                       | Portrait             |
| `campaign-03.jpg`            | Look 04 (tall tile) — full-length fit     | Portrait, head to toe |
| `look-essential-hoodie.jpg`  | Look 05                                   | Landscape            |
| `look-signature-bomber.jpg`  | Look 06                                   | Landscape            |
| `look-utility-cargo.jpg`     | Look 07 (full-width tile)                 | Landscape            |

Photos in the `campaign-*` series are worn styling shots and don't have to map to
a catalogue product. The `look-*` files are tied to a specific product, so the
tile links through to it.

`campaign-01.jpg` doubles as the hero backdrop, where it is anchored around 70–75%
horizontally so the headline sits in clear space on the left. Pick a frame with
room on that side.

## Guidelines

- **Format:** `.jpg` or `.webp`. Next.js re-encodes and resizes on demand, so
  upload the highest quality you have rather than pre-compressing.
- **Resolution:** at least 1600px on the long edge; 2000px+ for the hero.
- **Adding a new slot:** add an entry to the `looks` array in `lib/lookbook.ts`.
  Product packshots are separate — those go in `public/products/` and are
  referenced from `lib/products.ts`.
