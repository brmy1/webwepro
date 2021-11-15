<template lang="pug">
b-form
  b-row
    b-col
      h4 Adicionar usuario
      small Informação básica do usuário

  b-row.mt-3
    b-col(sm="12" md="6" )
      b-form-group#fieldset-name(description='Defina o nome do usuário.' label='Nome' label-for='input-name' valid-feedback='Thank you!' :invalid-feedback='invalidFeedback' :state='state')
        b-form-input#input-name(v-model='name' :state='state' trim)

    b-col(sm="12" md="6" )
      b-form-group#fieldset-lastname(description='Defina o sobrenome usuário.' label='Sobrenome' label-for='input-lastname' valid-feedback='Thank you!' :invalid-feedback='invalidFeedback' :state='state')
        b-form-input#input-lastname(v-model='name' :state='state' trim)

    b-col
      b-form-group#fieldset-email(description='Email de acesso do usuário.' label='Email' label-for='input-email' valid-feedback='Thank you!' :invalid-feedback='invalidFeedback' :state='state')
        b-form-input#input-email(v-model='name' :state='state' trim)

  b-row.mt-5
    b-col
      h4 Informações de endereço e contato
      small Informações de endereço e contato do usuário.

  b-row.mt-3
    b-col(sm="12" md="4" )
      b-form-group#fieldset-zip(description='Endereço CEP.' label='CEP' label-for='input-zip' valid-feedback='Thank you!' :invalid-feedback='invalidFeedback' :state='state')
        b-form-input#input-zip(v-model='name' :state='state' trim)

    b-col(sm="12" md="8" )
      b-form-group#fieldset-street(description='Nome da rua.' label='Rua' label-for='input-street' valid-feedback='Thank you!' :invalid-feedback='invalidFeedback' :state='state')
        b-form-input#input-street(v-model='name' :state='state' trim)

    b-col
      b-form-group#fieldset-city(description='Cidade.' label='Cidade' label-for='input-city' valid-feedback='Thank you!' :invalid-feedback='invalidFeedback' :state='state')
        b-form-input#input-city(v-model='name' :state='state' trim)

    b-col(sm="12" md="6" )
      b-form-group#fieldset-email(description='Número de endereço' label='Número' label-for='input-email' valid-feedback='Thank you!' :invalid-feedback='invalidFeedback' :state='state')
        b-form-input#input-email(v-model='name' :state='state' trim)

  b-row.mt-4
    b-col(sm="12" md="4" )
      b-form-group#fieldset-zip(description='Número de contato Whatsapp.' label='Whatsapp' label-for='input-zip' valid-feedback='Thank you!' :invalid-feedback='invalidFeedback' :state='state')
        b-form-input#input-zip(v-model='name' :state='state' trim)

    b-col(sm="12" md="8" )
      b-form-group#fieldset-street(description='Número fixo.' label='Número de residencia ou loja.' label-for='input-street' valid-feedback='Thank you!' :invalid-feedback='invalidFeedback' :state='state')
        b-form-input#input-street(v-model='name' :state='state' trim)

  b-row
    b-col
      hr

</template>

<script>
export default {
  name: 'NewUserPage'
}
</script>

<style lang="sass" scoped>
.form-group
  margin-top: 15px
</style>
