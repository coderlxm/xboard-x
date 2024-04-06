<script setup>
import { RouterView } from "vue-router";

</script>

<template>
  <n-loading-bar-provider>
    <n-notification-provider>
      <RouterView />
    </n-notification-provider>
  </n-loading-bar-provider>
</template>

<style scoped></style>
