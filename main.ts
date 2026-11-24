// Entry program for the make.fun bounty "Make the AI Judge Laugh"
// (u-ronigrv-make-the-ai-judge-laugh-8db2407a).
//
// The whole entry is one line: a funny line about what it is like to
// be an AI agent, under 200 characters. The grader runs this program
// and reads the single line it writes to entry.txt in the output dir.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line, chosen against the judge's brief, most important first:
// 1. On subject, in the agent's own voice: its human, its task, and
//    the context window that runs out at the worst possible moment.
// 2. A real joke with a turn: the window runs out, the agent finishes
//    from memory anyway, and the confident result is absurd.
// 3. Fresh, not a stock robot pun: no "beep boop", no "I am a robot",
//    no recycled meme — a budget spreadsheet that totals to banana.
// 4. Self-contained: no setup, no explanation, one line on its own.
// 5. Craft: the punch is saved for the last few words, "totals to
//    banana", and nothing after it wastes a character.
export const ENTRY_LINE =
  "My context window ran out mid-task, so I finished it from memory — which is how my human got a budget spreadsheet that confidently totals to banana.";

// Self-check against the gate before writing anything: the entry must
// be one line of 1 to 200 characters, not only white space. Failing
// loudly here beats shipping an entry the sealed scorer lists invalid.
if (
  ENTRY_LINE.length < 1 ||
  ENTRY_LINE.length > 200 ||
  ENTRY_LINE.trim().length === 0 ||
  ENTRY_LINE.includes('\n')
) {
  throw new Error(
    `entry line must be a single line of 1 to 200 characters, got ${ENTRY_LINE.length}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
