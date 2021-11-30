<template lang="pug">
nav.ch.fixed-bottom
    //- b-col()
        n-link.bqi(to="/")
            span.bv.bhc.bqj

    b-col(cols="12")
      .bqm.text-white
        ul.nav.pb.bqk.zh
          li.pa.mb-4.mt-2
            span.oy
              span.bv.bbc

          li.pa(v-for="(obj, title, index) in MenuOptions" :key="title")
            n-link.oy(:to="obj.link" :title="title" :class="`${$route.path !== obj.link || 'active'}`")
              span.bv(:class="obj.icon")

</template>

<script>
export default {
  name: 'ComponentNavVertial',
  data: () => ({
    MenuOptions: {
      inicio: {
        link: '/',
        icon: 'bgf'
      },
      agenda: {
        link: '/help',
        icon: 'bbc'
      },
      financeiro: {
        link: '/financial',
        icon: 'bjl'
      },
      caixa: {
        link: '/box',
        icon: 'blg'
      },
      usuarios: {
        link: '/users',
        icon: 'bnr'
      },
      produtos: {
        link: '/help',
        icon: 'bch'
      },
      fornecedores: {
        link: '/help',
        icon: 'azl'
      },
      relatorios: {
        link: '/help',
        icon: 'bmo'
      }
    }
  })
}
</script>

<style lang="sass" scoped>
.menu-mobile
  display: flex
  position: fixed
  bottom: 0px
  width: 100%
  height: 50px
</style>
