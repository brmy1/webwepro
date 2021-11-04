<template lang="pug">
section
  .container
    .col
      h1 {{ title }}
      p {{ description }}

</template>

<script>
export default {
  name: 'ComponentTextTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 3
    }
  }
}
</script>
