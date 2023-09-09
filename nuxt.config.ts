// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@nuxtjs/supabase',
    '@formkit/auto-animate',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    // '@nuxt/image'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public : {
      stripePk : process.env.STRIPE_PK_KEY
    }
  },
  app :{
    head : {
      script : [
        {
        src : 'https://js.stripe.com/v3/' , defer : true }
      ],
    }
  }
})