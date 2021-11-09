<template lang="pug">
    card-default
        .container
            .row(v-if="localization")
                .col
                    small @/components/custom/ProfileInfo.vue

            .row
                .col-3
                    thumbnails-default(:size="142")

                .col
                    .row.mt-1
                        .col-12
                            h3 {{ fullname }}
                            p {{ email }}
                    .row.mt-2
                        .col-3
                            small Serviços
                            h4 {{ services }}
                        .col
                            small Ganhos
                            h4 {{ gain }}
                        .col
                            small Gastos
                            h4 {{ loss }}
                        .col-2
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
