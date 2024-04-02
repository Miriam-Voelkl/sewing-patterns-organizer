import { createGlobalStyle } from "styled-components";
import { Crimson_Text } from "next/font/google";
import { Noto_Serif_JP } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";

const crimsonText = Crimson_Text({ subsets: ["latin"], weight: "600" });
const notoSerifJp = Noto_Serif_JP({ subsets: ["latin"], weight: "500" });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

export default createGlobalStyle`
:root {
  --color-background: rgb(247, 241, 229);
  --color-light-green: rgb(137, 129, 33);
  --color-dark-green: rgb(76, 75, 22);
  --color-yellow: rgb(231, 177, 10);
  --font-serif-semibold: ${crimsonText.style.fontFamily};
  --font-serif-jp: ${notoSerifJp.style.fontFamily};
  --font-sans-serif: ${plexSans.style.fontFamily};
}


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--font-sans-serif) ,var(--font-serif-jp), system-ui;
    background-color: var(--color-background);
  }
`;
