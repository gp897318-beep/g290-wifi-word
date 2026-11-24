// One Word for Your Wi-Fi — entry program.
// Writes a single word describing home Wi-Fi to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The word itself lives in its own tiny helper so the choice is easy
// to find, review, and change without touching the plumbing below.
function wifiWord(): string {
  return "Gaslighting";
}

// Entry point: emit exactly one word, nothing else — no trailing
// explanation, no newline padding beyond the word itself.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", wifiWord(), "utf8");
