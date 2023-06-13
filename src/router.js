import {createRouter, createWebHistory} from "vue-router";
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import CreateForm from '../src/views/pages/Form/new.vue'
import Dashboard from './layouts/Dashboard.vue'

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
        component: CreateForm
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
