<template lang="pug">
nav
    .container
        .grid.grid-flow-col
            n-link.bqc.brd(to='/')
                span.bv.bhc.bqd

        .grid.grid-flow-col.mt-5
            #nav-toggleable-md.collapse.bpd
                form.bqe
                    input.form-control(type='text' placeholder='Pesquisa ampla.')
                    button.nz(type='submit')
                        span.bv.bhw

                ul.nav.pb.nav-stacked.wz
                    li.axq $nome_do_estabelecimento
                    li.pa
                        n-link.oy(to="/" :class="$route.path === '/'? 'active' :''") Resumo
                    li.pa
                        n-link.oy(to='/shortcuts' :class="$route.path === '/shortcuts'? 'active' :''") Atalhos

                    li.axq Finanças
                    li.pa
                        n-link.oy(to="/cash" :class="$route.path === '/cash'? 'active' :''") Caixa
                    li.pa
                        a.oy(href='index.html') Extratos
                    li.pa
                        a.oy(href='order-history/index.html') Historico

                    li.axq Gerenciamento
                    li.pa
                        a.oy(href='order-history/index.html') Estoque
                    li.pa
                        a.oy(href='order-history/index.html') Produtos
                    li.pa
                        a.oy(href='order-history/index.html') Serviços

                    li.axq Usuarios
                    li.pa
                        a.oy(href='index.html') Permissões
                    li.pa
                        a.oy(href='index.html') Funcionarios
                    li.pa
                        a.oy(href='order-history/index.html') Clientes

                    li.axq Suporte
                    li.pa
                        a.oy(href='order-history/index.html') Chat online.
                    li.pa
                        n-link.oy(to="/help" :class="$route.path === '/help'? 'active' :''") API

                hr.bre.aez

</template>
