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
         form: {
            type: '',
            reason: '',
            start_date: '',
            end_date: '',
            employee_id: '',
            employee: ''
         },
         token: localStorage.getItem('token')
      }
   },
   created() {
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
       * get logged in user information
       * @returns mixed
       */
      getUser(){
         axiosClient.get('/profile', {
         headers: {
            Authorization: 'Bearer ' + this.token
         }
      })
         .then((res) => {
            this.form.employee = res.data.name
            this.form.employee_id = res.data.id
         })
      },

      /**
       * call api to insert leave form
       * @returns mixed
       */
      InsertForm() {
         axiosClient.post('/leaves',
            {
               headers: {
                  Authorization: 'Bearer ' + this.token
               }
            }, this.form)
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
