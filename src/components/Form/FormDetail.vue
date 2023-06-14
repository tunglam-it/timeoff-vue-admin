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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>15-1-2023</td>
              <td>16-1-2023</td>
              <td>Đang chờ</td>
              <td></td>
              <td>
                <button class="btn btn-sm btn-primary me-2">Sửa</button>
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
export default {
}
</script>