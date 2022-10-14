// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        cssSourceMap: true,
    },
    css: [
        '~/assets/main.css',
    ],
    head: {
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.png'
        }],
        script: [
            {
                type: 'text/javascript',
                src: '~/assets/js/slider.js',
                body: true
            },
        ]
    }
})
