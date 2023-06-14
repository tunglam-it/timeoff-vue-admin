<template>
  <AppHeader/>
  <div class="container-fluid mt-5">
    <div class="row g-3">
      <div class="col-md-3 col-sm-12">
        <div class="card text-bg-danger h-150">
          <img src="" class="card-img" alt="">
          <div class="card-body card-img-overlay">
            <h5 class="card-title">Số đơn chưa duyệt</h5>
            <p class="card-text">
              <h3>5</h3>
              <h5>(-4,5% <i class="fa-solid fa-arrow-up"></i>)</h5>
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
              <h3 >5</h3>
              <h5>(4,5% <i class="fa-solid fa-arrow-down"></i>)</h5>
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
              <h3>5</h3>
              <h5>(-4,5% <i class="fa-solid fa-arrow-up"></i>)</h5>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-12">
        <div class="card text-bg-warning h-150">
          <img src="" class="card-img" alt="">
          <div class="card-body card-img-overlay">
            <h5 class="card-title">Nhân viên nghỉ nhiều</h5>
            <p class="card-text"><h3>Hưng</h3></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <AppFooter/>
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
import AppHeader from '../components/AppHeader.vue';

export default {
  components: {
    AppFooter,
    AppHeader
  },
};
</script>