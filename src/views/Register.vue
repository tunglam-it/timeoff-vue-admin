<template>
  <AuthHeader :linksTo="linksTo">
    Đăng Nhập
  </AuthHeader>
  <!-- Section: Block Form -->
  <section class="text-center d-flex align-items-center justify-content-center height-80">
    <div class="card mx-4 mx-md-5">
      <div class="card-body py-5 px-md-5">
        <div class="row d-flex justify-content-center">
          <h2 class="fw-bold mb-5">Đăng Ký</h2>
          <Form>
            <div class="form-outline mb-4 form-group">
              <Field name="name" type="text" placeholder="Name" class="form-control" :rules="validateInput"/>
              <ErrorMessage class='danger text-danger' name="name" />
            </div>
            <div class="form-outline mb-4 form-group">
              <Field name="email" type="email" id="form3Example3" placeholder="Email" class="form-control" :rules="validateEmail"/>
              <ErrorMessage class='danger text-danger' name="email" />
            </div>
            <div class="form-outline mb-4 form-group">
              <Field name="password" type="password" placeholder="Password" class="form-control" :rules="validateInput"/>
              <ErrorMessage class='danger text-danger' name="password"/>
            </div>
            <button type="submit" class="btn btn-success mb-4">
              Đăng Ký
            </button>
          </Form>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Block Form -->
  <AppFooter />

</template>

<script>
import AuthHeader from "../components/Auth/AuthHeader.vue";
import {Field, Form, ErrorMessage} from 'vee-validate';
import AppFooter from "../components/AppFooter.vue";


export default {
  name: 'Register',
  components: {
    AppFooter, AuthHeader , Field, Form, ErrorMessage
  },
  data() {
    return {
      username: '',
      password: '',
      email: '',
      linksTo: 'login'
    }
  },
  methods:{
     validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    },
    validateInput(value){
      if (!value) {
        return 'This field is required';
      }
      return true
    }
  }
}
</script>
