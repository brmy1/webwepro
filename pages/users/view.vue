<template lang="pug">
section
  b-row
    b-col(sm="12" md="5")

      b-row
        b-col
          h6.bqq.text-muted Usuário { permissão de usuario }
          br
          h1.fw-bold {{ doc.name || 'Nome' }}
            br
            | {{ doc.lastname || 'Sobrenome' }}

      b-row.mt-5
        b-col(cols="6")
          a.d-flex.fw-bold(href="_" @click.prevent.stop="$router.go(-1)") Voltar
        b-col(cols="3")
          a.d-flex.text-muted(href="#" @click.prevent.stop="goEditDocumentUser(uid)")
            icon-default(icon="fi-rr-edit" :size="0.8")
            small.mt-1 Editar
        b-col(cols="3")
          a.d-flex.text-muted(href="#" @click.prevent.stop="removeDocument()")
            icon-default(icon="fi-rr-trash" :size="0.8")
            small.mt-1 Remover

      b-row
        b-col.mt-4
          card-default
            b-row.mt-3
              b-col(cols="2")
                icon-default(icon="fi-rr-cake-birthday")
              b-col
                p {{ doc.birth || 'Data de nascimento indisponível' }}

          card-default.mt-2
            b-row.mt-3
              b-col(cols="2")
                icon-default(icon="fi-rr-flag")
              b-col
                p {{ doc.address.zip ? `${doc.address.zip}. ${doc.address.state}, ${doc.address.city}.` : 'Endereço indisponível' }}

          card-default.mt-2
            b-row.mt-3
              b-col(cols="2")
                icon-default(icon="fi-rr-phone-call")
              b-col
                p {{ doc.contact.tel1 || doc.contact.tel2 || 'Contato indisponível' }}

    b-col(sm="12" md="7")
      b-row.g-2
        b-col(sm="12" md="7")
          card-default
            b-row.mt-3
              b-col(cols="2")
                icon-default(icon="fi-rr-envelope")
              b-col
                p {{ doc.email || 'Email indisponível' }}
        b-col(sm="12" md="5")
          card-default
            b-row.mt-3
              b-col(cols="2")
                icon-default(icon="fi-rr-key")
              b-col
                p {{ permission || 'Usuário padrão' }}

      b-row.g-2
        b-col
          card-default.text-center
            icon-default.mt-2(icon="fi-rr-dollar" :size="1.4")
            h4.fw-bolder 254
            h6.bqq.text-muted Serviços
        b-col
          card-default.text-center
            icon-default.mt-2(icon="fi-rr-shopping-cart-check" :size="1.4")
            h4.fw-bolder 254
            h6.bqq.text-muted Vendas
        b-col
          card-default.text-center
            icon-default.mt-2(icon="fi-rr-list-check" :size="1.4")
            h4.fw-bolder 254
            h6.bqq.text-muted Atividades

      card-default.mt-1
        b-row.mt-3(style="height: 228px;")
          b-col(cols="2")
            icon-default(icon="fi-rr-info")
          b-col
            p Sobre {{ doc.name }} {{ doc.lastname }}

          b-col.mt-4(cols="12")
            p {{ doc.about || 'Nenhuma informação disponível no momento.' }}

  b-col(cols="4")
</template>
<script>
import mixinUsers from '@/mixins/users'

export default {
  name: 'PageViewUser',
  mixins: [mixinUsers],
  computed: {
    permission () {
      return ''
    },
    uid () {
      return this.usersViewUser.uid
    },
    doc () {
      return this.usersViewUser.doc
    }
  },
  beforeMount () {
    if (this.usersViewUser === false) {
      this.$router.go(-1)
    }
  },
  methods: {
    removeDocument (uid) {
      uid = this.uid
      this.removeDocumentUser(uid, true)
    }
  }
}
</script>
