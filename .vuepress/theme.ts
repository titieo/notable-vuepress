// import { dateSorter } from "@vuepress/helper";
import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar } from "./navbar.js";

export default hopeTheme(
    {
        navbar: enNavbar,
        // sidebar: enSidebar,
        sidebar: false,

        footer: "MIT License ©️ Tran Tan Loc",

        displayFooter: true,

        blogLocales: {
          tutorial: "Tutorial",
        },

        metaLocales: {
          editLink: "Edit this page on GitHub",
        },

    hostname: "https://titieo016.github.io/notable",

    author: {
      name: "LocTran016",
    //   url: "https://your.domain",
    },

    iconAssets: "fontawesome-with-brands",

        // logo: "",
    // TODO: add logo

    repo: "titieo016/notable",
    // docsDir: "blog",

        blog: {
        description: "A YDS-er that enjoy Programming 🧑‍💻 <br> & Gym 💪",
            intro: "/intro.html",
          avatar: 'logo.jpg',
      medias: {
        Discord: "https://example.com",
        // Dribbble: "https://example.com",
        Email: "mailto:ttloc.y24@ump.edu.vn",
        // Evernote: "https://example.com",
        Facebook: "https://facebook.com/trantanloc016",
        // Flipboard: "https://example.com",
        GitHub: "https://github.com/titieo016",
        // Gitlab: "https://example.com",
        // Gmail: "mailto:info@example.com",
        // Instagram: "https://example.com",
        // Linkedin: "https://example.com",

        // Pocket: "https://example.com",
        // Rss: "https://example.com",
        // Steam: "https://example.com",
        // VuePressThemeHope: {
        //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        //   link: "https://theme-hope.vuejs.press",
        // },
      },
        },




    encrypt: {
      config: {
        // "/demo/encrypt.html": ["1234"],
        // "/zh/demo/encrypt.html": ["1234"],
      },
    },

    // enable it to preview all changes in time
    // hotReload: true,

    plugins: {
      blog: {excerptLength:0,
        type: [
        //   {
        //     key: "tutorial",
        //     filter: (page): boolean =>
        //       Boolean(page.filePathRelative?.includes("demo/")),
        //     sorter: (pageA, pageB): number =>
        //       dateSorter(pageA.frontmatter.date, pageB.frontmatter.date),
        //     layout: "BlogType",
        //   },
        ],
      },

      // install @waline/client before enabling it
      // WARNING: This is a test server for demo only.
      // You should create and use your own comment service in production.
      // comment: {
      //   provider: "Waline",
      //   serverURL: "https://waline-comment.vuejs.press",
      // },

      components: {
        components: ["Badge", "VPCard"],
      },

      markdownImage: {
        figure: true,
        lazyload: true,
        size: true,
      },

      // install katex or before enabling it
      markdownMath: {
          type: "mathjax", // or "mathjax"
        //   mhchem: true,
        //   copy: true
      },

        markdownTab: true,

        // markdownMath: true,
        comment: {
            provider: "Giscus",
            // repo: 'notable', repoId: '', category: '',categoryId:''
        },


      // All features are enabled for demo, only preserve features you need here
      mdEnhance: {
        align: true,
        attrs: true,
        component: true,
        mark: true,
        spoiler: true,
        markmap: true,
        // stylize: [
        //   {
        //     matcher: "Recommended",
        //     replacer: ({ tag }) => {
        //       if (tag === "em")
        //         return {
        //           tag: "Badge",
        //           attrs: { type: "tip" },
        //           content: "Recommended",
        //         };
        //     },
        //   },
          // ],
        // TODO: Check back on this later
        sub: true,
        sup: true,
        tasklist: true,
        // vPre: true,

        // install chart.js before enabling it
        // chart: true,

        // insert component easily

        // install echarts before enabling it
        // echarts: true,

        // install flowchart.ts before enabling it
        // flowchart: true,

        // gfm requires mathjax-full to provide tex support
        // gfm: true,

        // install mermaid before enabling it
        // mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // install @vue/repl before enabling it
        // vuePlayground: true,
      },

      // uncomment these if you want a PWA
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cacheImage: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },

      // install @vuepress/plugin-revealjs before enabling it
      // revealjs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
    },
  },
  { custom: true },
);
