<template>
  <div class="row">
    <div class="col-md-2 sidebar p-0 m-0 bg-menu">
      <AppMenu />
    </div>
    <div class="col-md-10 p-0 m-0">
      <AppHeader />

<!--   Form detail   -->

      <AppFooter />
    </div>
  </div>

</template>

<script>
import AppFooter from '../../../components/AppFooter.vue';
import AppHeader from '../../../components/AppHeader.vue';
import AppMenu from '../../../components/AppMenu.vue';

export default {
  name:'CreateForm',
  components:{AppFooter, AppHeader, AppMenu},

}
</script>

<style>

</style>