import {createRouter, createWebHistory} from "vue-router";
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import CreateForm from '../src/views/pages/Form/new.vue';
import DetailForm from '../src/views/pages/Form/detail.vue';
import Dashboard from './layouts/Dashboard.vue'
import ManageUser from "../src/views/pages/Form/manage.vue";
import InfoAccount from "../src/views/pages/info.vue";

const routes = [
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path:'/',
        name:'dashboard',
        component: Dashboard
    },
    {
        path:'/form',
        name:'form',
        component: CreateForm
    },
    {
        path:'/detail',
        name:'detail',
        component: DetailForm
    },
    {
        path: '/manage',
        name: 'manage-user',
        component: ManageUser
    },
    {
        path: '/info',
        name: 'account-info',
        component: InfoAccount
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
