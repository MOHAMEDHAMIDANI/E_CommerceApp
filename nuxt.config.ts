// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    'nuxt-icon', 
    'nuxt-lodash', 
    // '@nuxtjs/supabase', 
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
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
