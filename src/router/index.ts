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
    },
    {
        path: "/natives-methods",
        name: routesNames.nativesMethods,
        component: () => import(/* webpackChunkName: "" */ "@/views/NativesMethods/index.vue"),
    },
    {
        path: "/scope-closures",
        name: routesNames.scopeClosures,
        component: () => import(/* webpackChunkName: "" */ "@/views/ScopeClosures/index.vue"),
    },
    {
        path: "/coercion",
        name: routesNames.coercion,
        component: () => import(/* webpackChunkName: "" */ "@/views/Coercion/index.vue"),
    },
    {
        path: "/grammar",
        name: routesNames.grammar,
        component: () => import(/* webpackChunkName: "" */ "@/views/Grammar/index.vue"),
    },
    {
        path: "/prototyping",
        name: routesNames.prototyping,
        component: () => import(/* webpackChunkName: "" */ "@/views/Prototyping/index.vue"),
    },
    {
        path: "/environments",
        name: routesNames.environments,
        component: () => import(/* webpackChunkName: "" */ "@/views/Environments/index.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
