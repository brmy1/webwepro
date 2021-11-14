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
            card-default
              b-row
                b-col(cols="12")
                  h5 Pesquisar produtos e serviços
                  form.mt-4.col-12.col-lg-auto.mb-3.mb-lg-0.me-lg-3
                    input.form-control.form-control-dark(type='search' placeholder='Pesquisar...' aria-label='Pesquisar')

          b-col(cols="12")
            card-default
              small Subtotal
              h3 1.668,14
        b-row.g-2
          b-col
            card-default
              small Total recebido
              h3 R$ 11,00
          b-col
            card-default
              small Troco
              h3 R$ 0

      b-col
        b-row
          b-col(cols="12")
            card-default
              small Código de barras
              h4 132546848456
          b-col(cols="12")
            card-default
              small Valor Unitario
              h4 R$ 2.665,00
          b-col(cols="12")
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
