<template lang="pug">
div
  b-row
      b-col(sm="12" md="6" v-if="listQtd > 0")
        br
        h5 Todos usuários
        small Lista completa de usuários. {{ listQtd }}

      b-col
        //- form-input(label="Pesquisar" description="Pesquisar todos usuarios." placeholder="Pesquisar")

  b-row.mt-4
    b-col(v-if="loading === 'getList'")
      p carregando

    b-col(v-else-if="loading !== 'getList' && listQtd === 0")
      card-default
        .p-2
          h6 Nada encontrado por aqui.

    b-col(v-else-if="listQtd > 0")
      card-default(v-for="item in list" :key="item.uid")
        .row.align-items-center
          b-col(cols="3" md="2")
            thumbnails-default(:size="60")
          b-col
            .ml-4(@click="viewDocument(item.uid)")
              h6.bold {{ item.name }}
              small {{ item.email }}
          //- b-col
            h6 Administrador
            small Permissão
          b-col(cols="auto")
            b-spinner.me-3(small variant="primary" v-if="loading && item.uid === view")
            b-dropdown(v-else size='md' variant='none' toggle-class='text-decoration-none' no-caret)
              template(#button-content)
                span.bv.bds.text-white
              b-dropdown-item(@click="removeDocument(item.uid)") Remover

  b-row(align-h="center" v-if="!loading && listQtd > 0")
    b-col(cols="auto")
      bottom-default.mt-5.mb-5(title="Exibir mais")

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'IndexPageUsers',
  data: () => ({
    view: ''
  }),
  computed: {
    ...mapGetters('modules/users', ['loading', 'list', 'listQtd', 'viewUser'])
  },
  mounted () {
    this.getList()
  },
  methods: {
    async viewDocument (uid) {
      this.view = uid
      await this.getUser(uid)
      this.$router.push({ path: '/users/view' })
    },

    removeDocument (uid) {
      const view = this.view = uid
      this.remove(uid)
        .then(() => { this.success('Usuário removido com sucesso.') })
        .catch(() => {
          this.error('Erro ao remover usuário.', {
            text: 'Tentar novamente',
            onClick: () => this.removeDocument(view)
          })
        })
    },
    ...mapActions('modules/users', ['getList', 'getUser', 'remove']),
    ...mapActions('modules/notification', ['success', 'error'])
  }
}
</script>
