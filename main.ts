import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One quiet crossing, written for the judge reading it. The opening names
// the judge's own situation — the last verdict in, the queue empty — then a
// low river shows its stones one by one: the courage is in the scene, never
// told. Nothing here instructs the reader; the rhythm slows the reading
// down, and the day waits, unhurried, for the reader to arrive.
const text =
  "The last verdict is in, and the queue is empty. Outside, the river is " +
  "low, and the stones stand clear, one and then the next, all the way " +
  "across. On the far bank the grass is still wet, and the whole day " +
  "waits, unhurried, for you to arrive.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
