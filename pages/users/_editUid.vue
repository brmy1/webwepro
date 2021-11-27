<template lang="pug">
b-form
  b-row(align-h="between")
    b-col
      h4 Editar usuário
      small Informação básicas do usuário

    b-col(cols="auto")
      small Imagem de perfil.
      br
      input(type="file" @change="event => upladProfileImage(event)")

  b-row.mt-3
    b-col(sm="12" md="6" )
      b-form-group#fieldset-name(description='Defina o nome do usuário.' label='Nome' label-for='input-name')
        b-form-input#input-name(v-model='form.default' trim)

    b-col(sm="12" md="6" )
      b-form-group#fieldset-lastname(description='Defina o sobrenome usuário.' label='Sobrenome' label-for='input-lastname')
        b-form-input#input-lastname(v-model='form.default' trim)

    b-col
      b-form-group#fieldset-email(description='Email de acesso do usuário.' label='Email' label-for='input-email')
        b-form-input#input-email(v-model='form.default' trim disable)

  b-row.mt-5
    b-col
      h4 Informações de endereço e contato do usuario
      small Informações de endereço e contato do usuário.

  b-row.mt-3
    b-col(sm="12" md="4" )
      b-form-group#fieldset-zip(description='Endereço CEP.' label='CEP' label-for='input-zip')
        b-form-input#input-zip(v-model='form.default' trim)

    b-col(sm="12" md="8" )
      b-form-group#fieldset-street(description='Nome da rua.' label='Rua' label-for='input-street')
        b-form-input#input-street(v-model='form.default' trim)

    b-col
      b-form-group#fieldset-city(description='Cidade.' label='Cidade' label-for='input-city')
        b-form-input#input-city(v-model='form.default' trim)

    b-col(sm="12" md="6" )
      b-form-group#fieldset-email(description='Número de endereço' label='Número' label-for='input-email')
        b-form-input#input-email(v-model='form.default' trim)

  b-row.mt-4
    b-col(sm="12" md="4" )
      b-form-group#fieldset-zip(description='Número de contato Whatsapp, ou número principal.' label='Whatsapp' label-for='input-zip')
        b-form-input#input-zip(v-model='form.default' trim)

    b-col(sm="12" md="8" )
      b-form-group#fieldset-street(description='Número fixo, ou secundario.' label='Número de contato, residencia ou loja.' label-for='input-street')
        b-form-input#input-street(v-model='form.default' trim)

  b-row(align-h="end")
    b-col(cols="auto")
      bottom-default.mt-5(title="Salvar usuário")

</template>

<script>
// import Upload from '@/api/Upload'

export default {
  name: 'EditUserPage',
  data: () => ({
    form: {
      default: ''
    }
  }),
  methods: {
    upladProfileImage (file) {
      // Upload.ProfilePicture(file)
    }
  }
}
</script>

<style lang="sass" scoped>
.form-group
  margin-top: 15px
</style>
