<template>
  <div class="my-3 mx-4">
    <div class="card text-center">
      <div class="card-header">
        <h4>THÔNG TIN ĐƠN NGHỈ PHÉP</h4>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4 mb-2">
            <form class="d-flex">
              <input class="form-control me-2" v-model="kwName" type="search" placeholder="Nhập để tìm kiếm">
            </form>
          </div>
          <div class="col-md-4">
            <form class="d-flex mb-2">
              <input v-model="kwDate" class="form-control me-2" type="date">
            </form>
          </div>
          <div class="col-md-4">
            <form class="d-flex">
              <select class="form-control me-2" v-model="kwStatus">
                <option>-- Chọn 1 option --</option>
                <option value="1">Chấp thuận</option>
                <option value="2">Từ chối</option>
                <option value="3">Đang chờ</option>
              </select>
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
              <th scope="col">Loại</th>
              <th scope="col">Lý do</th>
              <th scope="col">Ngày bắt đầu</th>
              <th scope="col">Ngày kết thúc</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Lý do từ chối</th>
              <th scope="col" v-if="this.roles.roles == '2' || this.roles.roles == '3'">Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr>
              <td colspan="10" v-if="leaves.length < 0">Chưa có bản ghi nào</td>
            </tr> -->
            <tr v-for="leave in leaves">
              <th scope="row">{{ leave.id }}</th>
              <th scope="row">{{ leave.employees.name }}</th>
              <td>{{ getType(leave.type) }}</td>
              <td>{{ leave.reason }}</td>
              <td>{{ leave.start_date }}</td>
              <td>{{ leave.end_date }}</td>
              <td>
                <button type="button" class="btn btn-sm" style="min-width: 100px;"
                  :class="{ 'btn-warning': leave.status == 3, 'btn-success': leave.status == 1, 'btn-danger': leave.status == 2 }">
                  <span class="text-white fw-bold">{{ checkStatus(leave.status) }}</span>
                </button>
              </td>
              <td>{{ leave.comment }}</td>
              <td v-if="this.roles.roles == '2' || this.roles.roles == '3'">
                <router-link v-if="leave.status == 3" :to="{ name: 'edit-form', params: { id: leave.id } }">
                  <button class="btn btn-sm btn-primary mb-2 me-1">Sửa</button>
                </router-link>
                <button class="btn btn-sm btn-danger mb-2 me-1" v-if="leave.status == 3" @click="DeleteItem(leave.id)">Xoá</button>
              </td>
            </tr>
          </tbody>
        </table>
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
  props: {
    leaves: [],
    roles: ''
  },
  data() {
    return {
      kwName: '',
      kwStatus: '',
      kwDate: ''
    }
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
    DeleteItem(id) {
      axiosClient.delete('/leaves/' + id)
        .then(() => { this.$router.push('/manage') })
        .catch((error) => { console.log(error); })
    },
    getType(id) {
      const name = types.find((data) => data.id == id);
      return name ? name.name : "";
    },
  }
}
</script>