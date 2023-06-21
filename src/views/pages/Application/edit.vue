<template>
  <ApplicationCreateEdit :form="form" :isInsert="isInsertUpdate" @update="updateItem" :roles='roles'>
    <h5>Sửa đơn xin nghỉ phép</h5>
  </ApplicationCreateEdit>
</template>

<script>
import ApplicationCreateEdit from '../../../components/Application/ApplicationCreateEdit.vue';
import axiosClient from '../../../axiosClient.js';
import isInsertUpdateMixin from "../../../mixins/isInsertUpdateMixin.js";

export default {
  name: 'EditApplication',
  mixins: [isInsertUpdateMixin],
  components: {ApplicationCreateEdit},
  data() {
    return {
      form: {},
      token: localStorage.getItem('token'),
      roles: ''
    }
  },
  created() {
    this.getDataLeave(this.$route.params.id)
    this.getUser()
  },
  methods: {
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
          .then((res) => {
            this.form = res.data
          })
          .catch((error) => console.log(error))
    },

    /**
     * call api to update leave form
     * @returns mixed
     */
    updateItem() {
      axiosClient.put(`/leaves/${this.$route.params.id}`, this.form,
          {
            headers: {
              Authorization: 'Bearer ' + this.token
            }
          }
      ).then(() => {
        this.$router.push('/list')
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
          .then((res) => {
            this.roles = res.data.roles
          })
    }
  }
}
</script>
