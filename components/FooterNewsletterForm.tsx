"use client";

export function FooterNewsletterForm() {
  return (
    <form
      className="flex items-center gap-2 border-b border-ink-border pb-2 focus-within:border-burgundy"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        required
        placeholder="Email address"
        autoComplete="email"
        className="w-full bg-transparent text-sm text-paper placeholder:text-paper-dim focus:outline-none"
      />
      <button
        type="submit"
        className="cursor-pointer text-xs font-semibold uppercase tracking-[0.15em] text-burgundy-bright transition-opacity hover:opacity-80"
      >
        Join
      </button>
    </form>
  );
}
