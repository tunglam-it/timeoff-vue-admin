<template>
  <FormDetail :leaves="leaves" :roles="roles" @searchInfo="searchInfo" />
</template>

<script>
import FormDetail from '../../../components/Form/FormDetail.vue';
import axiosClient from '../../../axiosClient.js';

export default {
  name: 'DetailForm',
  components: { FormDetail },
  data() {
    return {
      leaves: [],
      token: localStorage.getItem('token'),
      roles: '',
      query: '',
      start_date: '',
      end_date: '',
      status: ''
    }
  },
  created() {
    this.getAllLeaves(),
    this.getCurrentRole(),
    this.searchInfo()
  },
  methods: {

    /**
     * call api to get all leaves
     */
    getAllLeaves() {
      axiosClient.get('/leaves', {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
      })
        .then((res) => {
          this.leaves = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },

    /***
     * call api to get current role user
     */
    getCurrentRole() {
      axiosClient.get('/profile', {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
      })
        .then((res) => { this.roles = res.data })
    },

    /**
     * search info by query, start_date, end_date, status
     * @param query 
     * @param start_date 
     * @param end_date 
     * @param status 
     */
    searchInfo(query = "", start_date = "", end_date = "", status = "") {
      axiosClient
        .get(`/leaves?param=${query}&start_date=${start_date}&end_date=${end_date}&status=${status}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then((res) => (this.leaves = res.data.data))
        .catch((err) => console.log(err));
    },
  }
}
</script>