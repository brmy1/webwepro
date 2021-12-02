import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'mixinUsersFunctions',
  mounted () {
    this.getList()
  },
  computed: {
    ...mapGetters({
      usersLoading: 'modules/users/loading',
      usersList: 'modules/users/list',
      usersListQtd: 'modules/users/listQtd',
      usersViewUser: 'modules/users/viewUser'
    })
  },
  methods: {
    async addDocumentUser (form) {
      await this.add(form).then((e) => {
        this.getUser(e.id)
        this.success('Usuário adicionado com sucesso.', {
          text: 'Visualizar',
          onClick: () => { this.$router.push({ path: 'users/view' }) }
        })
      }).catch(() => {
        this.error('Erro ao adicionar usuario.', {
          text: 'Tentar novamente',
          onClick: () => { this.addDocumentUser(form) }
        })
      }).finally(() => {
        this.$router.go(-1)
      })
    },
    async viewDocumentUser (uid) {
      await this.getUser(uid)
      this.$router.push({ path: '/users/view' })
    },
    async goEditDocumentUser (uid) {
      await this.getUser(uid)
      this.$router.push({ path: '/users/edit' })
    },
    async attDocumentUser (uid, form) {
      await this.att(uid, form).then(() => {
        this.getList()
        this.getUser(uid)
        this.success('Usuário atualizado com sucesso.', {
          text: 'Visualizar',
          onClick: () => { this.$router.push({ path: 'users/view' }) }
        })
      }).catch(() => {
        this.error('Erro ao atualizar usuario.', {
          text: 'Tentar novamente',
          onClick: () => { this.attDocumentUser(uid, form) }
        })
      }).finally(() => {
        this.$router.go(-1)
      })
    },
    async removeDocumentUser (uid, redirectBack) {
      await this.remove(uid)
        .then(() => {
          this.success('Usuário removido com sucesso.')
          // this.$store.commit('modules/users/setViewDoc', false)
          if (redirectBack) {
            this.$router.go(-1)
          }
        })
        .catch(() => {
          this.error('Erro ao remover usuário.', {
            text: 'Tentar novamente',
            onClick: () => this.removeDocument()
          })
        })
    },
    ...mapActions('modules/users', ['add', 'att', 'getList', 'getUser', 'remove']),
    ...mapActions('modules/notification', ['success', 'error'])
  }
}
