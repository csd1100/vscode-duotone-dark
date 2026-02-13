import { writeFileSync } from "node:fs";
import { generateTheme } from "./theme.ts";
import { Sea, Sky, Space, Forest, Earth } from "./themes.ts";

for (const palette of [Sea, Sky, Space, Forest, Earth]) {
  const theme = generateTheme(`DuoTone Dark ${palette.name}`, palette);
  writeFileSync(
    `./themes/${palette.name}-color-theme.json`,
    JSON.stringify(theme, null, 2),
    { encoding: "utf-8" },
  );
}
