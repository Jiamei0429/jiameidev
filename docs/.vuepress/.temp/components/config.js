import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import FontIcon from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import AudioPlayer from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/components/AudioPlayer.js";
import VideoPlayer from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import ArtPlayer from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import Badge from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import CodePen from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import PDF from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import Replit from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/components/Replit.js";
import StackBlitz from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import YouTube from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import BackToTop from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("AudioPlayer")) app.component("AudioPlayer", AudioPlayer);
    if(!hasGlobalComponent("VideoPlayer")) app.component("VideoPlayer", VideoPlayer);
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("CodePen")) app.component("CodePen", CodePen);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("Replit")) app.component("Replit", Replit);
    if(!hasGlobalComponent("StackBlitz")) app.component("StackBlitz", StackBlitz);
    if(!hasGlobalComponent("YouTube")) app.component("YouTube", YouTube);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
