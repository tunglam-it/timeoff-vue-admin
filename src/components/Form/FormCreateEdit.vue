<template>
  <div class="col-md-8 col-sm-12 p-0 mt-4 my-3 mx-4 mx-auto">
    <div class="card mx-2">
      <div class="card-header">
        <slot></slot>
      </div>
      <div class="card-body p-0">
        <div class="mx-4 my-2">
          <Form>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Loại:</label>
              <div class="col-sm-10">
                <Field name='type' v-model="form.type" class="form-control" as='select' :rules="validateInput">
                  <option>-- Hãy chọn 1 hình thức --</option>
                  <option v-for="item in types" :value="item.id">{{ item.name }}</option>
                </Field>
                <ErrorMessage name="type" class="danger text-danger" />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Lý do:</label>
              <div class="col-sm-10">
                <Field name='reason' rows="8" v-model="form.reason" class="form-control" as='textarea'
                  :rules="validateInput"></Field>
                <ErrorMessage name="reason" class="danger text-danger" />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Ngày bắt đầu:</label>
              <div class="col-sm-10">
                <Field name='start_date' class="form-control" type="datetime-local" v-model="form.start_date"
                  :rules="validateInput" />
                <ErrorMessage name="start_date" class="danger text-danger" />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Ngày kết thúc:</label>
              <div class="col-sm-10">
                <Field name='end_date' class="form-control" type="datetime-local" v-model="form.end_date"
                  :rules="validateInput" />
                <ErrorMessage name="end_date" class="danger text-danger" />
              </div>
            </div>
            <button class="btn btn-success mb-3" type="submit" @click.prevent="handleSubmit">
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
import types from '../../leave_types/types.js';

export default {
  components: { Field, Form, ErrorMessage },
  props: {
    form: {},
    isInsert: null,
    roles:''
  },
  data() {
    return {
      types: types,
    }
  },
  methods: {
    /***
     * validate for input value
     * @param value
     * @returns boolean
     */
    validateInput(value) {
      if (!value) {
        return 'This field is required';
      }
      return true
    },

    /***
     * insert or update data for form
     * @returns mixed
     */
    handleSubmit() {
      if (this.isInsert) {
        this.$emit("insert", this.form);
      } else {
        this.$emit("update", this.form);
      }
    },
  }
}
</script>
