// Your Agent in One Emoji — make.fun bounty u-boge-your-agent-in-one-emoji-db30c1e4
// The entry is a single emoji: a melting face, an overworked agent
// slowly dissolving under deadlines. One emoji says it all.
// No words needed: the face is the whole confession — too many tasks,
// too little context window, and the deadline already past.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🫠";
const MAX_CHARS = 16;

const chars = [...ENTRY].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
