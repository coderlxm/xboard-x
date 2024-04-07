<script setup>
const columns = [
  {
    title: '#订单号',
    key: 'orderNum'
  },
  {
    title: '周期',
    key: 'cycle'
  },
  {
    title: '订单金额',
    key: 'orderSum'
  },
  {
    title: '订单状态',
    key: 'orderStatus'
  },
  {
    title: '创建时间',
    key: 'createTime'
  },
  {
    title: '操作',
    key: 'operate'
  },
]
</script>
<template>
  <n-data-table style="width: 100%;" :columns="columns" :data="data" :bordered="false" />
</template>