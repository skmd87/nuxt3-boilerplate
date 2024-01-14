// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  typescript: {
    typeCheck: true,
    strict: true,
    shim: false, // assuming running volar with takeover mode
  },
})
