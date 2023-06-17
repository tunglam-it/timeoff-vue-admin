<template>
  <nav class="navbar navbar-expand-lg bg-menu">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold text-white" to="/">DevFast</router-link>
      <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active text-white ms-3" to="/">Trang chủ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active text-white ms-3" to="/create-form">Thêm mới</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active text-white ms-3" to="/detail">
              Chi tiết <span class="badge text-bg-warning">4</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="this.user.roles==3" class="nav-link active text-white ms-3" to="/manage">Quản lý</router-link>
          </li>
        </ul>

        <div class="dropdown">
          <div class="dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Xin chào, {{ this.user.name }}
          </div>
          <ul class="dropdown-menu position-absolute position-left-25">
            <li><router-link class="dropdown-item" to="/info">Thông tin tài khoản</router-link></li>
            <li><router-link class="dropdown-item" @click="logout" to="#">Đăng xuất</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axiosClient from "../axiosClient.js";
export default {
  name: 'AppHeader',
  data() {
    return {
      user: ""
    }
  },
  created() {
    axiosClient.get("/profile", {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then((res) => {
      this.user = res.data;
      }).catch(() => {

    });

  },
    
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login')
      window.location.reload()
    }
  }
}
</script>