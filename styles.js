import { createGlobalStyle } from "styled-components";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --font-family: ${robotoMono.style.fontFamily};
    /* --background-color: #5e8c61;
    --background-opacity: 0.7; */

  }
  body {
    margin: 0;
    font-family: var(--font-family);
    background-color: rgba(94, 140, 97, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    /* opacity: 0.7; */
    /* min-height: 100vh;
    max-width: 50rem; */
  }
  `;
