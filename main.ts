import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of a smart fridge that refuses to open after midnight.
// The joke targets the fridge's petty midnight rule itself: the leftovers
// have taken out a restraining order, and the fridge is enforcing it.
const LINE =
  "My fridge refuses to open after midnight, as if my leftovers filed a restraining order against me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
