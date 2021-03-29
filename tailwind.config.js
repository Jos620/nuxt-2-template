const colors = require('tailwindcss/colors')

// prettier-ignore
module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue'        ,
        './pages/**/*.vue'          ,
        './plugins/**/*.{js,ts}'    ,
        './nuxt.config.{js,ts}'     ,
    ],
    darkMode: false,
    theme: {
        extend: {
            // Color Palette
            colors: {
                github   : '#232323'  ,
                linkedin : '#0a66c2'  ,
                cyan     : colors.cyan,
            },

            // Screen Breakpoints
            screens: {
                xs       : '320px' ,
                cel      : '480px' ,
                md       : '600px' ,
                tablet   : '801px' ,
                notebook : '1025px',
                desktop  : '1291px',
                xl       : '1920px',
                tv       : '1536px',
            },
        },
    },
}
