<template>
  <div class="col-md-8 col-sm-12 p-0 mt-4 my-3 mx-4 mx-auto">
    <div class="card mx-2">
      <div class="card-header">
        <h4>QUẢN LÝ NHÂN VIÊN</h4>
      </div>
      <div class="card-body p-0">
        <div class="mx-4 my-2">
          <Form >
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Tên nhân viên:</label>
              <div class="col-sm-10">
                <!-- Dùng v-for lấy info user từ db backend -->
                <Field name='name' class="form-control" as='select' :rules="validateInput">
                  <option>-- Hãy chọn tên nhân viên --</option>
                  <option value="1">Nguyễn Văn A</option>
                  <option value="2">Nguyễn Thị B</option>
                  <option value="3">Tô Văn C</option>
                  <option value="4">Trịnh Thị D</option>
                </Field>
                <ErrorMessage name="name"  class="danger text-danger"/>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Loại Quyền:</label>
              <div class="col-sm-10">
                <Field name='role_type' class="form-control" as='select' :rules="validateInput">
                  <option value="1">Quản lý</option>
                  <option value="2">Nhân viên</option>
                </Field>
                <ErrorMessage name="role_type"  class="danger text-danger"/>
              </div>
            </div>
            <button class="btn btn-success mb-3" type="button">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Field, Form, ErrorMessage} from 'vee-validate';

export default {
  components: {Field, Form, ErrorMessage},
  methods:{
    validateInput(value){
      if (!value) {
        return 'This field is required';
      }
      return true
    },
  }
}
</script>
