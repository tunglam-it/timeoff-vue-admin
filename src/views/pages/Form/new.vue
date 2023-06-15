<template>
   <AppHeader />
   <FormCreateEdit :form="form" :isInsert="checkParamId()" @insert="InsertForm">
      <h5>Thêm mới đơn xin nghỉ phép</h5>
   </FormCreateEdit>
   <AppFooter />
</template>

<script>
import AppFooter from '../../../components/AppFooter.vue';
import AppHeader from '../../../components/AppHeader.vue';
import FormCreateEdit from '../../../components/Form/FormCreateEdit.vue';
import axiosClient from '../../../axiosClient.js';

export default {
   name: 'CreateForm',
   components: { FormCreateEdit, AppFooter, AppHeader },
   data() {
      return {
         form: {}
      }
   },
   methods: {
      checkParamId() {
         const id = this.$route.params.id;
         if (id) return false;
         return true;
      },
      InsertForm() {
         axiosClient.post('/leaves', this.form)
            .then((res) => {
               this.$router.push('/detail')
            })
            .catch((error) => {
               console.log(error);
            })
      }
   }
}
</script>

<style></style>