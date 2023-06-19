<template>
    <ManageUserTable @searchUser="searchUser" :users="users"/>
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
    async searchUser(query='') {
      await axiosClient
        .get(`/get-users?param=${query}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
        .then((res) => (this.users = res.data))
        .catch((err) => console.log(err));
    },
  }
}
</script>