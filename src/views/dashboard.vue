<script setup>
import { useRouter } from "vue-router";
const router = useRouter()
</script>
<template>
  <n-card class="mt-20px" title="我的订阅">
    <div class="cursor-pointer text-center" @click="router.push({ name: 'plan' })">
      <n-icon size="60">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
        </svg>
      </n-icon>
      <div class="text-gray">购买订阅</div>
    </div>
  </n-card>
  <n-card class="mt-20px" title="捷径">
    <div>
      <n-list>

      </n-list>
    </div>
  </n-card>
</template>