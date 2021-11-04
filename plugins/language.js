import { defineNuxtPlugin, useState } from '@nuxt/bridge'

export default defineNuxtPlugin(function (nuxt) {
  return useState('locale', () => nuxt.ssrContext.req.headers['accept-language']?.split(',')[0]
  )
})
