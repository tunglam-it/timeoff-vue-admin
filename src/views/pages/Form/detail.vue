<template>
  <AppHeader />
  <FormDetail :leaves="leaves" />
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
      leaves: {

      }
    }
  },
  created() {
    this.getAllLeaves()
  },
  methods: {
    getAllLeaves() {
      axiosClient.get('/leaves')
        .then((res) => {
          // console.log(res.data);
          this.leaves = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>

<style></style>