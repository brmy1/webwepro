<template lang="pug">
b-row
    b-col
        p perfil do usuario com base no view em store obtido ao clicar em um usuario. {{ viewUser }}
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageViewUser',
  computed: {
    ...mapGetters('modules/users', ['viewUser'])
  },
  mounted () {
    if (this.viewUser === false) {
      this.$router.go(-1)
      // eslint-disable-next-line no-console
      console.log('feito')
    }
  }
}
</script>
