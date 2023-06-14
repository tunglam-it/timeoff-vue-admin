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
            <td>
              <button type="button" class="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                <span class="text-black fw-bold">Đang chờ</span>
              </button>
            </td>
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

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <Field name="status" v-model="status" class="form-control" as='select' :rules="validateInput">
                <option value="1">Từ chối</option>
                <option value="2">Chấp thuận</option>
              </Field>
              <ErrorMessage name="status" class="danger text-danger"/>
            </div>
            <div class="mb-3" v-if="status==1">
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
</template>

<script>
import {Field, Form, ErrorMessage} from 'vee-validate';

export default {
  components: {Field, Form, ErrorMessage},
  data() {
    return {
      status: ''
    }
  },
  methods: {
    validateInput(value) {
      if (!value) {
        return 'This field is required';
      }
      return true
    },
  }
}
</script>