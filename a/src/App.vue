<template>
  <div id="app" class="wrapper">
    <router-view></router-view>
    <hello-world></hello-world>
  </div>

</template>

<script>
import HelloWorld from "@/HelloWorld";

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
