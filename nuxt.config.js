// prettier-ignore
export default {
    // Render mode
    target: 'static',

    // Global Head
    head: {
        title: process.env.npm_package_name || '',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS
    css: [
        '~/assets/styles/scss/reset.scss', 
        '~/assets/styles/tailwind.css'
    ],

    // Nuxt Modules
    modules: [
        '@nuxtjs/style-resources'
    ],

    // Build Modules
    buildModules: [
        '@nuxtjs/tailwindcss'
    ],

    // SCSS
    styleResources: {
        scss: [
            './assets/styles/**/*.scss'
        ],
    },

    // Auto import components
    components: true,
}
