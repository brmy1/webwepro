<template lang="pug">
div
  b-row
      b-col(sm="12" md="6")
        br
        h5 Todos usuários
        small Lista completa de usuários. {{ listQtd }}

      b-col
        //- form-input(label="Pesquisar" description="Pesquisar todos usuarios." placeholder="Pesquisar")

  b-row.mt-4
    b-col
      card-default(v-for="item in list" :key="item.uid")
        .row.align-items-center
          b-col(cols="3" md="2")
            thumbnails-default(:size="60")
          b-col
            .ml-4
              h6.bold {{ item.name }}
              small {{ item.email }}
          //- b-col
            h6 Administrador
            small Permissão
          b-col(cols="auto")
            b-dropdown(size='md' variant='none' toggle-class='text-decoration-none' no-caret)
              template(#button-content)
                span.bv.bds.text-white
              b-dropdown-item(@click="removeDocument(item.uid)") Remover

  b-row(align-h="center")
    b-col(cols="auto")
      bottom-default.mt-5.mb-5(title="Exibir mais")

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'IndexPageUsers',
  computed: {
    ...mapGetters('modules/users', ['loading', 'list', 'listQtd'])
  },
  mounted () {
    this.getList()
  },
  methods: {
    removeDocument (uid) {
      this.remove(uid)
        .then(() => { this.success('Usuário removido com sucesso.') })
        .catch(() => { this.error('Erro ao remover usuário.') })
    },
    ...mapActions('modules/users', ['getList', 'remove']),
    ...mapActions('modules/notification', ['success', 'error'])
  }
}
</script>
