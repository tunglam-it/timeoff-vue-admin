<template>
   <FormCreateEdit :form="form" :isInsert="checkParamId()" @insert="InsertForm">
      <h5>Thêm mới đơn xin nghỉ phép</h5>
   </FormCreateEdit>
</template>

<script>
import FormCreateEdit from '../../../components/Form/FormCreateEdit.vue';
import axiosClient from '../../../axiosClient.js';

export default {
   name: 'CreateForm',
   components: { FormCreateEdit },
   data() {
      return {
         form: {
            type: null,
            reason: null,
            start_date: null,
            end_date: null,
            employee_id: null,
            employee: null
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
      getUser() {
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
         axiosClient.post('/leaves', this.form,{
            headers: {
               Authorization: 'Bearer ' + this.token
            }
         }
         )
            .then(() => {
               this.$router.push('/detail')
            })
            .catch((error) => {
               console.log(error);
            })
      }
   }
}
</script>
