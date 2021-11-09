<template lang="pug">
section
    .container
        .row
            .col
                header-default(title="Overview" description="DASHBOARDS")
                header-action-default
                header-action-tab
                //- nav-vertical

        .row
            .col
                code Bem vindo aos componentes padrões do app. Visualize melhor com DevTools. Vue, NuxtJS3.
                separator-default // Separador
                list-basic // Lista basica
                separator-default
                separator-tab
                bottom-default
                text-count
                text-title
                icon-default
                card-count
                nav-default
                aside-nav-vertical
                custom-ProfileInfo(fullname="Fulano Da Silva Jr" email="fulano2@gmail.com" img="" :services="58" :gain="2441.14" :loss="214.12" :schedule="15")
                header-default(title="Perfil" description="Fulano@gmail.com")
                list-basic(title="Extrato" :list="list")
                custom-CardProfile(title="Fulano Da Silva Jr" description="fulano2@gmail.com" :imgsize="68" value="80")
                custom-CardInfo(title="Fulano Silva Jr" description="fulano2@gmail.com")

</template>

<script>
export default {
  name: 'PageHelp',
  data: () => ({
    list: [
      { name: 'Serviço executado', value: 'R$ 10,2', up: true },
      { name: 'Produto vendido', value: 'R$ 199,20', up: true },
      { name: 'Serviço executado', value: 'R$ 2.255,10', down: true },
      { name: 'Produto vendido', value: 'R$ 199,20', up: true },
      { name: 'Serviço executado', value: 'R$ 2.255,10', down: true },
      { name: 'Produto vendido', value: 'R$ 199,20', up: true },
      { name: 'Serviço executado', value: 'R$ 2.255,10', down: true }
    ]
  })
}
</script>
