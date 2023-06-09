import { defineClientConfig } from "@vuepress/client";
import VPCard from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/components/VPCard.js";
import ChartJS from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import "C:/Users/48642/Desktop/mark/node_modules/reveal.js/dist/reveal.css";
import Presentation from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import { defineAsyncComponent } from "vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("VPCard", VPCard)
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("C:/Users/48642/Desktop/mark/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
    
  },
});
