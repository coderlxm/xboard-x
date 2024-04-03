<script setup>
import { RouterView, useRoute } from "vue-router";
const routes = useRoute()
console.log(routes);
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
