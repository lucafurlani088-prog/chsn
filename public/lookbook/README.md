<img width="2160" height="3840" alt="Timeline 1_01_14_04_22" src="https://github.com/user-attachments/assets/43fe7434-f152-4e8b-84bb-03ee1f0d26d4" />
<img width="2160" height="3840" alt="Timeline 1_01_15_12_01" src="https://github.com/user-attachments/assets/f06f2693-8018-4048-8bce-8b286b594d7b" />
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
| `look-essential-hoodie.jpg`  | Look 04                                   | Landscape            |
| `look-signature-bomber.jpg`  | Look 05                                   | Landscape            |
| `look-utility-cargo.jpg`     | Look 06 (full-width tile)                 | Landscape            |

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
