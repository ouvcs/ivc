import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"

import App from "@/App.vue"

import TheMain from "@/views/TheMain.vue"
import TheMap from "@/views/TheMap.vue"
import TheAbout from "@/views/TheAbout.vue"

import Countries from "@/views/Countries.vue"
import CountriesCountry from "@/views/CountriesCountry.vue"

import Valutes from "@/views/Valutes.vue"
import ValutesValute from "@/views/ValutesValute.vue"

import Wiki from "@/views/Wiki.vue"
import WikiPage from "@/views/WikiPage.vue"

import ErrorNotFound from "@/views/ErrorNotFound.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "main", component: TheMain },
        { path: "/map", name: "map", component: TheMap },
        { path: "/about", name: "about", component: TheAbout },

        { path: "/countries", name: "countries", component: Countries },
        { path: "/countries/county/:pathMatch(.*)", component: CountriesCountry },

        { path: "/valutes", name: "valutes", component: Valutes },
        { path: "/valutes/valute/:pathMatch(.*)", component: ValutesValute },

        { path: "/wiki", name: "wiki", component: Wiki },
        { path: "/wiki/:pathMatch(.*)", component: WikiPage },

        { path: "/:pathMatch(.*)", component: ErrorNotFound } 
    ]
});

createApp(App).use(router).mount("#app");