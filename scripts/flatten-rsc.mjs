// Next 16 przy `output: "export"` zapisuje segmenty RSC jako np.
// out/oferta/__next.oferta/__PAGE__.txt, a router w przeglądarce pobiera
// out/oferta/__next.oferta.__PAGE__.txt. Hosting statyczny (GitHub Pages)
// nie zrobi takiego przepisania, więc tworzymy spłaszczone kopie.
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const outDir = "out";
let copied = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (!statSync(path).isDirectory()) continue;
    if (name.startsWith("__next.")) flatten(path, dir);
    else walk(path);
  }
}

function flatten(segmentDir, parent) {
  for (const name of readdirSync(segmentDir)) {
    const path = join(segmentDir, name);
    if (statSync(path).isDirectory()) {
      flatten(path, parent);
    } else {
      const flat = relative(parent, path).split(sep).join(".");
      copyFileSync(path, join(parent, flat));
      copied++;
    }
  }
}

walk(outDir);
console.log(`flatten-rsc: ${copied} plików segmentów`);
