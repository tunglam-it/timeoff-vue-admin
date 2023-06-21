<template>
  <AuthHeader :linksTo="linksTo">
    Đăng Ký
  </AuthHeader>
  <!-- Section: Block Form -->
  <section class="text-center d-flex align-items-center justify-content-center height-80">
    <div class="card mx-4 mx-md-5">
      <div class="card-body py-5 px-md-5">
        <div class="row d-flex justify-content-center">
          <h2 class="fw-bold mb-5">Đăng Nhập</h2>
          <Form @submit="handleLogin">
            <div class="form-outline mb-4 form-group">
              <Field type="email" name="email" v-model="email" placeholder="Email" class="form-control"
                 />
<!--              <ErrorMessage name="email" class="danger text-danger" />-->
            </div>
            <div class="form-outline mb-4 form-group">
              <Field type="password" name="password" v-model="password" placeholder="Password" class="form-control"
                :rules="validateInput" />
              <ErrorMessage name="password" class="danger text-danger" />
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
</template>

<script>
import AuthHeader from "../../../components/Auth/AuthHeader.vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import axiosClient from "../../../axiosClient";
import validateMixin from "../../../mixins/validateMixin.js";

export default {
  mixins: [validateMixin],
  name: 'Login',
  components: { AuthHeader, Field, Form, ErrorMessage },
  data() {
    return {
      email: "",
      password: '',
      linksTo: 'register'
    }
  },
  methods: {
    /**
     * Login
     */
    handleLogin() {
      axiosClient
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.user_data);
          this.$router.push("/");
          window.location.reload()
        })
        .catch((error) => {
          console.log(error)
          this.$swal.fire({
            title: 'Lỗi!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK'
          })
        });
    }
  }
}
</script>
