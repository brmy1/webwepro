<template lang="pug">
    .container
        p(v-if="localization") @/components/custom/TitleDefault.vue
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
    },
    localization: {
      type: Boolean,
      default: false
    }
  }
}
</script>
