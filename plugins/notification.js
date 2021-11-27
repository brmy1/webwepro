import Vue from 'vue'
import notification from 'vue-notification-ui'

Vue.use(notification, {
  position: 'notification-top-right', // top, bottom, left, right
  duration: 5000, // default
  left: 20, // default
  bottom: 20, // default
  top: 20, // default
  right: 40 // default
})

// https://www.npmjs.com/package/vue-toasted
