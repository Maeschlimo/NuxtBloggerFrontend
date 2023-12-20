// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi', '@nuxt/image'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    entities: ['posts'],
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  image: {
    strapi: {
      baseURL: process.env.BASE_URL || 'http://localhost:1337/uploads/'
    }
  }
})