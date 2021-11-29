/* eslint-disable no-console */

const state = () => ({})
const getters = {}
const mutations = {}

const actions = {
  success (_state, message, action) {
    this.$toast.show(message, {
      duration: 1800
    })
  },
  loading (_state, message, action) {
    this.$toast.show(message, {
      duration: 2200,
      action
    })
  },
  error (_state, message, action) {
    this.$toast.error(message, {
      duration: 2200,
      action
    })
  }

  /* alert (_state, message, icon, action) {},
  info (_state, message, icon, action) {}, */
}

/*
  toast default
  this.$toast.show(message, {
    duration: 1800,
    icon: 'users'
    action: {
      text: 'Tentar novamente',
      onClick: () => {}
    }
  })
*/

export { state, actions, mutations, getters }
