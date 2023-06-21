<template>
  <ApplicationList @approveLeave="approveLeave" @rejectLeave="rejectLeave" :leaves="leaves" :roles="roles" @searchInfo="getAllLeaves" @confirmDelete="confirmDelete"/>
</template>

<script>
import ApplicationList from '../../../components/Application/ApplicationList.vue';
import axiosClient from '../../../axiosClient.js';

export default {
  name: 'ListApplication',
  components: {ApplicationList},
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
    this.getAllLeaves()
    this.getCurrentRole()
  },
  methods: {

    /**
     * call api to get all leaves or search info
     */
    getAllLeaves(query = "", start_date = "", end_date = "", status = "") {
      axiosClient.get(`/leaves?param=${query}&start_date=${start_date}&end_date=${end_date}&status=${status}`, {
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
          .then((res) => {
            this.roles = res.data
          })
    },
    /**
     * confirm before delete Leave
     * @param id
     */
    confirmDelete(id) {
      if (confirm('Bạn có chắc chắn muốn xoá không?')) {
        this.deleteItem(id)
      }
    },

    /**
     * call api to delete leave
     * @param id
     */
    deleteItem(id) {
      axiosClient.delete('/leaves/' + id,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(() => {
            this.searchInfo()
          })
          .catch((error) => { console.log(error); })
    },
    approveLeave(id,employee_id) {
      axiosClient.put('/leaves/' + id, {status:1,employee_id:employee_id},{
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }
      ).then(()=>{this.searchInfo()})
          .catch((err)=>console.log(err))
    },

    /**
     * reject & update status leave
     * @param  id
     */
    rejectLeave(id) {
      axiosClient.put('/leaves/' + id,{status:2, comment:this.comment},{
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }
      ).then(()=>{
        this.showModal = false
        this.searchInfo()
      })
          .catch((err)=>console.log(err))
    },

  }
}
</script>