<template>
  <AppHeader />
    <AccountInfo />
  <AppFooter />
</template>

<script>
import AccountInfo from "../../components/AccountInfo.vue";
import AppHeader from "../../components/AppHeader.vue";
import AppFooter from "../../components/AppFooter.vue";
export default {
  name: "InfoAccount",
  components:{AppFooter, AppHeader, AccountInfo}
}
</script>