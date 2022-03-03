import "vfonts/Inter.css"
import "vfonts/FiraCode.css"
import { createApp } from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"

createApp(App).use(router).mount("#app")
