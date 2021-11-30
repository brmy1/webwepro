<template lang="pug">
  section
    b-container
      b-row(align-h="between")
        b-col(cols="6" v-if="$route.path !== '/users/view'")
          header-default.mb-5(title="Usuários" description="WebwePRO")

        b-col(cols="auto" v-if="$route.path === '/users'")
          n-link(to="/users/new")
            bottom-default(title="Adicionar usuário" icon="ayx" )
        b-col(cols="auto" v-else-if="$route.path === '/users/new'")
          n-link(to="/users")
            bottom-default(title="Voltar para usuários" icon="bbi" color="danger")
        b-col(cols="auto" v-else-if="$route.path === '/users/edit'")
          n-link(to="/users")
            bottom-default(title="Cancelar" icon="bbi" color="danger")

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
  })
}
</script>

<style lang="sass" scoped>
.bgdark
  background-color: #181a1e
  cursor: pointer
</style>
