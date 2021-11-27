/* eslint-disable no-console */

const state = () => ({})
const getters = {}
const mutations = {}

const actions = {
  success (_state, message) {
    this.$toast.show(message, {
      duration: 1800
    })
  },
  alert (msg) {},
  info (msg) {},
  error (_state, message) {
    this.$toast.error(message, {
      duration: 2200
    })
  }
}

export { state, actions, mutations, getters }
