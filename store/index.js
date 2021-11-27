import Vue from 'vue'
import Vuex from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

// eslint-disable-next-line import/no-named-as-default-member
export const store = new Vuex.Store({ strict: debug })
