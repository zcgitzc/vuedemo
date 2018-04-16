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
    name: 'A',
    component: Transaction
}, {
    path: '/settlement',
    name: 'B',
    component: Settlement
}, {
    path: '/dataManagement',
    name: 'C',
    component: DataManagement,
    children: [{
        path: 'business',
        name: 'D',
        component: Business
    }, {
        path: 'product',
        name: 'E',
        component: Product
    }, {
        path: 'customValue',
        name: 'F',
        component: CustomValue
    }]
}];
export default new Router({
    routes: routes
})