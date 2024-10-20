// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   components: true,
   modules: [
      "@nuxt/content",
      "@nuxtjs/tailwindcss",
      "@nuxt/image",
      "@nuxt/icon",
   ],
   css: [
      "~/assets/css/global.css",
      "~/assets/css/bgPattern.css",
      "~/assets/css/tailwind.css",
   ],
   routeRules: {
      "/": { prerender: true },
   },
   content: {
      highlight: {
         theme: "material-theme-ocean",
      },
   },
   icon: {
      mode: "svg",
   },
   vite:{
      server:{
         hmr:true // Hot Module Replacement
      }
   },
   compatibilityDate: "2024-10-08",
});
