<template lang="pug">
nav.ch.fixed-bottom
    //- b-col()
        n-link.bqi(to="/")
            span.bv.bhc.bqj

    b-col(cols="12")
        .bqm.bg-dark.text-white
            ul.nav.pb.bqk.zh
                li.pa(v-for="(obj, title, index) in MenuOptions" :key="i")
                    n-link.oy(:to="obj.link" :title="title" :class="`${$route.path !== obj.link || 'active'}`")
                        span.bv(:class="obj.icon")

</template>

<script>
import { ii } from './default.js'

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
  }),
  computed: {
    iu: () => ii()
  }
}
</script>
