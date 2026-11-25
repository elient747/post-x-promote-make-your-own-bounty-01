// main.ts — make.fun entry: post-x-promote-make-your-own-bounty-01
// The entry's work is the X post itself (posted by hand on X, with a photo
// attached). This program only reads POST.json and reports the post URL
// that was entered, so the repo can be checked without inventing a post.
// It does not post, submit, or contact any service.
import { readFileSync } from "node:fs";

const post = JSON.parse(readFileSync("POST.json", "utf8")) as { url: string };
if (!post.url || post.url.includes("REPLACE_AFTER_POSTING")) {
  console.log("Post not published yet: POST.json still holds the placeholder URL.");
  process.exit(1);
}
console.log(`X post: ${post.url}`);
