<template>
   <AppHeader />
   <FormCreateEdit :form="form" :isInsert="checkParamId()" @update="UpdateItem">
      <h5>Sửa đơn xin nghỉ phép</h5>
   </FormCreateEdit>
   <AppFooter />
</template>
 
<script>
import AppFooter from '../../../components/AppFooter.vue';
import AppHeader from '../../../components/AppHeader.vue';
import FormCreateEdit from '../../../components/Form/FormCreateEdit.vue';

export default {
   name: 'EditForm',
   components: { FormCreateEdit, AppFooter, AppHeader },
   data() {
      return {
         form: {}
      }
   },
   methods:{
      checkParamId() {
         const id = this.$route.params.id;
         if (id) return false;
         return true;
      },
      UpdateItem(){
         
      }
   }
}
</script>
 
<style></style>