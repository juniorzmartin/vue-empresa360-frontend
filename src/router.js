import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'
import Home from '@/views/Home.vue'
import Indicadores from '@/components/servicos/Indicadores'
import Lead from '@/components/vendas/Lead.vue'
import Leads from '@/components/vendas/Leads.vue'
import Login from '@/views/Login.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import Servico from '@/components/servicos/Servico.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'
import { createRouter, createWebHistory} from 'vue-router'
//createWebHashHistory
const routes = [
    {
        path: '/', //localhost:8080/
        component: Site
    },
    {
        path: '/home', //localhost:8080/home
        alias: '/app',
        component: Home,
        children: [
                { path: 'vendas', component: Vendas, children:      //localhost:8080/home/vendas
                [
                    { path: 'leads', component: Leads, name:'leads'}, //localhost:8080/home/vendas/leads
                    { path: 'leads/:id', component: Lead, name:'lead', alias:['/l/:id','pessoa/:id','/:id']}, //localhost:8080/home/vendas/leads/1
                    { path: 'contratos', component: Contratos, name:'contratos'}, //localhost:8080/home/vendas/contratos
                    { path: '', component: VendasPadrao}  //localhost:8080/home/vendas/   
                ]},                                 
                { path: 'servicos', component: Servicos, name: 'servicos', children: //localhost:8080/home/servicos
                [
                    {path: ':id',alias:'/s/:id', name:"servico",components: 
                        {
                            default: Servico,
                            opcoes: Opcoes,
                            indicadores: Indicadores
                        }
                    }   //localhost:8080/home/servicos/1
                ]}, 
                { path: 'dashboard', components: {
                    default: Dashboard,
                    rodape: DashboardRodape
                }
            } //localhost:8080/home/dashboard

        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login 
    }
]

const router = createRouter({
    history: createWebHistory(), //createWebHashHistory()
    routes //routes: routes
})

export default router
