<template lang="pug">
  .row
    div(:class="`col-${size}`")
      card-default
        .text-center
          a
            .d-flex.justify-content-center
              img.mt-2.mb-4.rounded.float-start(src='//vuero.cssninja.io/images/icons/logos/slicer.svg' :width="imgsize")
            h5 {{ title }}
            p {{ description }}
        .d-flex.justify-content-center(v-if="loading")
          progress.progress(max='100', :value='value')

</template>

<script>
export default {
  name: 'CardProfile',
  props: {
    img: {
      type: String,
      default: 'img'
    },
    imgsize: {
      type: Number,
      default: 110
    },
    title: {
      type: String,
      default: 'title'
    },
    description: {
      type: String,
      default: 'description'
    },
    loading: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 12
    }
  }
}
</script>
