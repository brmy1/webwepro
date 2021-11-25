<template lang="pug">
    button.ce.ni(type='button')
        span.bv(:class="icon")
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
    }
  }
}
</script>
