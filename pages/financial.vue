<template lang="pug">
section
  header-default(title="Financeiro" description="UTC−3 a hora oficial do Brasil." date)
  .container
    b-row
      b-col(cols="12").mt-4
        custom-ExtractMethodsPayment(debit="R$ 1.250,00" credit="R$ 621,12" money="R$ 8.144,10" gain loss :column="4")
        custom-ExtractMethodsPayment(debit credit money gain="R$ 5.000,12" loss="R$ 125,56" :column="6")

    b-row
      b-col(cols="12")
        br
        br
        h4 Relatorio
        p Um sumario da movimentação geral.
    b-row.g-4
      b-col()
        h1(style="font-size: 80px; margin-top: 40px") 2.1002
        small Movimentação relacionado ao financeiro.

      b-col
        list-basic(title="Movimentação geral" :list="list")

    b-row
      .col
        br
        h4 Extrato
        p Extrato detalhado. Abaixo uma lista com os ultimos 6 itens de cada categoria. (Avançado)

    b-row.g-2
      b-col(sm="12" md="4")
        list-basic(title="Entrada geral" :list="gain")
      b-col(sm="12" md="4")
        list-basic(title="Saida geral" :list="loss")
      b-col(sm="12" md="4")
        list-basic(title="Folha de pagamento" :list="money")

      b-col(sm="6" md="3")
        list-basic(title="Entradas em dinheiro" :list="money")
      b-col(sm="6" md="3")
        list-basic(title="Entradas em Débito" :list="debit")
      b-col(sm="6" md="3")
        list-basic(title="Entradas em Crédito" :list="credit")
      b-col(sm="6" md="3")
        list-basic(title="Outras metodos de entrada" :list="gain")

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
      { name: 'Serviço executado', value: 'R$ 2.255,10', up: true },
      { name: 'Saídas', value: 'R$ 500,00', down: true }
    ],
    gain: [
      { name: 'Dinheiro 1', value: 'R$ 125,12', up: true },
      { name: 'Dinheiro 2', value: 'R$ 2.846', up: true },
      { name: 'Dinheiro 3', value: 'R$ 377,10', up: true }
    ],
    loss: [
      { name: 'Dinheiro 1', value: 'R$ 125,12', down: true },
      { name: 'Dinheiro 2', value: 'R$ 2.846', down: true },
      { name: 'Dinheiro 3', value: 'R$ 377,10', down: true }
    ],
    money: [
      { name: 'Dinheiro 1', value: 'R$ 125,12', up: true },
      { name: 'Dinheiro 2', value: 'R$ 2.846', up: true },
      { name: 'Dinheiro 3', value: 'R$ 377,10', up: true }
    ],
    debit: [
      { name: 'Débito 1', value: 'R$ 184,99', up: true },
      { name: 'Débito 2', value: 'R$ 222,12', up: true },
      { name: 'Débito 3', value: 'R$ 9.841,11', up: true }
    ],
    credit: [
      { name: 'Crédito 1', value: 'R$ 10.584,10', up: true },
      { name: 'Crédito 2', value: 'R$ 21,01', up: true },
      { name: 'Crédito 3', value: 'R$ 350,22', up: true }
    ]
  })
}
</script>
