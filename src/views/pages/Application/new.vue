<template>
  <ApplicationCreateEdit :form="form" :isInsert="isInsertUpdate" @insert="insertForm">
    <h5>Thêm mới đơn xin nghỉ phép</h5>
  </ApplicationCreateEdit>
</template>

<script>
import ApplicationCreateEdit from '../../../components/Application/ApplicationCreateEdit.vue';
import axiosClient from '../../../axiosClient.js';
import isInsertUpdateMixin from "../../../mixins/isInsertUpdateMixin.js";

export default {
  name: 'CreateApplication',
  components: {ApplicationCreateEdit},
  mixins: [isInsertUpdateMixin],
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
    insertForm() {
      axiosClient.post('/leaves', this.form, {
            headers: {
              Authorization: 'Bearer ' + this.token
            }
          }
      )
          .then(() => {
            this.$router.push('/list')
          })
          .catch((error) => {
            console.log(error);
          })
    }
  }
}
</script>
