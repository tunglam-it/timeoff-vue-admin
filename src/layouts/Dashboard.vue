<template>
  <div class="container-fluid mt-5">
    <div class="row g-3">
      <div class="col-md-3 col-sm-12">
        <div class="card text-bg-danger h-150">
          <img src="" class="card-img" alt="">
          <div class="card-body card-img-overlay">
            <h5 class="card-title">Số đơn chưa duyệt</h5>
            <p class="card-text">
            <h3>{{ this.pending }}</h3>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-12">
        <div class="card text-bg-success h-150">
          <img src="" class="card-img" alt="">
          <div class="card-body card-img-overlay">
            <h5 class="card-title">Số đơn đã duyệt</h5>
            <p class="card-text">
            <h3>{{ this.approve }}</h3>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-12">
        <div class="card text-bg-primary h-150">
          <img src="" class="card-img" alt="">
          <div class="card-body card-img-overlay">
            <h5 class="card-title">Số đơn đã huỷ</h5>
            <p class="card-text">
            <h3>{{ this.reject }}</h3>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-12">
        <div class="card text-bg-warning h-150">
          <img src="" class="card-img" alt="">
          <div class="card-body card-img-overlay">
            <h5 class="card-title">Nhân viên nghỉ nhiều</h5>
            <p class="card-text">
            <h3>{{ this.badUser }}</h3>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosClient from '../axiosClient.js';

export default {
  data() {
    return {
      pending:0,
      approve:0,
      reject:0,
      badUser:null
    }
  },
  created(){
    this.displayLeaves(),
    this.displayBadUser()
  },
  methods: {
    /**
     * display leaves by status
     */
    displayLeaves() {
      axiosClient.get('/leaves', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((res) => {
        this.leaves = res.data.data
        this.pending = this.leaves.filter((leave) => leave.status == 3).length
        this.reject = this.leaves.filter((leave) => leave.status == 2).length
        this.approve = this.leaves.filter((leave) => leave.status == 1).length
      })
    },

    /**
     * display user with the most timeoff
     */
    displayBadUser(){
      axiosClient.get('get-users',{
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((res)=>{
        this.badUser = res.data.reduce((prev, current) => (prev.total_time > current.total_time) ? prev : current).name;
      })
    }
  }
};
</script>