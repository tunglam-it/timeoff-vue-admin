<template>
  <AppHeader v-if="this.getToken"/>
  <router-view></router-view>
  <AppFooter />
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AuthHeader from './components/Auth/AuthHeader.vue';
import AppHeader from './components/AppHeader.vue';

export default {
    components: { AppHeader, AppFooter, AuthHeader },
    computed:{
      getToken(){
        return localStorage.getItem('token');
      }
    }
};
</script>