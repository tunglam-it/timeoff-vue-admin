<template>
  <AppHeader />
  <!-- <ManageUser /> -->
  <ManageUserTable />
  <AppFooter />
</template>

<script>
import AppHeader from "../../../components/AppHeader.vue";
import AppFooter from "../../../components/AppFooter.vue";
import ManageUserTable from "../../../components/Admin/ManageUserTable.vue";
// import ManageUser from "../../../components/Admin/ManageUser.vue";
export default {
  name:'UserManage',
  components: {
    AppFooter,
    AppHeader,
    ManageUserTable
}
}
</script>