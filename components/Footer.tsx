import Link from "next/link";
import { InstagramIcon, XIcon, YoutubeIcon } from "@/components/icons/SocialIcons";
import { ChsnMark } from "@/components/Logo";
import { FooterNewsletterForm } from "@/components/FooterNewsletterForm";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All Products" },
      { href: "/shop?category=Hoodies", label: "Hoodies" },
      { href: "/shop?category=Outerwear", label: "Outerwear" },
      { href: "/shop?category=Accessories", label: "Accessories" },
    ],
  },
  {
    title: "Brand",
    links: [
      { href: "/about", label: "About" },
      { href: "/lookbook", label: "Lookbook" },
      { href: "/#drop", label: "Latest Drop" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-2 text-2xl font-mark">
              <ChsnMark className="h-7 w-auto text-burgundy" bg="var(--color-ink)" />
              <span>Chsn</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-paper-dim">
              Chosen, not given. Heavyweight fleece and matte outerwear, cut
              in small runs and finished with one mark.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-paper-dim">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-paper transition-colors hover:text-burgundy-bright"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-paper-dim">
              Stay in it
            </h3>
            <FooterNewsletterForm />

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="CHSN on Instagram"
                className="text-paper-dim transition-colors hover:text-paper"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="CHSN on X"
                className="text-paper-dim transition-colors hover:text-paper"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="CHSN on YouTube"
                className="text-paper-dim transition-colors hover:text-paper"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-border pt-6 text-xs text-paper-dim sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} CHSN. All rights reserved.</p>
          <p>Designed &amp; built with restraint.</p>
        </div>
      </div>
    </footer>
  );
}
