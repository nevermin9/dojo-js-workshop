import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import routesNames from "./routesNames"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: routesNames.main,
        component: () => import(/* webpackCunkName: "main" */ "@/views/Main/index.vue"),
    },
    {
        path: "/into-programming",
        name: routesNames.intoProgramming,
        component: () => import(/* webpackCunkName: "intoProgramming" */ "@/views/IntoProgramming/index.vue"),
    },
    {
        path: "/into-javascript",
        name: routesNames.intoJavaScript,
        component: () => import(/* webpackCunkName: "intoJavaScript" */ "@/views/IntoJavaScript/index.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
