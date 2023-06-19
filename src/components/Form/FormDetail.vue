<template>
  <div class="my-3 mx-4">
    <div class="card text-center">
      <div class="card-header">
        <h4>THÔNG TIN ĐƠN NGHỈ PHÉP</h4>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-3 mb-2">
            <form class="d-flex">
              <input class="form-control me-2" v-model="query" type="search" @change="SearchInfo" placeholder="Nhập để tìm kiếm">
            </form>
          </div>
          <div class="col-md-3">
            <form class="d-flex mb-2">
              <input class="form-control me-2" v-model="start_date" type="date" @change="SearchInfo">
            </form>
          </div>
          <div class="col-md-3">
            <form class="d-flex mb-2">
              <input class="form-control me-2" v-model="end_date" type="date" @change="SearchInfo">
            </form>
          </div>
          <div class="col-md-3">
            <form class="d-flex">
              <select class="form-control me-2" v-model="status" @change="SearchInfo">
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
              <th scope="col">Thời gian nghỉ(giờ)</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Lý do từ chối</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="leave in leaves">
              <th scope="row">{{ leave.id }}</th>
              <th scope="row">{{ leave.employees.name }}</th>
              <td>{{ getType(leave.type) }}</td>
              <td>{{ leave.reason }}</td>
              <td>{{ leave.start_date }}</td>
              <td>{{ leave.end_date }}</td>
              <td>{{ leave.estimate }}</td>
              <td>
                <button type="button" class="btn btn-sm mw-100"
                  :class="{ 'btn-warning': leave.status == 3, 'btn-success': leave.status == 1, 'btn-danger': leave.status == 2 }">
                  <span class="text-white fw-bold">{{ checkStatus(leave.status) }}</span>
                </button>
              </td>
              <td>{{ leave.comment }}</td>
              <td v-if="leave.status == 3">
                <button class="btn btn-sm btn-success mb-2 me-1 mw-65" @click="approveLeave(leave.id,leave.employee_id)"
                  v-if="this.roles.roles == 2 || this.roles.roles == 3">Duyệt</button>
                <button type="button" class="btn btn-sm btn-warning mb-2 me-1" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                  v-if="this.roles.roles == 2 || this.roles.roles == 3" @click="openModal(leave)">
                  Từ chối</button>
                <router-link :to="{ name: 'edit-form', params: { id: leave.id } }"
                  v-if="this.roles.roles == 2 || this.roles.roles == 3 || leave.employee_id == this.user_id">
                  <button class="btn btn-sm btn-primary mb-2 me-1">Sửa</button>
                </router-link>
                <button class="btn btn-sm btn-danger mb-2 me-1" @click="confirmDelete(leave.id)"
                  v-if="this.roles.roles == 2 || this.roles.roles == 3 || leave.employee_id == this.user_id">Xoá</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Từ chối đơn</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Lý do từ chối:</label>
            <textarea v-model="comment" class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="rejectLeave(this.leave_selected.id)">Submit</button>
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
  props: {
    leaves: {},
    roles: ''
  },
  data() {
    return {
      user_id: '',
      showModal: false,
      comment:'',
      leave_selected:null,
      query:'',
      start_date:'',
      end_date:'',
      status:''
    }
  },
  created() {
    this.getCurrentUser()
  },
  methods: {

    /**
     * open Modal
     * @param leave 
     */
    openModal(leave){
      this.leave_selected = leave;
      this.showModal = true
    },
    /**
     * approve & update status leave
     * @param id 
     * @param employee_id 
     */
    approveLeave(id,employee_id) {
      axiosClient.put('/leaves/' + id, {status:1,employee_id:employee_id},{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      ).then(()=>{window.location.reload()})
      .catch((err)=>console.log(err))
    },

    /**
     * reject & update status leave
     * @param  id 
     */
    rejectLeave(id) {
      axiosClient.put('/leaves/' + id,{status:2, comment:this.comment},{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      ).then(()=>{
        this.showModal = false
        window.location.reload()
      })
      .catch((err)=>console.log(err))
    },

    /**
     * check status of leave
     * @param status
     * @returns string 
     */
    checkStatus(status) {
      if (status == 1) { return "Chấp thuận" }
      else if (status == 2) { return 'Từ chối' }
      else return "Đang chờ"
    },

    /**
     * confirm before delete Leave
     * @param id 
     */
    confirmDelete(id) {
      if (confirm('Bạn có chắc chắn muốn xoá không?')) {
        this.DeleteItem(id)
      }
    },

    /**
     * call api to delete leave
     * @param id 
     */
    DeleteItem(id) {
      axiosClient.delete('/leaves/' + id,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(() => {
          window.location.reload()
        })
        .catch((error) => { console.log(error); })
    },

    /**
     * get name of type
     * @param id 
     */
    getType(id) {
      const name = types.find((data) => data.id == id);
      return name ? name.name : "";
    },

    /**
     * get info current user
     */
    async getCurrentUser() {
      await axiosClient.get('/profile',
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
        .then((res) => {
          this.user_id = res.data.id
        })
    },

    /**
     * call emit 
     */
    SearchInfo(){
      this.$emit('searchInfo', this.query, this.start_date, this.end_date, this.status);
    }
  }
}
</script>