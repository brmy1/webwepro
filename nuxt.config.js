export default {
  ssr: false,
  target: 'static',
  layout: 'default',
  pageTransition: 'fade-horizontal',
  loading: { color: '#000' },
  loadingIndicator: {
    name: 'rotating-plane',
    color: 'white',
    background: '#252830'
  },
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
    '@/assets/css/application.css',
    '@/assets/css/uicons-regular-rounded.css',
    '@/assets/sass/transitions.sass'
  ],
  plugins: [
    '@/plugins/firebase',
    '@/plugins/aosvue',
    '@/plugins/notification'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    'nuxt-uid-module'
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  toast: {
    position: 'bottom-right'
  },
  build: {}
}
