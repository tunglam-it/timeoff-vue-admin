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
                @change="SearchBlog" aria-label="Search">
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="form in forms">
              <th scope="row">{{ form.id }}</th>
              <td>{{ form.name }}</td>
              <td>{{ convert(form.roles) }}</td>
              <td>
                <router-link :to="{ name: 'manage-user-role', params: { id: form.id } }">
                  <button class="btn btn-sm me-2 btn-primary">Sửa</button>
                </router-link>
                <button class="btn btn-sm btn-danger" @click="DeleteUser(form.id)">Xoá</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  {{ this.forms }}
</template>

<script>
import axiosClient from '../../axiosClient';
import AppFooter from '../AppFooter.vue';
import AppHeader from '../AppHeader.vue';

export default {

  components: { AppHeader, AppFooter },
  data() {
    return {
      forms: [],
    }
  },
  created() {
      this.searchBlog()
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
      else if(role == '2') {
        return 'Quản lý'
      }
    },
    /**
     * searchBlog
     * @params query
     * @returns array
     */
    searchBlog(query = "") {
      axiosClient
        .get(`/get-users?param=${query}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then((res) => (this.forms = res.data.data))
        .catch((err) => console.log(err));
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
        .then(() => this.$router.push('/manage'))
        .catch((err) => console.log(err))
    },
  }
}
</script>