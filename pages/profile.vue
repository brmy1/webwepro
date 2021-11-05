<template lang="pug">
section
  header-default(title="Perfil" description="Fulano@gmail.com")
  .container
    .row.mt-2.g-2
      .col-12
        custom-ProfileInfo(fullname="Fulano Da Silva Jr" email="fulano2@gmail.com" img="" :services="58" :gain="2441.14" :loss="214.12" :schedule="15")

      .col-12
        .row.mt-4
          .col
            h6 Funções
            p Gerencie o perfil
        .row.mt-2
          .col
            ul
              li item 1
              li item 1
              li item 1
              li item 1
          .col
            ul
              li item 1
              li item 1
              li item 1
              li item 1
          .col
            ul
              li item 1
              li item 1
              li item 1
              li item 1
          .col
            ul
              li item 1
              li item 1
              li item 1
              li item 1
    .row.mt-4.g-2
      .col
        list-basic(title="Extrato financeiro" :list="list")

      .col
        list-basic(title="Historico de atividade" :list="money")

    //- .row
      .col.mt-4
        h5 Tarefas a serem executadas nessa pagina
        ul
          li informações - OK
          li Ganhos - OK
          li Gastos - OK
          li Serviços executados - OK
          li Extrato - OK
          li Historico de atividade - OK
          li Barra de atividades - dono
            small &nbsp;(Como por exemplo: Bloquear, Editar Perfil, Adicionar Fundos, ente outros...)
          li Barra de atividades - funcionario
            small &nbsp;(como por exemplo: Ocultar saldo, ver extrato completo de movimentações)

</template>

<script>
export default {
  name: 'PageProfile',
  data: () => ({
    list: [
      { name: 'Serviço executado', value: 'R$ 10,2', up: true },
      { name: 'Produto vendido', value: 'R$ 199,20', up: true },
      { name: 'Serviço executado', value: 'R$ 2.255,10', down: true }
    ],
    money: [
      { name: 'Manutenção de computador', value: 'R$ 125,12', up: true },
      { name: 'limpeza de placa', value: 'R$ 2.846', up: true },
      { name: 'Recuperação de sistema', value: 'R$ 377,10', up: true }
    ]
  })
}
</script>
