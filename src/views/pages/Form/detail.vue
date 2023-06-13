<template>
  <AppHeader/>
  <FormDetail/>
  <AppFooter/>
</template>

<script>
import AppFooter from '../../../components/AppFooter.vue';
import AppHeader from '../../../components/AppHeader.vue';
import FormDetail from '../../../components/Form/FormDetail.vue';

export default {
  name: 'DetailForm',
  components: {AppFooter, AppHeader, FormDetail},

}
</script>

<style>

</style>