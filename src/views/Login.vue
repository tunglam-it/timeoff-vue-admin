<template>
  <AuthHeader :linksTo="linksTo">
    Đăng Ký
  </AuthHeader>
  <!-- Section: Block Form -->
  <section class="text-center d-flex align-items-center justify-content-center height-86">  
    <div class="card mx-4 mx-md-5">
      <div class="card-body py-5 px-md-5">
        <div class="row d-flex justify-content-center">
          <h2 class="fw-bold mb-5">Đăng Nhập</h2>
          <Form>
            <div class="form-outline mb-4 form-group">
              <Field type="text" name="username" placeholder="Username" class="form-control" :rules="validateInput" />
              <ErrorMessage name="username"  class="danger text-danger"/>
            </div>
            <div class="form-outline mb-4 form-group">
              <Field type="password" name="password" placeholder="Password" class="form-control" :rules="validateInput" />
              <ErrorMessage name="password"  class="danger text-danger"/>
            </div>
            <button type="submit" class="btn btn-primary mb-4">
              Đăng Nhập
            </button>
          </Form>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Block Form -->
  <AuthFooter />
</template>

<script>
import AuthFooter from '../components/Auth/AuthFooter.vue'
import AuthHeader from "../components/Auth/AuthHeader.vue";
import {Field, Form, ErrorMessage} from 'vee-validate';

export default {
  name: 'Register',
  components: {AuthHeader, AuthFooter,Field, Form, ErrorMessage},
  data() {
    return {
      username: '',
      password: '',
      linksTo: 'register'
    }
  },
  methods:{
     validateInput(value){
      if (!value) {
        return 'This field is required';
      }
      return true
    }
  }
}
</script>
