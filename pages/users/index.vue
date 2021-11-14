<template lang="pug">
 b-row
  b-col
    card-default(v-for="i in 10" :key="i")
      .row.align-items-center
        b-col(cols="2")
          thumbnails-default(:size="50")
        b-col
          h6 Fulano da silva
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
