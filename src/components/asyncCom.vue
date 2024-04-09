<script setup>
import { computed } from "vue";
const props = defineProps(['oneword'])

const keyword1 = defineModel('oneword1')
const keyword2 = defineModel('oneword2')
</script>
<template>
  <div class="flex flex-col">
    <ul class="grid gap-20px color-primary">
      <li>同步的：姚黄魏紫开次第，不觉成恨俱零凋</li>
      <li>异步的：{{ props?.oneword?.hitokoto }} —— 出自《{{ props?.oneword?.from }}》</li>
    </ul>
    <div class="w50% flex flex-col">
      一言：<n-input class="mb10px mt5px" v-model:value="keyword1"></n-input>
      出自：<n-input class="mt5px" v-model:value="keyword2"></n-input>
    </div>
  </div>
</template>