<template lang="pug">
nav
  b-row
    b-col
      h6.bqq.text-secondary {{ description }}
      h2.bqp {{ title }}

    b-col(v-if="date" cols="6")
      .bpy.bqt.align-bottom
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
