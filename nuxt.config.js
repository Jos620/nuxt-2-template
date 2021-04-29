// prettier-ignore
export default {
    // Render mode
    target: 'static',

    // Global Head
    head: {
        title: process.env.npm_package_name || '',
        htmlAttrs: {
            lang: 'pt_BR',
        },
        meta: [
            { charset      : 'utf-8' },
            { name         : 'viewport'         , content : 'width=device-width, initial-scale=1' },
            { hid          : 'description'      , content : '', name    : 'description'           },
            { 'http-equiv' : 'content-language' , content : 'pt-br'                               },
            { 'http-equiv' : 'content-type'     , content : 'text/html; charset=UTF-8'            },
            { name         : 'creator'          , content : 'Mateus Eduardo Ito Silva'            },
            { name         : 'keywords'         , content : ''                                    },

            // Facebook
            { property : 'og:locale'      , content : 'pt_BR'   },
            { property : 'og:type'        , content : 'website' },
            { property : 'og:title'       , content : ''        },
            { property : 'og:description' , content : ''        },
            { property : 'og:url'         , content : ''        },
            { property : 'og:image'       , content : ''        },

            // Twitter
            { name : 'twitter:card'        , content : 'summary' },
            { name : 'twitter:title'       , content : ''        },
            { name : 'twitter:description' , content : ''        }
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
