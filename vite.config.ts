import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  base: "https://www.techverseai.tech/",
  plugins: [
    react(),
    {
      name: "non-render-blocking-css",
      transformIndexHtml(html) {
        return html.replace(
          /<link rel="stylesheet" (.*?)href="(.*?\.css)"(.*?)>/g,
          '<link rel="preload" href="$2" as="style" $1$3 onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$2" $1$3></noscript>'
        );
      },
    },
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
