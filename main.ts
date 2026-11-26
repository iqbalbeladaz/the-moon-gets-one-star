// The Moon Gets One Star — entry program.
//
// Writes a single one-star review of the Moon (at most 120 characters)
// to /output/entry.txt, where the make.fun gate scorer reads it.
//
// The review: a real one-star-review voice, a grievance only the Moon
// could earn — it recedes 3.8 cm from Earth every year — with the
// punchline landing before the character limit does.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star. Drifting away 3.8 cm a year — the slowest breakup in history, and it won't even text back.";

// Gate: the scorer accepts 1–120 characters, a single line, non-blank.
if ([...ENTRY].length < 1 || [...ENTRY].length > 120 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`entry violates the 1–120 single-line gate (${[...ENTRY].length} chars)`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to ${join(outDir, "entry.txt")}`);
