<template>
    <ManageUserTable @searchUser="searchUser" :users="users" @confirmDelete="confirmDelete"/>
</template>

<script>
import ManageUserTable from "../../../components/Admin/ManageUserTable.vue";
import axiosClient from "../../../axiosClient.js";

export default {
  name: 'UserManage',
  components: {
    ManageUserTable
  },
  data(){
    return {
      query:'',
      users:{}
    }
  },
  methods:{
    /***
     * search user by name
     * @param query
     */
    async searchUser(query='') {
      await axiosClient
        .get(`/get-users?name=${query}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
        .then((res) => (this.users = res.data))
        .catch((err) => console.log(err));
    },
    /**
     * confirm before delete Leave
     * @param id
     */
    confirmDelete(id) {
      if (confirm('Bạn có chắc chắn muốn xoá không?')) {
        this.deleteUser(id)
      }
    },

    /**
     * call api to delete user
     * @param id
     * @returns mixed
     */
    deleteUser(id) {
      axiosClient.delete('/delete/' + id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
          .then(() => this.searchUser())
          .catch((err) => console.log(err))
    },
  }
}
</script>