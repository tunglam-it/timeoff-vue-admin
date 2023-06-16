<template>
  <AppHeader />
  <div class="col-md-8 col-sm-12 p-0 mt-4 my-3 mx-4 mx-auto">
    <div class="card mx-2">
      <div class="card-header">
        <h4>Thay đổi phân quyền</h4>
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
              <label class="col-sm-2 col-form-label">Phân quyền:</label>
              <div class="col-sm-10">
                <Field name='roles' as="select" v-model="user.roles" class="form-control">
                  <option value="1">Nhân viên</option>
                  <option value="2">Quản lý</option>
                </Field>
              </div>
            </div>
            <button class="btn btn-success mb-3" type="button" @click="submit(user.id)">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import AppFooter from '../AppFooter.vue';
import AppHeader from '../AppHeader.vue';
import axiosClient from '../../axiosClient';
export default {
  name: 'ManageRoles',
  components: { Field, Form, ErrorMessage, AppFooter, AppHeader },
  data() {
    return {
      user: {
        roles: ''
      },
    }
  },
  created() {
    axiosClient.get("/profile", {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then((res) => {
      this.user.name = res.data.name;
      this.user.email = res.data.email;
    }).catch(() => {
      this.$router.push('/manage')
    });
  },
  methods: {
    submit(id) {
      axiosClient.put('/post/' + id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((res) => this.$router.push('/manage'))
        .catch((error) => console.log(error))
    },
    validateInput(value) {
      if (!value) {
        return 'This field is required';
      }
      return true
    }
  }
}
</script>