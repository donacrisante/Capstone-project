import { createGlobalStyle } from "styled-components";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ weight: "400", subsets: ["latin"]});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --font-family: ${robotoMono.style.fontFamily};

  }
  body {
    margin: 0;
    font-family: var(--font-family);
    /* min-height: 100vh;
    max-width: 50rem; */
  }
`;
