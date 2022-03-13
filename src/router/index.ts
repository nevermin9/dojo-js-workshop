import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import routesNames from "./routesNames"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: routesNames.main,
        component: () => import(/* webpackChunkName: "main" */ "@/views/Main/index.vue"),
    },
    {
        path: "/into-javascript",
        name: routesNames.intoJavaScript,
        component: () => import(/* webpackChunkName: "intoJavaScript" */ "@/views/IntoJavaScript/index.vue"),
    },
    {
        path: "/types",
        name: routesNames.typesValues,
        component: () => import(/* webpackChunkName: "types" */ "@/views/TypesValues/index.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
