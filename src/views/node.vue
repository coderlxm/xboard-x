<script setup>

</script>
<template>
  <n-alert type="info">
    没有可用节点，如果您未订阅或已过期请 <router-link class="font-700" :to="{ name: 'plan' }">订阅</router-link>
  </n-alert>
</template>