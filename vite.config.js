import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [VitePWA()],
  root: "./",
  base: "/fancy-border-radius/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        fullcontrol: resolve(__dirname, "full-control.html"),
      },
    },
  },
});
