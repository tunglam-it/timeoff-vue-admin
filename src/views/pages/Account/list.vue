<template>
  <AccountApplicationInfo :leaves="leaves" :user_name="user_name" @searchInfo="getLeavesByUserId" @confirmDelete="confirmDelete" />
</template>

<script>
import AccountApplicationInfo from "../../../components/Account/AccountApplicationInfo.vue";
import axiosClient from "../../../axiosClient";

export default {
  name: "ListApplicationUser",
  components: {AccountApplicationInfo},
  data() {
    return {
      leaves:{},
      user_name: '',
      user_id:''
    }
  },
  created() {
    this.getCurrentUser()
    this.getLeavesByUserId()
  },
  methods: {


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
            this.getLeavesByUserId()
          })
          .catch((error) => { console.log(error); })
    },

    /**
     * get info current user
     */
    async getCurrentUser() {
      await axiosClient.get('/profile',
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }
      )
          .then((res) => {
            this.user_name = res.data.name
            this.user_id = res.data.id
          })
    },
    /**
     * call api to get all leaves or search info
     */
    async getLeavesByUserId() {
      await axiosClient.get(`/by-user-id`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
          .then((res) => {
            this.leaves = res.data.leaves
          })
          .catch((error) => {
            console.log(error);
          })
    },

  }
}
</script>
