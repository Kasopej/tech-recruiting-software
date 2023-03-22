// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false,
    },
    css: [
        'assets/scss/custom.scss'
    ],
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate']
    },
    tailwindcss: {
        config: {
            plugins: [
                require('@tailwindcss/forms'),
                // ...
              ],
        },
        injectPosition: 'last' 
    }
})
