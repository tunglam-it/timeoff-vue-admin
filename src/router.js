import { createRouter, createWebHistory } from "vue-router";
import Register from './views/pages/Account/Register.vue';
import Login from './views/pages/Account/Login.vue';
import CreateApplication from '../src/views/pages/Application/new.vue';
import EditApplication from '../src/views/pages/Application/edit.vue';
import ListApplication from '../src/views/pages/Application/index.vue';
import Dashboard from './layouts/Dashboard.vue'
import UserManage from "./views/pages/Account/manage.vue";
import ManageRoles from '../src/components/Admin/ManageRoles.vue'
import InfoAccount from "../src/views/pages/Account/info.vue";
import ListApplicationUser from "../src/views/pages/Account/list.vue";

const isAuthenticated = window.localStorage.getItem('token')
const routes = [
    {
        path: '/register',
        name: 'register',
        component: !isAuthenticated ? Register : Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: !isAuthenticated ? Login : Dashboard
    },
    {
        path: '/',
        name: 'dashboard',
        component: isAuthenticated ? Dashboard : Login
    },

    {
        path: '/create-application',
        name: 'create-application',
        component: isAuthenticated ? CreateApplication :Login
    },
    {
        path: '/edit-application/:id',
        name: 'edit-application',
        component: isAuthenticated ? EditApplication :Login
    },
    {
        path: '/list',
        name: 'list',
        component: isAuthenticated ? ListApplication : Login
    },
    {
        path: '/manage',
        name: 'manage-user',
        component: isAuthenticated ? UserManage : Login
    },
    {
        path: '/manage/:id',
        name: 'manage-user-role',
        component: isAuthenticated ? ManageRoles : Login
    },
    {
        path: '/info',
        name: 'account-info',
        component: isAuthenticated ? InfoAccount : Login
    },
    {
        path: '/list-appli-user',
        name: 'list-appli-user',
        component: isAuthenticated ? ListApplicationUser : Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
