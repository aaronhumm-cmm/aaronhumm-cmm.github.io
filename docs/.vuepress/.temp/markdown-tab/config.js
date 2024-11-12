import { CodeTabs } from "D:/Aaronhumm/person pro/vuepress/aaronhumm-cmm.github.io/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/Aaronhumm/person pro/vuepress/aaronhumm-cmm.github.io/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/Aaronhumm/person pro/vuepress/aaronhumm-cmm.github.io/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
