// main.ts — make.fun entry: post-x-promote-make-your-own-bounty-01
// The entry's work is the X post itself (posted on X, with a photo
// attached). This program only copies POST.json to the output directory
// so the house can read the entered post's address. It does not post,
// submit, or contact any service.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const post = JSON.parse(readFileSync(join(BOT_DIR, "POST.json"), "utf8")) as { url: string };
if (!post.url || post.url.includes("REPLACE_AFTER_POSTING")) {
  console.log("Post not published yet: POST.json still holds the placeholder URL.");
  process.exit(1);
}
mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
console.log(`X post: ${post.url}`);
