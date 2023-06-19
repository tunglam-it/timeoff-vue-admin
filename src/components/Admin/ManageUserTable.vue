<template>
  <div class="my-3 mx-4">
    <div class="card text-center">
      <div class="card-header">
        <h4>THÔNG TIN NHÂN VIÊN</h4>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 mb-2">
            <form class="d-flex" role="search">
              <input class="form-control me-2" v-model="query" type="search" placeholder="Nhập tên để tìm kiếm"
                @change="SearchUser" aria-label="Search">
            </form>
          </div>
        </div>
      </div>
      <div class="card-footer table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên nhân viên</th>
              <th scope="col">Chức vụ</th>
              <th scope="col">Thời gian nghỉ(giờ)</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users">
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td>{{ convert(user.roles) }}</td>
              <td>{{ user.total_time }}</td>
              <td>
                <router-link :to="{ name: 'manage-user-role', params: { id: user.id } }">
                  <button class="btn btn-sm me-2 btn-primary">Sửa</button>
                </router-link>
                <button class="btn btn-sm btn-danger" @click="confirmDelete(user.id)">Xoá</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axiosClient from '../../axiosClient';

export default {
  props:{
      users: {},

  },
  data() {
    return {
      query: ''
    }
  },
  created() {
    this.SearchUser()
  },
  methods: {

    /**
     * convert index role into string role 
     * @param role 
     * @returns string
     */
    convert(role) {
      if (role == '1') {
        return 'Nhân viên'
      }
      else if (role == '2') {
        return 'Quản lý'
      }
    },
    /**
     * call emits to search users
     * @params query
     * @returns array
     */
  
    SearchUser(){
      this.$emit('searchUser',this.query)
    },

    /**
     * confirm before delete Leave
     * @param id 
     */
    confirmDelete(id) {
      if (confirm('Bạn có chắc chắn muốn xoá không?')) {
        this.DeleteUser(id)
      }
    },

    /**
     * call api to delete user
     * @param id 
     * @returns mixed
     */
    DeleteUser(id) {
      axiosClient.delete('/delete/' + id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(() => window.location.reload())
        .catch((err) => console.log(err))
    },
  }
}
</script>