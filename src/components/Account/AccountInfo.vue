<template>
  <div class="col-md-8 col-sm-12 p-0 mt-4 my-3 mx-4 mx-auto">
    <div class="card mx-2">
      <div class="card-header">
        <h4>THÔNG TIN TÀI KHOẢN</h4>
      </div>
      <div class="card-body p-0">
        <div class="mx-4 my-2">
          <Form>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Tên nhân viên:</label>
              <div class="col-sm-10">
                <Field name='name' type="text" v-model="user.name" class="form-control" disabled />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Email:</label>
              <div class="col-sm-10">
                <Field name='email' type="text" v-model="user.email" class="form-control" disabled />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Mật khẩu cũ:</label>
              <div class="col-sm-10">
                <Field name='oldPassword' type="password" v-model="user.oldPassword" class="form-control"
                  :rules="validateInput" />
                <ErrorMessage name="oldPassword" class="danger text-danger" />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Mật khẩu mới:</label>
              <div class="col-sm-10">
                <Field name='password' type="password" v-model="user.password" class="form-control"
                  :rules="validateInput" />
                <ErrorMessage name="password" class="danger text-danger" />
              </div>
            </div>
            <button class="btn btn-success mb-3" type="button" @click="submit">
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
import axiosClient from '../../axiosClient';
import validateMixin from '../../mixins/validateMixin.js';

export default {
  mixins:[validateMixin],
  components: { Field, Form, ErrorMessage },
  data() {
    return {
      user: {
        oldPassword: "",
        password: "",
      },
    }
  },
  created() {
    this.getUser()
  },
  methods: {

    /**
     * get name & email of current user
     */
    getUser() {
      axiosClient.get("/profile", {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((res) => {
        this.user.name = res.data.name;
        this.user.email = res.data.email;
      });
    },

    /**
     * submit to change password
     */
    submit() {
      this.$emit('submit', this.user)
    },
  }
}
</script>