<template lang="pug">
    .row.gx-2
        div(:class="`col-${column}`" v-if="debit !== ''")
            card-count(:value="debit" description="debito" gain)
        div(:class="`col-${column}`" v-if="credit !== ''")
            card-count(:value="credit" description="credito" gain)
        div(:class="`col-${column}`" v-if="money !== ''")
            card-count(:value="money" description="dinheiro" gain)
        div(:class="`col-${column}`" v-if="gain !== ''")
            card-count(:value="gain" description="entrada" gain)
        div(:class="`col-${column}`" v-if="loss !== ''")
            card-count(:value="loss" description="saida" loss)
</template>

<script>
export default {
  name: 'ComponentEstractMethodsPayment',
  props: {
    debit: {
      type: String,
      default: ''
    },
    credit: {
      type: String,
      default: ''
    },
    money: {
      type: String,
      default: ''
    },
    in: {
      type: String,
      default: ''
    },
    gain: {
      type: String,
      default: ''
    },
    loss: {
      type: String,
      default: ''
    },
    column: {
      type: Number,
      default: 3
    }
  }
}
</script>
