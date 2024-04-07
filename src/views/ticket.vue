<script setup>
import { ref } from "vue";
import normalModal from "@/components/normalModal.vue";
const columns = [
  {
    title: '主题',
    key: 'title',
  },
  {
    title: '工单级别',
    key: 'level',
  },
  {
    title: '工单状态',
    key: 'status',
  },
  {
    title: '创建时间',
    key: 'create',
  },
  {
    title: '最后回复时间',
    key: 'reply',
  },
  {
    title: '操作',
    key: 'operate',
  },
]
const ticketLevel = [
  {
    label: '低',
    value: 'low'
  },
  {
    label: '中',
    value: 'medium'
  },
  {
    label: '高',
    value: 'high'
  },
]

const isShow = ref(false)

</script>
<template>
  <n-card title="工单历史">
    <template #header-extra>
      <n-button color="#316c72" @click="isShow = true" round>新的工单</n-button>
    </template>
    <n-data-table :columns="columns">
    </n-data-table>
  </n-card>
  <normalModal title="新的工单" v-model="isShow">
    <div>
      <div class="mb-5px">主题</div>
      <n-input placeholder="请输入工单主题"></n-input>
    </div>
    <div>
      <div class="mb-5px">工单级别</div>
      <n-select placeholder="请选择" :options="ticketLevel"></n-select>
    </div>
    <div>
      <div class="mb-5px">消息</div>
      <n-input placeholder="请描述您遇到的问题" type="textarea"></n-input>
    </div>
  </normalModal>
</template>
