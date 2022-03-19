import "vfonts/Inter.css"
import "vfonts/FiraCode.css"

import "highlight.js/styles/an-old-hope.css"
import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"
import xml from "highlight.js/lib/languages/xml";
import shell from "highlight.js/lib/languages/shell";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("shell", shell);

import { createApp } from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"

createApp(App).use(router).use(hljsVuePlugin).mount("#app")
