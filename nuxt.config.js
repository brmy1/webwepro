export default {
  ssr: false,
  target: 'static',
  layout: 'default',
  head: {
    title: 'matheusesturiao',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/toolkit-inverse.css',
    '@/assets/css/application.css'
  ],
  plugins: [
    '@/plugins/firebase'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-uid-module'
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  build: {}
}
