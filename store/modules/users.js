/* eslint-disable no-console */

// # Documento relacional as api's abaixo.
import Document from '@/api/Document.js'

// State, informações obtidas de funções abaixo.
const state = () => ({
  viewDoc: false,
  listUsers: false,
  listQtd: 8,
  loading: false
})

// Funções de tratamento de entrega de dados. unico que obtem informações tratadas_
// do state afim de proteger os dados.
const getters = {
  list (state) {
    const doc = state.listUsers
    const list = []

    for (let i = 0; i < doc.length; i++) {
      const user = doc[i].doc
      const uid = doc[i].uid

      list.push({
        name: `${user.name} ${user.lastname}`,
        email: user.email,
        uid
      })
    }

    return list
  },

  listQtd (state) {
    const doc = state.listUsers
    let qtd = 0

    for (let i = 0; i < doc.length; i++) {
      // eslint-disable-next-line no-unused-vars
      qtd++
    }

    return qtd
  },

  loading (state) {
    const result = state.loading
    return result
  }
}

// funções de execução e obtenção de dados da API. Responsável por enviar as informações para os mutations
const actions = {
  async getList ({ commit, state }) {
    commit('setLoading', 'getList')
    const result = await Document.viewList('users', state.listQtd)
    commit('setList', result)
    commit('setLoading', false)
  },

  async add ({ commit }, form) {
    commit('setLoading', 'addUser')
    const job = await Document.add(form, 'users', {
      success: 'Usuário adicionado com sucesso.',
      error: 'Erro ao adicionar usuario, por favor, tente novamente mais tarde.'
    })
    commit('setLoading', false)
    return job
  },

  async edit ({ commit }, form, uid) {
    commit('setLoading', 'edituser')
    const job = await Document.edit(form, uid, 'users', {
      success: 'Usuário editado com sucesso.',
      error: 'Erro ao editar usuario, por favor, tente novamente mais tarde.'
    })
    commit('setLoading', false)
    return job
  },

  async remove ({ commit, dispatch }, uid) {
    commit('setLoading', 'removeUser')
    await Document.remove(uid, 'users', {
      success: 'Usuario removido com sucesso',
      error: 'Erro ao remover usuario'
    })
    dispatch('getList')
    commit('setLoading', false)
    return true
  }
}

// Funções de mudança de estado. Unico que altera o state.
const mutations = {
  setList (state, i) {
    state.listUsers = i
  },

  setLoading (state, i) {
    state.loading = i
  }
}

export { state, actions, mutations, getters }
