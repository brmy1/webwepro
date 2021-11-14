<template lang="pug">
    card-default
        .container
            b-row(v-if="localization")
                b-col
                    small @/components/custom/ProfileInfo.vue

            b-row
                b-col(sm="12" md="3")
                    thumbnails-default(:size="142")

                b-col
                    b-row
                        b-col(sm="12" md="12")
                            h3 {{ fullname }}
                            p {{ email }}
                    b-row.mt-2
                        b-col(sm="12" md="3")
                            small Serviços
                            h4 {{ services }}
                        b-col
                            small Ganhos
                            h4 {{ gain }}
                        b-col
                            small Gastos
                            h4 {{ loss }}
                        b-col(sm="12" md="2")
                            small Agenda
                            h4 {{ schedule }}
</template>

<script>
export default {
  name: 'ProfileInfo',
  props: {
    img: {
      type: String,
      default: ''
    },
    fullname: {
      type: String,
      default: 'fullname'
    },
    email: {
      type: String,
      default: 'email'
    },
    services: {
      type: Number,
      default: 0
    },
    gain: {
      type: Number,
      default: 0
    },
    loss: {
      type: Number,
      default: 0
    },
    schedule: {
      type: Number,
      default: 0
    },
    localization: {
      type: Boolean,
      default: false
    }
  }
}
</script>
