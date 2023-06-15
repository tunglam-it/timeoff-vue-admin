<template>
  <div class="my-3 mx-4">
    <div class="card text-center">
      <div class="card-header">
        <h4>THÔNG TIN ĐƠN NGHỈ PHÉP</h4>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 mb-2">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Nhập tên để tìm kiếm" aria-label="Search">
            </form>
          </div>
          <div class="col-md-6">
            <form class="d-flex justify-content-end" role="search">
              <input class="form-control me-2" type="date" placeholder="Nhập tên để tìm kiếm" aria-label="Search">
            </form>
          </div>
        </div>
      </div>
      <div class="card-footer table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Người tạo</th>
              <th scope="col">Tiêu đề</th>
              <th scope="col">Loại</th>
              <th scope="col">Lý do</th>
              <th scope="col">Ngày bắt đầu</th>
              <th scope="col">Ngày kết thúc</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Lý do từ chối</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr>
              <td colspan="10" v-if="leaves.length<0">Chưa có bản ghi nào</td>
            </tr> -->
            <tr v-for="leave in leaves">
              <th scope="row">{{ leave.id }}</th>
              <th scope="row">{{ leave.employees }}</th>
              <td>{{ leave.title }}</td>
              <td>{{ getType(leave.type) }}</td>
              <td>{{ leave.reason }}</td>
              <td>{{ leave.start_date }}</td>
              <td>{{ leave.end_date }}</td>
              <td>
                <button type="button" class="btn btn-sm btn-fluid" style="min-width: 100px;"
                  :class="{ 'btn-warning': leave.status==3, 'btn-success': leave.status==1, 'btn-danger': leave.status==2 }"
                  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                  <span class="text-white fw-bold">{{ checkStatus(leave.status) }}</span>
                </button>
              </td>
              <td></td>
              <td>
                <router-link :to="{ name: 'edit-form', params: { id: leave.id } }">
                  <button class="btn btn-sm btn-primary me-2">Sửa</button>
                </router-link>
                <button class="btn btn-sm btn-danger" @click="DeleteItem(leave.id)">Xoá</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="leave in leaves">
    <div v-if="leave.status==3">
      <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Trạng thái</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <Form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="col-form-label">Hành động:</label>
              <Field name="status" class="form-control" as='select' :rules="validateInput">
                <option value="1">Chấp thuận</option>
                <option value="2">Từ chối</option>
              </Field>
              <ErrorMessage name="status" class="danger text-danger" />
            </div>
            <div class="mb-3">
              <label class="col-form-label">Lý do từ chối:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-success">Submit</button>
          </div>
        </Form>
      </div>
    </div>
    </div>
    

  </div>

</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import types from '../../leave_types/types.js';
import axiosClient from '../../axiosClient.js';

export default {
  components: { Field, Form, ErrorMessage },
  props:{
      leaves: {}
  },
  methods: {
    validateInput(value) {
      if (!value) {
        return 'This field is required';
      }
      return true
    },
    checkStatus(status) {
      if (status == 1) { return "Chấp thuận" }
      else if (status == 2) { return 'Từ chối' }
      else return "Đang chờ"
    },
    DeleteItem(id){
      axiosClient.delete('/leaves/'+id)
      .then(()=>{this.$router.push('/')})
      .catch((error)=>{console.log(error);})
    },
    getType(id){
      const name = types.find((data) => data.id == id);
      return name ? name.name : "";
    }
  }
}
</script>