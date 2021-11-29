<template lang="pug">
b-form
  b-row(align-h="between")
    b-col
      h5 Adicionar um novo usuário
      small Informação básicas do usuário

    b-col(cols="auto")
      small Imagem de perfil.
      br
      input(type="file" @change="event => upladProfileImage(event)")

  b-row.mt-3.g-2
    b-col(sm="12" md="6" )
      b-form-group#fieldset-name(description='Defina o nome do usuário.' label='Nome' label-for='input-name')
        b-form-input#input-name(v-model='form.name' trim)

    b-col(sm="12" md="6" )
      b-form-group#fieldset-lastname(description='Defina o sobrenome usuário.' label='Sobrenome' label-for='input-lastname')
        b-form-input#input-lastname(v-model='form.lastname' trim)

    b-col(sm="12" md="8")
      b-form-group#fieldset-email(description='Email de acesso do usuário.' label='Email' label-for='input-email')
        b-form-input#input-email(v-model='form.email' trim)

    b-col(sm="12" md="4")
      b-form-group#fieldset-birth(description='Data de nascimento' label='Nascimento' label-for='input-birth')
        b-form-input#input-birth(v-model='form.birth' trim)

  b-row.mt-5
    b-col
      h5 Documentação
      small Informações de documentação do usuário.

  b-row.mt-3.g-2
    b-col(sm="12" md="6" )
      b-form-group#fieldset-cpf(description='Documento de identificação unico. CPF.' label='CPF' label-for='input-cpf')
        b-form-input#input-cpf(v-model='form.document.cpf' trim)

    b-col(sm="12" md="6" )
      b-form-group#fieldset-rg(description='Documento Registro Geral.' label='RG' label-for='input-rg')
        b-form-input#input-rg(v-model='form.document.rg' trim)

  b-row.mt-5
    b-col
      h5 Endereço
      small Informações de endereço do usuário.

  b-row.mt-3.g-2
    b-col(sm="12" md="2" )
      b-form-group#fieldset-zip(description='Endereço CEP.' label='CEP' label-for='input-zip')
        b-form-input#input-zip(v-model='form.address.zip' trim)

    b-col(sm="12" md="4" )
      b-form-group#fieldset-street(description='Nome da rua.' label='Rua' label-for='input-street')
        b-form-input#input-street(v-model='form.address.street' trim)

    b-col(sm="12" md="6" )
      b-form-group#fieldset-complement(description='Complemento, Loja, Casa, Apt.' label='Complemento' label-for='input-complement')
        b-form-input#input-complement(v-model='form.address.complement' trim)

    b-col(sm="12" md="8" )
      b-form-group#fieldset-city(description='Cidade.' label='Cidade' label-for='input-city')
        b-form-input#input-city(v-model='form.address.city' trim)

    b-col(sm="12" md="4" )
      b-form-group#fieldset-email(description='Número de endereço' label='Número' label-for='input-email')
        b-form-input#input-email(v-model='form.address.number' trim)

  b-row.mt-5
    b-col
      h5 Contato
      small Informações de contato do usuário.

  b-row.mt-3.g-2
    b-col(sm="12" md="4" )
      b-form-group#fieldset-zip(description='Número de contato Whatsapp, ou número principal.' label='Whatsapp' label-for='input-zip')
        b-form-input#input-zip(v-model='form.contact.tel1' trim)

    b-col(sm="12" md="8" )
      b-form-group#fieldset-street(description='Número fixo, ou secundario.' label='Número de contato, residencia ou loja.' label-for='input-street')
        b-form-input#input-street(v-model='form.contact.tel2' trim)

  b-row(align-h="end")
    b-col(cols="auto")
      span(@click.prevent.stop="addUser()")
        bottom-default.mt-5(title="Adicionar usuário")

</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NewUserPage',
  data: () => ({}),
  computed: {
    formDefault () {
      return {
        name: '',
        lastname: '',
        birth: '',
        email: '',
        address: {
          city: '',
          street: '',
          zip: '',
          number: '',
          complement: ''
        },
        document: {
          cpf: '',
          rg: ''
        },
        contact: {
          tel1: '',
          tel2: ''
        }
      }
    },

    form () { return { ...this.formDefault } }
  },
  methods: {
    addUser () {
      this.add(this.form).then(() => {
        this.success('Usuário adicionado com sucesso.', {
          text: 'Visualizar',
          onClick: () => { this.$router.push({ path: 'users/uid_user_key_here' }) }
        })
      }).catch(() => {
        this.error('Erro ao adicionar usuario.', {
          text: 'Tentar novamente',
          onClick: () => { this.addUser() }
        })
      }).finally(() => {
        this.$router.go(-1)
      })
    },
    ...mapActions('modules/users', ['add']),
    ...mapActions('modules/notification', ['success', 'error'])
  }
}
</script>

<style lang="sass" scoped>
.form-group
  margin-top: 15px
</style>
