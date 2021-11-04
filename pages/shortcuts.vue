<template lang="pug">
section
    .container
        .row
            .flex.space-x-1
                .flex-1
                    h1 Atalhos
                    p Preparamos alguns atalhos para você.
                    separator-default
        .row
            .col
                h4.mt-5 Finanças
                p Gerencie a finança do seu estabelecimento de forma eficiente
                .flex.space-x-2
                    .flex-1
                        card-text(title="GANHOS" description="Bruto & Liquido" small)
                    .flex-1
                        card-text(title="COMISSÃO" description="Funcionarios" small)
                    .flex-1
                        card-text(title="CONTAS" description="A pagar & receber" small)

                .flex.space-x-2.mt-5
                    .flex-1
                        n-link(to="/cash")
                            card-text(title="Caixa" color="#656c17" small)
                    .flex-1
                        card-text(title="Extrato" small)
                    .flex-1
                        card-text(title="Historicos" small)
                    .flex-1
                        card-text(title="valor em estoque" small)

                .flex.space-x-2
                    .flex-1
                        card-text(title="Contas a pagar" small)
                    .flex-1
                        card-text(title="Contas a receber" small)

            .col
                h4.mt-10 Empresa
                p Gerencie usuarios, crie tarefas, ou até mesmo altere e crie novas permissões e aréas de trabalho.
                .flex.space-x-2
                    .flex-1
                        card-text(title="Usuarios" small)
                    .flex-1
                        card-text(title="Permissões" small)

                .flex.space-x-2
                    .flex-1
                        card-text(title="Tarefas" small)
                    .flex-1
                        card-text(title="Estoque" small)
                    .flex-1
                        card-text(title="Serviços" small)
                    .flex-1
                        card-text(title="Contratos" small)
                    .flex-1
                        card-text(title="Assinaturas" small)

                .flex.space-x-2
                    .flex-1
                        card-text(title="Cardapio" small)
                    .flex-1
                        card-text(title="Corridas" small)
                    .flex-1
                        card-text(title="Reservas" small)

            .col
                h4.mt-10 Pessoal
                p Analise de ganhos e controle de carteira, horas trabalhadas, detalhes do perfil e mais.
                .flex.space-x-2
                    .flex-1
                        card-text(title="Perfil" small)
                    .flex-1
                        card-text(title="Biografia" small)

                .flex.space-x-2
                    .flex-1
                        card-text(title="Carteira" small)
                    .flex-1
                        card-text(title="Serviços executados" small)
                    .flex-1
                        card-text(title="Ganhos" small)
</template>

<script>
export default {
  data: () => ({})
}
</script>

<style lang="sass" scoped>
    a
        color: #fff
</style>
