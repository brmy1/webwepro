<template lang="pug">
    b-modal(:id="id" centered title="Modal Default")
        p.my-4 Vertically centered modal!
</template>

<script>
export default {
  name: 'ModalDefault',
  props: {
    id: {
      type: String,
      default: 'modal-center'
    }
  }
}
</script>
