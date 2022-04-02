import { globalCss } from "@stitches/react";
import { COLORS, WEIGHTS } from "./constants";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
  },
  "html, body": {
    height: "100%",
  },
  body: {
    fontFamily: "Inter, sans-serif;",
    fontWeight: WEIGHTS.regular,
    lineHeight: 1.5,
    "-webkit-font-smoothing": "antialiased",
    color: COLORS.primary,
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "input, button, textarea, select": {
    font: "inherit",
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
  "#root, #__next": {
    isolation: "isolate",
  },
});