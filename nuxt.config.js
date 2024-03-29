require('dotenv').config()
const {
  API_BASE_URL,
  AWS_IMAGE_URL,
  BASE_URL,
  API_OGP_BASE_URL,
  AWS_IMAGE_NURIE_URL,
} = process.env
export default {
  head: {
    title: '塗り絵ツクール',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '塗り絵をかんたんに作れるサービスです',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'NurieMaker\r\n塗り絵ツクール',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nurie-maker.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'NurieMaker\r\n塗り絵ツクール',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'You can create an original coloring book easily.\r\n塗り絵をかんたんに作れるサービスです',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'http://ogp-builder.com/MkU6cw/https://nurie-maker.com',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'http://ogp-builder.com/MkU6cw/https://nurie-maker.com',
      },
      { name: 'twitter:site', content: '@yui_active' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${AWS_IMAGE_NURIE_URL}/favicon.ico`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: `${AWS_IMAGE_NURIE_URL}/favicon.ico`,
      },
    ],
  },

  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vueColor.js', mode: 'client' },
    '@/plugins/i18n.js',
    '@/plugins/analytics.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  env: {
    API_BASE_URL,
    AWS_IMAGE_URL,
    BASE_URL,
    API_OGP_BASE_URL,
    AWS_IMAGE_NURIE_URL,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    ['cookie-universal-nuxt', { parseJSON: false }],
  ],
  proxy: {
    '/Moderation/': {
      target: AWS_IMAGE_NURIE_URL,
      changeOrigin: true,
      secure: false,
    },
    '/ogpimg/': {
      target: AWS_IMAGE_URL,
      changeOrigin: true,
      secure: false,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
