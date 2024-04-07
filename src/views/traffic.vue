<script setup>
const columns = [
  {
    title: '记录时间',
    key: 'rectime'
  },
  {
    title: '实际上行',
    key: 'realupload'
  },
  {
    title: '实际下行',
    key: 'realdwnload'
  },
  {
    title: '扣费倍率',
    key: 'payratio'
  },
  {
    title: '总计',
    key: 'sum'
  }
]
</script>
<template>
  <n-card>
    <n-alert type="info">流量明细仅保留近一个月数据以供查询。</n-alert>
    <n-data-table class="mt-20px" :columns="columns"></n-data-table>
  </n-card>
</template>