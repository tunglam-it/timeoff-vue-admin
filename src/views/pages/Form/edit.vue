<template>
   <AppHeader />
   <FormCreateEdit :form="form" :isInsert="checkParamId()" @update="UpdateItem" :roles='roles'>
      <h5>Sửa đơn xin nghỉ phép</h5>
   </FormCreateEdit>
   {{ this.form }}
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
         form: {},
         token: localStorage.getItem('token'),
         roles: ''
      }
   },
   created() {
      this.getDataLeave(this.$route.params.id),
      this.getUser()
   },
   methods: {
      /**
       * check param id to update or insert
       * @returns boolean
       */
      checkParamId() {
         const id = this.$route.params.id;
         if (id) return false;
         return true;
      },

      /**
       * call api to get leaves data
       * @param id
       * @returns mixed
       */
      getDataLeave(id) {
         axiosClient.get('/leaves/' + id, {
            headers: {
               Authorization: 'Bearer ' + this.token
            }
         })
            .then((res) => { this.form = res.data })
            .catch((error) => console.log(error))
      },

      /**
       * call api to update leave form
       * @returns mixed
       */
      UpdateItem() {
         axiosClient.put(`/leaves/${this.$route.params.id}`, this.form,
         {
            headers: {
               Authorization: 'Bearer ' + this.token
            }
         }
         )
            .then(() => { 
               this.$router.push('/detail') 
            })
            .catch((error) => console.log(error))
      },

      /**
       * get logged in user information
       * @returns mixed
       */
      getUser() {
         axiosClient.get('/profile', {
            headers: {
               Authorization: 'Bearer ' + this.token
            }
         })
            .then((res) => { this.roles = res.data.roles })
      }
   }
}
</script>
 
<style></style>