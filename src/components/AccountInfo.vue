<template>
  <div class="col-md-8 col-sm-12 p-0 mt-4 my-3 mx-4 mx-auto">
    <div class="card mx-2">
      <div class="card-header">
        <h4>THÔNG TIN TÀI KHOẢN</h4>
      </div>
      <div class="card-body p-0">
        <div class="mx-4 my-2">
          <Form >
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Tên nhân viên:</label>
              <div class="col-sm-10">
                <Field name='title' type="text" v-model="name" class="form-control" disabled/>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Email:</label>
              <div class="col-sm-10">
                <Field name='email' type="text" v-model="email" class="form-control" disabled/>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Mật khẩu cũ:</label>
              <div class="col-sm-10">
                <Field name='old_password' type="password" v-model="old_password" class="form-control" :rules="validateInput"/>
                <ErrorMessage name="old_password" class="danger text-danger"/>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Mật khẩu mới:</label>
              <div class="col-sm-10">
                <Field name='new_password' type="password" v-model="new_password" class="form-control" :rules="validateInput"/>
                <ErrorMessage name="new_password" class="danger text-danger"/>
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
import { Field, Form, ErrorMessage } from 'vee-validate';

export default {
  components: { Field, Form, ErrorMessage },
  data(){
    return {
      name:'fsđsgsd',
      email:'sdgsdgsdg',
      old_password:'',
      new_password:''
    }
  },methods:{
    validateInput(value){
      if (!value) {
        return 'This field is required';
      }
      return true
    }
  }
}
</script>

