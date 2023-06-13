<template>
  <nav class="navbar navbar-expand-lg bg-menu">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold text-white" to="/">DevFast</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" style="color: white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active text-white ms-3" to="/">Trang chủ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active text-white ms-3" to="/form">Thêm mới</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active text-white ms-3" to="/detail">Chi tiết</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active text-white ms-3" to="/manage">Quản lý</router-link>
          </li>
        </ul>

        <div class="dropdown">
          <div class="dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Xin chào, Admin
          </div>
          <ul class="dropdown-menu position-absolute" style="left: -25px">
            <li><router-link class="dropdown-item" to="/info">Thông tin tài khoản</router-link></li>
            <li><router-link class="dropdown-item" to="#">Đăng xuất</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>