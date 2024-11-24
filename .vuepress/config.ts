import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import UnoCSS from 'unocss/vite'

import theme from "./theme.js";
import { comment } from "vuepress-theme-hope";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/notable/",
  lang: "vi-VN",

  dest: "./dist",
  title: "Notable",
  description: "A note for yds-er",

    //   bundler: viteBundler(),

  bundler: viteBundler({
    // viteOptions: {
    //         plugins: [
    //         UnoCSS(),
    //         ]
    //     },
  }),

  theme,

  // enable it with pwa
  // shouldPrefetch: false,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
});