<template>
  <header class="d-flex justify-content-between text-white align-items-center header-bg">
    <div class="ms-5 fs-09" ><p class="fw-bold m-0">DevFast</p></div>
    <div class="me-5 fs-09" >
      <router-link :to="{name:`${linksTo}`}" class="alert-link">
        <slot></slot>
      </router-link>
    </div>
  </header>
</template>

<script>

export default {
  props:{
    linksTo: "",
  },
}
</script>