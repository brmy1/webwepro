<template lang="pug">
b-container
  b-row
      b-col(sm="12" md="6" v-if="usersListQtd > 0")
        br
        h5 Todos usuários
        small Lista completa de usuários. {{ usersListQtd }}

      b-col
        //- form-input(label="Pesquisar" description="Pesquisar todos usuarios." placeholder="Pesquisar")

  b-row.mt-4
    b-col(v-if="usersLoading === 'getList'")
      p carregando

    b-col(v-else-if="usersLoading !== 'getList' && usersListQtd === 0")
      card-default
        .p-2
          h6 Nada encontrado por aqui.

    b-col(v-else-if="usersListQtd > 0")
      card-default(v-for="item in usersList" :key="item.uid")
        .row.align-items-center
          b-col(cols="3" md="2")
            a(href="#" @click.prevent.stop="viewDocument(item.uid)")
              thumbnails-default(:size="60")
          b-col
            a.ml-4(href="#" @click.prevent.stop="viewDocument(item.uid)")
              h6.bold {{ item.name }}
              small {{ item.email }}
          //- b-col
            h6 Administrador
            small Permissão
          b-col(cols="auto")
            b-spinner.me-3(small variant="primary" v-if="usersLoading && item.uid === view")
            b-dropdown(v-else size='md' variant='none' toggle-class='text-decoration-none' no-caret)
              template(#button-content)
                span.bv.bds.text-white
              b-dropdown-item(@click="viewDocument(item.uid)") Visualizar
              b-dropdown-item(@click="removeDocument(item.uid)") Remover

  b-row(align-h="center" v-if="!usersLoading && usersListQtd > 0")
    b-col(cols="auto")
      bottom-default.mt-5.mb-5(title="Exibir mais")

</template>

<script>
import mixinUser from '@/mixins/users'

export default {
  name: 'IndexPageUsers',
  mixins: [mixinUser],
  data: () => ({
    view: ''
  }),
  methods: {
    async viewDocument (uid) {
      this.view = uid
      await this.viewDocumentUser(uid)
    },

    async removeDocument (uid) {
      this.view = uid
      await this.removeDocumentUser(uid)
    }
  }
}
</script>
