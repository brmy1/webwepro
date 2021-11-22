<template lang="pug">
  section
    b-container
      b-row
        b-col
          header-default.mb-3(title="Usuários" description="WebwePRO")
          //-
            hr.bre.aez
            b-button(v-b-modal.modalCenter2) Launch centered modal
            modal-default(id="modalCenter2")

          b-row
            b-col.mt-4
              b-list-group
                b-list-group-item.flex-column.align-items-start.p-4(
                  v-for="i in menuOptions"
                  :key="i.link"
                  :class="`${i.link === $route.path ? 'bg-primary':'bgdark'}`"
                  @click.prevent="goPage(i.link)"
                  )
                  .d-flex.w-100.justify-content-between
                    h6 {{ i.name }}
                      br
                      small(:class="`${$route.path === i.link || 'text-muted'}`") {{ i.desc }}
          b-row
            b-col(sm="hidden")
              hr.bre.aez
              small WebwePRO. Todos os direitos reservados. §2021.

        b-col(sm="12" md="8")
          nuxt

</template>

<script>
export default {
  name: 'PageUsers',
  data: () => ({
    menuOptions: [
      {
        name: 'Todos usuários',
        desc: 'Visualize a lista completa de usuários.',
        link: '/users'
      },
      {
        name: 'Novo usuário',
        desc: 'Adicionar um usuário.',
        link: '/users/new'
      },
      {
        name: 'Permissões',
        desc: 'Gerencie permissões e acessos.',
        link: '/users/permissions'
      }
    ]
  }),
  methods: {
    goPage (i) {
      this.$router.push(i)
    }
  }
}
</script>

<style lang="sass" scoped>
.bgdark
  background-color: #181a1e
  cursor: pointer
</style>
