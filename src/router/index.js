import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Transaction from '@/components/Transaction/Transaction'
import Settlement from '@/components/Settlement/Settlement'
import DataManagement from '@/components/DataManagement/DataManagement'
import Business from '@/components/DataManagement/Business/Business'
import Product from '@/components/DataManagement/Product/Product'
import CustomValue from '@/components/DataManagement/CustomValue/CustomValue'
Vue.use(Router)
const About = {
    template: '<div>About US</div>'
}
export const routes = [{
    path: '/',
    name: '首页',
    component: Home
}, {
    path: '/about',
    name: '关于',
    component: About
}, {
    path: '/transaction',
    name: '交易管理',
    component: Transaction
}, {
    path: '/settlement',
    name: '结算单管理',
    component: Settlement
}, {
    path: '/dataManagement',
    name: '数据维护',
    component: DataManagement,
    children: [{
        path: 'business',
        name: '业务场景维护',
        component: Business
    }, {
        path: 'product',
        name: '产品维护',
        component: Product
    }, {
        path: 'customValue',
        name: '统一值列表维护',
        component: CustomValue
    }]
}];
export default new Router({
    routes: routes
})