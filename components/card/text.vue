<template lang="pug">
section
    .brh.agv.aew.rounded.shadow-2xl(:style="`background-color: ${color}`")
        h5.bph(v-if="!small") {{ title }}
        p.bph(v-else) {{ title }}
            small.bpk {{ action }}
        small.bpi {{ description }}

</template>

<script>
export default {
  name: 'ComponentCardText',
  props: {
    title: {
      type: String,
      required: true
    },
    action: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: '#181a1e'
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  methods: {
    colorSwitch (color) {
      return color
    }
  }
}
</script>
