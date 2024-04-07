<script setup>
import { ref } from "vue";
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
const showModal = ref(false)
</script>
<template>
  <n-card title="工单历史">
    <template #header-extra>
      <n-button color="#316c72" @click="showModal = true" round>新的工单</n-button>
    </template>
    <n-data-table :columns="columns">
    </n-data-table>
  </n-card>
  <n-modal :mask-closable=false v-model:show="showModal">
    <n-card class="ticketModal" style="width: 600px" title="新的工单" :bordered="false" role="dialog" aria-modal="true">
      <div class="flex flex-col gap5px mt20px">
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
      </div>
      <template #footer>
        <div class="flex justify-end mt-20px">
          <n-button ghost class="mr-10px" @click="showModal = false">取消</n-button>
          <n-button color="#316c72">确认</n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>
<style>
.ticketModal>.n-card__content {
  border-top: 1px solid rgb(239, 239, 245)
}

.ticketModal>.n-card__content {
  border-bottom: 1px solid rgb(239, 239, 245)
}
</style>