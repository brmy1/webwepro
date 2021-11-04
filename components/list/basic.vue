<template lang="pug">
section
    .by.afd
        h6.aya {{ title }}
        span.pu.rs.xj.ux(v-for="(item, index) in list" :key="index")
            span {{ item.name }}
            span.awy {{ item.value }}
              small.bpj.bpk(v-if="item.up")
              small.bpj.bpl(v-else-if="item.down")

</template>

<script>
export default {
  name: 'ComponentListBasic',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
