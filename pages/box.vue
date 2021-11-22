<template lang="pug">
section
  .container
    //- .row
      .col-12
        card-default.text-center
          h1 CAIXA ABERTO
    b-row
      b-col(sm="12" md="8")
        b-row.g-2
          b-col(cols="12")
            .p-4
              card-default
                b-row
                  b-col(cols="12")
                    h2 Pesquisar produtos e serviços
                    form.mt-4.col-12.col-lg-auto.mb-3.mb-lg-0.me-lg-3
                      input.form-control.form-control-dark(type='search' placeholder='Pesquisar...' aria-label='Pesquisar')

          b-col(cols="12")
            card-default
              .p-3
                small.h6 Subtotal
                h2 1.668,14
        b-row.g-2
          b-col
            card-default
              .p-3
                small.h6 Total recebido
                h2 R$ 11,00
          b-col
            card-default
              .p-3
                small.h6 Troco
                h2 R$ 0

      b-col
        b-row
          b-col(cols="12")
            card-default
              .p-3
                small.h6 Código de barras
                h2 132546848456
          b-col(cols="12")
            card-default
              .p-3
                small.h6 Valor Unitario
                h2 R$ 2.665,00
          b-col(cols="12")
            card-default
              .p-3
                small.h6 Código interno
                h2 45689755312

    b-row.mt-4
      b-col
        card-default
          h1 oi mundo

</template>

<script>
export default {
  name: 'PageProfile',
  data: () => ({})
}
</script>
