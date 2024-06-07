export default defineNuxtConfig({
    $production: {
        routeRules: {
            "/**": { isr: true }
        }
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    // $development: {
        
    // },
    // runtimeConfig: {
    //     apiSecret: "123",
    //     public: {
    //         apiBase: "/api"
    //     }
    // }
})