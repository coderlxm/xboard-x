<script setup>
import loginPanel from "@/components/loginPanel.vue";
</script>
<template>
  <div class="full-screen-image">
    <loginPanel></loginPanel>
  </div>
</template>
<style>
.full-screen-image {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-image: url('/src/assets/1920.jpg');
  background-size: cover;
  /* background-position: center; */
  background-repeat: no-repeat;
}
</style>