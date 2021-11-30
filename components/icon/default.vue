<template lang="pug">
section
    i.fi(:class="icon" :style="`color: ${color}; font-size: ${size}rem;`")

</template>

<script>
export default {
  name: 'ComponentIconDefault',
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#cfd2da'
    },
    size: {
      type: Number,
      default: 0.9
    }
  }
}
</script>
