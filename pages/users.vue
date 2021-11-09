<template lang="pug">
    section
        .row
            .col-8
                header-default(title="Usuarios" description="Todos os usuarios registrados")
            .col
                p ...

        .row.mt-5
            .col-12(v-for="i in 10" :key="i")
                card-default
                    .row.align-items-center
                        .col-sm-1.col-md-2
                            thumbnails-default(:size="50")
                        .col
                            h6 Fulano da silva
                            small fulano2@gmail.com
                        //- .col
                            h6 Administrador
                            small Permissão
                        .col-auto
                            b-dropdown(size='lg' variant='link' toggle-class='text-decoration-none' no-caret)
                                template(#button-content)
                                    span.bv.bds
                                b-dropdown-item Action
                                b-dropdown-item Another action
                                b-dropdown-item Something else here...

</template>

<script>
export default {
  name: 'PageUsers'
}
</script>
