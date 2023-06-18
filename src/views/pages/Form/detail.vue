<template>
  <AppHeader />
  <FormDetail :leaves="leaves" :roles="roles" />
  <AppFooter />
</template>

<script>
import AppFooter from '../../../components/AppFooter.vue';
import AppHeader from '../../../components/AppHeader.vue';
import FormDetail from '../../../components/Form/FormDetail.vue';
import axiosClient from '../../../axiosClient.js';

export default {
  name: 'DetailForm',
  components: { AppFooter, AppHeader, FormDetail },
  data() {
    return {
      leaves: [],
      token: localStorage.getItem('token'),
      roles:''
    }
  },
  created() {
    this.getAllLeaves(),
    this.getUser()
  },
  methods: {
    getAllLeaves() {
      axiosClient.get('/leaves',{
            headers: {
               Authorization: 'Bearer ' + this.token
            }
         })
        .then((res) => {
          this.leaves = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    getUser(){
         axiosClient.get('/profile',{
            headers: {
               Authorization: 'Bearer ' + this.token
            }
         })
         .then((res)=>{this.roles = res.data})
      }
  }
}
</script>

<style></style>