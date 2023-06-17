<template>
  <AppHeader />
    

  <AppFooter />
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
import AppHeader from '../components/AppHeader.vue';
import axios from "axios";
export default {
  components: {
    AppFooter,
    AppHeader
  },
};
</script>