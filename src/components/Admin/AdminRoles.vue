<template>
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
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import axiosClient from '../../axiosClient';
import validateMixin from '../../mixins/validateMixin.js';

export default {
  mixins:[validateMixin],
  name: 'AdminRoles',
  components: { Field, Form, ErrorMessage },
  data() {
    return {
      user: {
        name:'',
        email:'',
        roles:''
      },
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    /**
     * submit to update role user
     * @param id 
     */
    submit(id) {
      axiosClient.put('/update/' + id, this.user, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((res) => this.$router.push('/manage'))
        .catch((error) => console.log(error))
    },

    /**
     * get user info
     */
    getUser() {
      axiosClient.get("/show/" + this.$route.params.id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((res) => {
        this.user = res.data;
        
      }).catch((err) => {
        console.log(err);
      });
    },
  }
}
</script>