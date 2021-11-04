<template lang="pug">
section
  // card de extrato e balanço
  card-default
    .container
      .row
        .col-7.col-xs-12
          p Grafico mensal

        .col-5.col-xs-12
          .bqs.bsl(style="height: 170px")
          p &nbsp;Balanço

  // card de Dinheiro, Debito, credito e saida
  card-default
    .row.mt-10
      .col-2.text-center
        h4 162
        small Dinheiro

      .col-4.text-center
        .bqs.bsl.mt-1(style="height: 60px")
        h4 R$ 1.835,41
        small Debito

      .col-3.text-center
        .bqs.bsl.mt-1(style="height: 60px")
        h4 378
        small Credito

      .col-3.text-center
        .bqs.bsl.mt-1(style="height: 60px")
        h4 192
        small Saída

  // card de perfil
  //- .row.d-flex
    .col-6(v-for="i in 2" :key="i")
      card-default
        .row
          .col
            .d-flex.ml-15
              img.uo.da.mt-2(width="100px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20190411%2Fourlarge%2Fpngtree-business-male-icon-vector-png-image_916468.jpg&f=1&nofb=1")
            br
            small.b U Learning
            br
            small Online Courses
            br
            br
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fac ista esse non inportuna.

            hr
            .row
              .col-4
                small GANHO
                h5 R$ 864,56
              .col-4
                small SERVIÇOS
                h5 261
              .col-4
                small HORAS TRAB.
                h5 32h

</template>

<script>
export default {}
</script>
