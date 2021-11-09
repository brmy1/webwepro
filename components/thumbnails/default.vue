<template lang="pug">
    img.rounded.float-start(:src="img" :width="size")
</template>

<script>
export default {
  name: 'ThumbnailsDefault',
  props: {
    size: {
      type: Number,
      default: 60
    },
    img: {
      type: String,
      default: '//vuero.cssninja.io/images/icons/logos/slicer.svg'
    }
  }
}
</script>
