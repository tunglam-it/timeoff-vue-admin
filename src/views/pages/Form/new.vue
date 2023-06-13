<template>
  <AppHeader />
  <FormCreateEdit >
     <h5>Thêm mới đơn xin nghỉ phép</h5>
  </FormCreateEdit>
  <AppFooter />
</template>

<script>
import AppFooter from '../../../components/AppFooter.vue';
import AppHeader from '../../../components/AppHeader.vue';
import FormCreateEdit from '../../../components/Form/FormCreateEdit.vue';

export default {
   name:'CreateForm',
   components:{FormCreateEdit, AppFooter, AppHeader},
}
</script>

<style>

</style>