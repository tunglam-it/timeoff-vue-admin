<template>
  <AppHeader />
  <FormManageUser />
  <AppFooter />
</template>

<script>
import AppHeader from "../../../components/AppHeader.vue";
import AppFooter from "../../../components/AppFooter.vue";
import FormManageUser from "../../../components/Form/FormManageUser.vue";
export default {
  name:'ManageUser',
  components: {FormManageUser, AppFooter, AppHeader}
}
</script>