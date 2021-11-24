<template lang="pug">
section
    button.ce.ni(type='button')
        span.bv(:class="icon" @click.prevent.stop="action")
            |   &nbsp;{{ title }}

</template>

<script>
export default {
  name: 'ComponentBottomDefault',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    icon: {
      type: String,
      default: ''
    },
    action: {
      type: Function,
      default: () => alert('oi mundo')
    }
  }
}
</script>
