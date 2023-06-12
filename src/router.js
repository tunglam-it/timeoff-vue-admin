import {createRouter, createWebHistory} from "vue-router";
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import CreateForm from '../src/views/pages/Form/new.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'

const routes = [
    {
        path:'/',
        name:'defaultLayout',
        component: DefaultLayout
    },
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
        path:'/form',
        name:'form',
        component: CreateForm
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
