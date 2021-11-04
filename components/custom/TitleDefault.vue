<template lang="pug">
    .container
        h1 {{ title }}
            br
            small {{ description }}
</template>

<script>
export default {
  name: 'TitleDefault',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    description: {
      type: String,
      default: 'description'
    }
  }
}
</script>
