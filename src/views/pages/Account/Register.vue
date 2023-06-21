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
          <Form @submit="handleRegister">
            <div class="form-outline mb-4 form-group">
              <Field name="name" v-model="name" type="text" placeholder="Name" class="form-control"
                :rules="validateInput" />
              <ErrorMessage class='danger text-danger' name="name" />
            </div>
            <div class="form-outline mb-4 form-group">
              <Field name="email" v-model="email" type="email" id="form3Example3" placeholder="Email" class="form-control"
                :rules="validateEmail" />
              <ErrorMessage class='danger text-danger' name="email" />
            </div>
            <div class="form-outline mb-4 form-group">
              <Field name="password" v-model="password" type="password" placeholder="Password" class="form-control"
                :rules="validateInput" />
              <ErrorMessage class='danger text-danger' name="password" />
            </div>
            <div class="form-outline mb-4 form-group">
              <Field name="confirm_password" v-model="confirm_password" type="password" placeholder="Retype Password"
                class="form-control" :rules="validateInput" />
              <ErrorMessage class='danger text-danger' name="confirm_password" />
              <div class="text-danger" v-if="passwordMatchError">Password must match</div>
            </div>
            <button type="submit" class="btn btn-success mb-4" >
              Đăng Ký
            </button>
          </Form>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Block Form -->
</template>

<script>
import AuthHeader from "../../../components/Auth/AuthHeader.vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import axiosClient from "../../../axiosClient";
import validateMixin from "../../../mixins/validateMixin.js";

export default {
  mixins:[validateMixin],
  name: 'Register',
  components: {
    AuthHeader, Field, Form, ErrorMessage
  },
  data() {
    return {
      name: '',
      password: '',
      confirm_password: '',
      email: '',
      linksTo: 'login'
    }
  },
  computed: {
    passwordMatchError() {
      return this.password !== this.confirm_password;
    }
  },
  methods: {
    /***
     * Register new User
     */
    handleRegister() {
      if (this.passwordMatchError) {
        return 'Passwords must match';
      }
      axiosClient.post("/register", {
        email: this.email,
        name: this.name,
        password: this.password

      }).then(() => {
        this.$router.push('/login')
      })
    },
  }
}
</script>
