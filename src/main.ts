import "vfonts/Inter.css"
import "vfonts/FiraCode.css"

import "highlight.js/styles/an-old-hope.css"
import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("javascript", javascript);

import { createApp } from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"

createApp(App).use(router).use(hljsVuePlugin).mount("#app")
