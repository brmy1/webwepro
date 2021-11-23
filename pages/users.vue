<template lang="pug">
  section
    b-container
      b-row
        b-col(cols="6")
          header-default.mb-5(title="Usuários" description="WebwePRO")
        b-col(cols="6")
          p Adicionar usuário

      b-row
        b-col
          nuxt

</template>

<script>
export default {
  name: 'PageUsers',
  data: () => ({
    menuOptions: [
      {
        name: 'Todos',
        desc: 'Visualize a lista completa de usuários.',
        link: '/users'
      },
      {
        name: 'Clientes',
        desc: 'Lista completa de clientes.',
        link: '/users/new'
      },
      {
        name: 'Fornecedores',
        desc: 'Lista de fornecedores.',
        link: '/users/new'
      },
      {
        name: 'Equipe',
        desc: 'Lista completa da sua equipe.',
        link: '/users/new'
      },
      {
        name: 'Cadastrar',
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
    GoPage (i) {
      this.$router.push(i)
    },

    AddAccount () {
      return false
    }
  }
}
</script>

<style lang="sass" scoped>
.bgdark
  background-color: #181a1e
  cursor: pointer
</style>
