<template lang="pug">
section
  .container
    //- .row
      .col-12
        card-default.text-center
          h1 CAIXA ABERTO
    .row
      .col-8
        .row.g-2
          .col-12
            card-default
              .row
                .col-12
                  h4 Pesquisar
                  form.mt-4.col-12.col-lg-auto.mb-3.mb-lg-0.me-lg-3
                    input.form-control.form-control-dark(type='search' placeholder='Pesquisar...' aria-label='Pesquisar')

                //- .col
                  table.mt-5.ck(data-sort='table')
                    thead
                      tr
                        th.header
                          input#selectAll.bsn(type='checkbox')
                        th.header.headerSortDown #
                        th.header Item
                        th.header Código
                        th.header Qtd
                    tbody
                      tr(v-for="i in 4" :key="i")
                        td
                          input.bso(type='checkbox')
                        td
                          a(href='#') #10001
                        td Chocolate
                        td 12247558741
                        td 40

          .col-12
            card-default
              small Subtotal
              h3 1.668,14
        .row.g-2
          .col
            card-default
              small Total recebido
              h3 R$ 11,00
          .col
            card-default
              small Troco
              h3 R$ 0

      .col
        .row
          .col-12
            card-default
              small Código de barras
              h4 132546848456
          .col-12
            card-default
              small Valor Unitario
              h4 R$ 2.665,00
          .col-12
            card-default
              small Código interno
              h4 45689755312

</template>

<script>
export default {
  name: 'PageProfile',
  data: () => ({})
}
</script>
