<template>
  <div id="app" class="wrapper">
    <router-view></router-view>
    <concat-page></concat-page>
  </div>
</template>

<script>
import concatPage from "@/concat-page.vue";

export default {
  name: "App",
  components: {
    concatPage,
  },
};
</script>

<style>
</style>
