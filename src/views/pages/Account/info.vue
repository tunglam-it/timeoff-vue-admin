<template>
  <AccountInfo @submit="submit"/>
</template>

<script>
import AccountInfo from "../../../components/Account/AccountInfo.vue";
import axiosClient from "../../../axiosClient";

export default {
  name: "InfoAccount",
  components: {AccountInfo},
  methods: {
    submit(user) {
      axiosClient.post("/change", user, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(() => {
        this.$router.push('/')
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}
</script>