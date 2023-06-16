<template>
  <AppHeader />
    <ManageUserTable />
  <AppFooter />
</template>

<script>
import AppHeader from "../../../components/AppHeader.vue";
import AppFooter from "../../../components/AppFooter.vue";
import ManageUserTable from "../../../components/Admin/ManageUserTable.vue";

export default {
  name: 'UserManage',
  components: {
    AppFooter,
    AppHeader,
    ManageUserTable
  }
}
</script>