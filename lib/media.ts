import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Resolves a path under `public/` only if the file is actually on disk.
 *
 * Campaign and lookbook photography lands in the repo drop by drop. Slots are
 * declared ahead of the shoot (see `lib/lookbook.ts`), so this keeps a declared
 * but not-yet-delivered photo from rendering as a broken image: the caller gets
 * `undefined` and falls back to the art placeholder instead.
 *
 * Server-only — runs during static generation, never in the browser.
 */
export function asset(publicPath: string): string | undefined {
  const relative = publicPath.replace(/^\/+/, "");
  const onDisk = path.join(process.cwd(), "public", relative);
  return existsSync(onDisk) ? publicPath : undefined;
}
