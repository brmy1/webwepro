<template lang="pug">
div
  b-row
      b-col(sm="12" md="6")
        br
        h5 Todos usuários - {{ $store.state.users.list }}
        small Lista completa de usuários. 1.521

      b-col
        //- form-input(label="Pesquisar" description="Pesquisar todos usuarios." placeholder="Pesquisar")

  b-row.mt-4
    b-col
      card-default(v-for="i in 2" :key="i")
        .row.align-items-center
          b-col(cols="3" md="2")
            thumbnails-default(:size="60")
          b-col
            .ml-4
              h6.bold Fulano da silva
              small fulano2@gmail.com
          //- b-col
            h6 Administrador
            small Permissão
          b-col(cols="auto")
            b-dropdown(size='md' variant='none' toggle-class='text-decoration-none' no-caret)
              template(#button-content)
                span.bv.bds.text-white
              b-dropdown-item Action
              b-dropdown-item Another action
              b-dropdown-item Something else here...

  b-row(align-h="center")
    b-col(cols="auto")
      bottom-default.mt-5.mb-5(title="Exibir mais")

</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'IndexPageUsers',
  mounted () {
    setTimeout(() => { this.getListUsers() }, 500)
  },
  methods: {
    ...mapMutations({
      getListUsers: 'users/getList'
    })
  }
}
</script>
