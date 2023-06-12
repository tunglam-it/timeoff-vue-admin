<template>
<div class="row">
   <div class="col-md-2 sidebar p-0 m-0 bg-menu">
     <AppMenu />
  </div>
  <div class="col-md-10 p-0 m-0">
   <!-- <AppHeader /> -->

  <AppFooter />
  </div>
</div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppMenu from '../components/AppMenu.vue';
import CreateForm from '../views/pages/Form/new.vue'

export default {
   components:{
      AppFooter, AppHeader, AppMenu, CreateForm
   }
}
</script>