<template lang="pug">
nav
  .row
    .bqn
      .bqo
        h6.bqq {{ description }}
        h3.bqp {{ title }}

      .bqr(v-if="date")

      .bqr(v-if="date")
        .bpy.bqt
          input.form-control(type='text' value='01/01/15')
          span.bv.bbc

        .ol.bqt.bqv
          span.bqs.bsl
          button.ce.nr(type='button') Dia
          button.ce.nr.active(type='button') Mês
          button.ce.nr(type='button') Ano

</template>

<script>
export default {
  name: 'ComponentHeaderDefault',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    description: {
      type: String,
      default: 'description'
    },
    search: {
      type: Boolean,
      default: false
    },
    date: {
      type: Boolean,
      default: false
    }
  }
}
</script>
