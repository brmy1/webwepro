<template lang="pug">
    card-default
      .row.mt-2
        .col-2
          thumbnails-default(:size="55" :img="img")

        .col
          h5 {{ title }}
          p {{ description }}
</template>

<script>
export default {
  name: 'CardInfo',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    description: {
      type: String,
      default: 'description'
    },
    img: {
      type: String,
      default: 'img'
    }
  }
}
</script>
