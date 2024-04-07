<script setup>
import { ref } from "vue";
const plan = ref()
const planOptions = [
  {
    label: '全部',
    value: 'all'
  },
  {
    label: '按周期',
    value: 'cycle'
  },
  {
    label: '按流量',
    value: 'traffic'
  },
]
</script>
<template>
  <div>
    <div class="font-size-30px mb-5px">选择最适合您的计划</div>
    <n-radio-group v-model:value="plan" name="radiobuttongroup1">
      <n-radio-button v-for="item in planOptions" :key="item.value" :value="item.value" :label="item.label" />
    </n-radio-group>
  </div>
</template>