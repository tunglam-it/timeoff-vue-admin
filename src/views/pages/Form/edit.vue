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
import axiosClient from '../../../axiosClient.js';

export default {
   name: 'EditForm',
   components: { FormCreateEdit, AppFooter, AppHeader },
   data() {
      return {
         form: {}
      }
   },
   created(){
      this.getDataLeave(this.$route.params.id)
   },
   methods:{
      checkParamId() {
         const id = this.$route.params.id;
         if (id) return false;
         return true;
      },
      getDataLeave(id){
         axiosClient.get('/leaves/'+id)
         .then((res)=>{this.form = res.data})
         .catch((error)=>console.log(error))
      },
      UpdateItem(){
         axiosClient.put(`/leaves/${this.$route.params.id}`, this.form)
         .then(()=>this.$router.push('/detail'))
         .catch((error)=>console.log(error))
      }
   }
}
</script>
 
<style></style>