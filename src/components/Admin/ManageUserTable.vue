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
              <input class="form-control me-2" type="search" placeholder="Nhập tên để tìm kiếm" aria-label="Search">
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
          <tr>
            <!-- <th scope="row">{{ form.id }}</th>
            <td>{{ form.name }}</td>
            <td>{{ convert(form.roles) }}</td> -->
            <td>
               <!-- <router-link :to="{ name: 'edit-form', params: { id: form.id } }"> -->
                  <button class="btn btn-sm me-2 btn-primary">Sửa</button>
               <!-- </router-link> -->
               <button class="btn btn-sm btn-danger">Xoá</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AppFooter from '../AppFooter.vue';
import AppHeader from '../AppHeader.vue';

export default {
   components: { AppHeader, AppFooter },
   props:{
      form:{}
   },
   methods:{
      convert(role){
         if(role=='1'){
            return 'Nhân viên'
         }
         else {
            return 'Quản lý'
         }
      }
   }
}
</script>