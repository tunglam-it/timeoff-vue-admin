<template>
 <div class="row">
    <div class="col-md-2 sidebar p-0 m-0 bg-menu">
      <AppMenu />
    </div>
    <div class="col-md-10 p-0 m-0">
      <AppHeader />
      <FormCreateEdit >
         <h5>Thêm mới đơn xin nghỉ phép</h5>
      </FormCreateEdit>
      <AppFooter />
    </div>
  </div>
   
</template>

<script>
import AppFooter from '../../../components/AppFooter.vue';
import AppHeader from '../../../components/AppHeader.vue';
import AppMenu from '../../../components/AppMenu.vue';
import FormCreateEdit from '../../../components/Form/FormCreateEdit.vue';

export default {
   name:'CreateForm',
   components:{FormCreateEdit, AppFooter, AppHeader, AppMenu},

}
</script>

<style>

</style>