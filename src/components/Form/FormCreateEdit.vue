<template>
    <div class="col-md-8 col-sm-12 p-0 mt-4 my-3 mx-4 mx-auto">
      <div class="card mx-2">
        <div class="card-header">
          <slot></slot>
        </div>
        <div class="card-body p-0">
          <div class="mx-4 my-2">
            <Form >
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Tiêu đề:</label>
                <div class="col-sm-10">
                  <Field name='title' type="text" v-model="form.title" class="form-control" :rules="validateInput"/>
                  <ErrorMessage name="title" class="danger text-danger"/>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Loại:</label>
                <div class="col-sm-10">
                  <Field name='type' rows="5" v-model="form.type" class="form-control" as='select' :rules="validateInput">
                    <option>-- Hãy chọn 1 hình thức --</option>
                    <option value="1">Sức khoẻ</option>
                    <option value="2">Thai sản</option>
                    <option value="3">Gia đình</option>
                    <option value="4">Học tập</option>
                  </Field>
                  <ErrorMessage name="type"  class="danger text-danger"/>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Lý do:</label>
                <div class="col-sm-10">
                  <Field name='reason' rows="8" v-model="form.reason" class="form-control" as='textarea' :rules="validateInput"></Field>
                  <ErrorMessage name="reason"  class="danger text-danger"/>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Ngày bắt đầu:</label>
                <div class="col-sm-10">
                  <Field name='start_date' class="form-control" type="datetime-local" v-model="form.start_date" :rules="validateInput"/>
                  <ErrorMessage name="start_date"  class="danger text-danger"/>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Ngày kết thúc:</label>
                <div class="col-sm-10">
                  <Field name='end_date' class="form-control" type="datetime-local" v-model="form.end_date" :rules="validateInput"/>
                  <ErrorMessage name="end_date"  class="danger text-danger"/>
                </div>
              </div>
              <div class="mt-3 mb-3">
                  Thời gian xin nghỉ phép là: 
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

export default {
  components: { Field, Form, ErrorMessage },
  data(){
    return {
      form:{
        title:null,
        type:null,
        reason:null,
        start_date:null,
        end_date:null
      }
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
