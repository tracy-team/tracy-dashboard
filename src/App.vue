<template>
  <div
    class="app"
    :class="{
      padding_zero: $route.name === 'Login' || $route.name === 'Register',
    }"
  >
    <div v-if="$route.name === 'Login' || $route.name === 'Register'">
      <router-view />
    </div>
    <div v-else class="row">
      <div class="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div class="col-lg-9"><router-view /></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/partials/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
.app {
  padding: 1rem;
  font-family: "Montserrat", sans-serif;
}
.padding_zero {
  padding: 0 !important;
}
</style>
