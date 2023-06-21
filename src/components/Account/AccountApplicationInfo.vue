<template>
  <div class="my-3 mx-4">
    <div class="card text-center">
      <div class="card-header">
        <h4>THÔNG TIN ĐƠN NGHỈ PHÉP CỦA {{user_name}}</h4>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4 mb-2">
            <input class="form-control me-2" v-model="start_date" type="date" @change="searchInfo">
          </div>
          <div class="col-md-4 mb-2">
            <input class="form-control me-2" v-model="end_date" type="date" @change="searchInfo">
          </div>
          <div class="col-md-4 mb-2">
            <select class="form-control me-2" v-model="status" @change="searchInfo">
              <option>-- Chọn 1 option --</option>
              <option value="1">Chấp thuận</option>
              <option value="2">Từ chối</option>
              <option value="3">Đang chờ</option>
            </select>
          </div>
        </div>
      </div>
      <div class="card-footer table-responsive">
        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col" class="text-start">Loại</th>
            <th scope="col" class="text-start">Lý do</th>
            <th scope="col">Ngày bắt đầu</th>
            <th scope="col">Ngày kết thúc</th>
            <th scope="col">Thời gian nghỉ(giờ)</th>
            <th scope="col">Trạng thái</th>
            <th scope="col" class="text-start">Lý do từ chối</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in leaves">
            <th scope="row">{{ item.id }}</th>
            <td class="text-start">{{ getType(item.type) }}</td>
            <td class="text-start">{{ item.reason }}</td>
            <td>{{ item.start_date }}</td>
            <td>{{ item.end_date }}</td>
            <td>{{ item.estimate }}</td>
            <td>
              <div class="alert"
                   :class="{ 'alert-warning': item.status == 3, 'alert-success': item.status == 1, 'alert-danger': item.status == 2 }"
                   role="alert">
                {{ getStatusName(item.status) }}
              </div>
            </td>
            <td class="text-start">{{ item.comment }}</td>
            <td>
              <div v-if="item.status == 3">
                <router-link :to="{ name: 'edit-application', params: { id: item.id } }">
                  <button class="btn btn-sm btn-primary mb-2 me-1">Sửa</button>
                </router-link>
                <button class="btn btn-sm btn-danger mb-2 me-1" @click="confirmDelete(item.id)">Xoá</button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import types from "../../leave_types/types";

export default {
  props:{
    user_name:'',
    leaves:{}
  },
  data(){
    return {
      start_date: '',
      end_date: '',
      status:''
    }
  },
  created() {
    this.searchInfo()
  },
  methods: {
    /**
     * call emit
     */
    searchInfo() {
      this.$emit('searchInfo', this.start_date, this.end_date, this.status);
    },
    /**
     * get name of type
     * @param id
     */
    getType(id) {
      const name = types.find((data) => data.id == id);
      return name ? name.name : "";
    },/**
     * check status of leave
     * @param status
     * @returns string
     */
    getStatusName(status) {
      if (status == 1) { return "Chấp thuận" }
      else if (status == 2) { return 'Từ chối' }
      else return "Đang chờ"
    },
    confirmDelete(id){
      this.$emit('confirmDelete', id);
    }
  }
}
</script>
