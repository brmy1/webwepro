<template lang="pug">
section
    .brh.agv.aew.rounded.shadow-inner(:style="`background-color: ${color}`")
        span.bpi {{ description }}
        //- .d-none.d-sm-block.d-md-none
          p.bph
            | {{ value }}

        h4.bph
          | {{ value }}
          small.bpj(v-if="action") {{ action }}
          small.bpj.bpk(v-else-if="gain") {{ action }}
          small.bpj.bpl(v-else-if="loss") {{ action }}

</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'value',
      required: true
    },
    description: {
      type: String,
      default: 'description',
      required: false
    },
    action: {
      type: String,
      default: ''
    },
    gain: {
      type: Boolean,
      default: false
    },
    loss: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#181a1e',
      required: false
    }
  },
  data: () => ({})
}
</script>
