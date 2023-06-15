import {createRouter, createWebHistory} from "vue-router";
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import CreateForm from '../src/views/pages/Form/new.vue';
import EditForm from '../src/views/pages/Form/edit.vue';
import DetailForm from '../src/views/pages/Form/detail.vue';
import Dashboard from './layouts/Dashboard.vue'
import UserManage from "../src/views/pages/Form/manage.vue";
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
        path:'/create-form',
        name:'create-form',
        component: CreateForm
    },
    {
        path:'/edit-form/:id',
        name:'edit-form',
        component: EditForm
    },
    {
        path:'/detail',
        name:'detail',
        component: DetailForm
    },
    {
        path: '/manage',
        name: 'manage-user',
        component: UserManage
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
