/* eslint-disable no-console */
import Document from '@/api/Document.js'

export const state = () => ({
  list: 'Nenhum usuario localizado'
})

export const mutations = {
  async getList (state) {
    const result = await Document.viewList('users', 8)
    return result
  },

  add (_state, form) {
    return Document.add(form, 'users', {
      success: 'Usuário adicionado com sucesso.',
      loading: 'Adicionando usuário, aguarde.',
      info: 'Tente novamente mais tarde.',
      error: 'Erro ao adicionar usuario, por favor, tente novamente mais tarde.'
    })
  },

  edit (_state, form, uid) {
    return Document.edit(form, uid, 'users', {
      success: 'Usuário editado com sucesso.',
      loading: 'Editando usuário, aguarde.',
      info: 'Tente novamente mais tarde.',
      error: 'Erro ao editar usuario, por favor, tente novamente mais tarde.'
    })
  }
}
