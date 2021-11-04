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
      type: Number,
      default: 0
    },
    credit: {
      type: Number,
      default: 0
    },
    money: {
      type: Number,
      default: 0
    },
    in: {
      type: Number,
      default: 0
    },
    gain: {
      type: Number,
      default: 0
    },
    loss: {
      type: Number,
      default: 0
    },
    column: {
      type: Number,
      default: 3
    }
  }
}
</script>
