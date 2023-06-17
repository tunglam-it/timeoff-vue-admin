import { createRouter, createWebHistory } from "vue-router";
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import CreateForm from '../src/views/pages/Form/new.vue';
import EditForm from '../src/views/pages/Form/edit.vue';
import DetailForm from '../src/views/pages/Form/detail.vue';
import Dashboard from './layouts/Dashboard.vue'
import UserManage from "../src/views/pages/Form/manage.vue";
import ManageRoles from '../src/components/Admin/ManageRoles.vue'
import InfoAccount from "../src/views/pages/info.vue";
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
        path: '/create-form',
        name: 'create-form',
        component: isAuthenticated ? CreateForm :Login
    },
    {
        path: '/edit-form/:id',
        name: 'edit-form',
        component: isAuthenticated ? EditForm :Login
    },
    {
        path: '/detail',
        name: 'detail',
        component: isAuthenticated ? DetailForm : Login
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
