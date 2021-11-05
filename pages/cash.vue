<template lang="pug">
section
  header-default(title="Caixa" description="UTC−3 a hora oficial do Brasil." date)
  .container
    .row
      .col-12
        br
        br
        custom-ExtractMethodsPayment(debit="R$ 1.250,00" credit="R$ 621,12" money="R$ 8.144,10" gain loss :column="4")
        custom-ExtractMethodsPayment(debit credit money gain="R$ 5.000,12" loss="R$ 125,56" :column="6")
        br

    .row
      .col-12
        br
        br
        h4 Relatorio
        p Um sumario da movimentação geral.
    .row.g-4
      .col-6
        h1(style="font-size: 80px; margin-top: 40px") 2.1002
        small Movimentação geral do caixa em relação ao funcionarios.

      .col-6
        list-basic(title="Movimentação dos usuarios" :list="list")

    .row
      .col
        br
        h4 Extrato
        p Extrato de pagamento.

    .row.g-2
      .col-4
        list-basic(title="Dinheiro" :list="money")
      .col-4
        list-basic(title="Débito" :list="debit")
      .col-4
        list-basic(title="Crédito" :list="credit")

    //- .row
      .col
        br
        h4 Grafico
        p Grafico completo de movimentações.
</template>

<script>
export default {
  data: () => ({
    list: [
      { name: 'Venda realizada', value: 'R$ 10,2', up: true },
      { name: 'Produto vendido', value: 'R$ 199,20', up: true },
      { name: 'Serviço executado', value: 'R$ 2.255,10', down: true }
    ],
    money: [
      { name: 'Dinheiro 1', value: 'R$ 125,12', up: true },
      { name: 'Dinheiro 2', value: 'R$ 2.846', down: true },
      { name: 'Dinheiro 3', value: 'R$ 377,10', up: true }
    ],
    debit: [
      { name: 'Débito 1', value: 'R$ 184,99', down: true },
      { name: 'Débito 2', value: 'R$ 222,12', up: true },
      { name: 'Débito 3', value: 'R$ 9.841,11', down: true }
    ],
    credit: [
      { name: 'Crédito 1', value: 'R$ 10.584,10', up: true },
      { name: 'Crédito 2', value: 'R$ 21,01', up: true },
      { name: 'Crédito 3', value: 'R$ 350,22', down: true }
    ]
  })
}
</script>
