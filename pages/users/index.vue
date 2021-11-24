<template lang="pug">
div
  b-row
      b-col(sm="12" md="6")
        br
        h5 Todos usuários
        small Lista completa de todos usuários. 1.521

      b-col
        form-input(label="Pesquisar" description="Pesquisar todos usuarios." placeholder="Pesquisar")

  b-row.mt-4
    b-col
      card-default(v-for="i in 8" :key="i")
        .row.align-items-center
          b-col(sm="2" md="1")
            thumbnails-default(:size="60")
          b-col
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
</template>

<script>
export default {
  name: 'IndexPageUsers'
}
</script>
