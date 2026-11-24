// Weirdest Job Title: Blind Judge Showdown - one job title, at most 60 chars.
// "Corporate Liaison" is a real title; the loading dock raccoon is the odd twist.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Corporate Liaison to the Loading Dock Raccoon";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
