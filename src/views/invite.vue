<script setup>
import { reactive, h } from "vue";
import { NButton, useMessage } from "naive-ui";
const message = useMessage()
const columns = [
  {
    title: '邀请码',
    key: 'invitecode',
    render(row) {
      return [
        h('span', {}, row.invitecode),
        h(
          NButton,
          {
            color: '#2080f0',
            class: 'ml-5px',
            text: true,
            size: "small",
            onClick: () => {
              navigator.clipboard.writeText('https://v2xm.xmcloud.buzz/' + row.invitecode).then(() => {
                message.success('复制成功')
              })
            }
          },
          { default: () => "复制链接" }
        )
      ]
    }
  },
  {
    title: '创建时间',
    key: 'createtime'
  }
]
const inviteCodeData = reactive([])
const generateCode = () => {
  inviteCodeData.push({
    invitecode: 'UMnPuCp5',
    createtime: new Date().getYear()
  })
}
const columnsForDelivery = [
  {
    key: 'deliverytime',
    title: '发放时间',
    width: '200'
  },
  {
    key: 'amount',
    title: '佣金',
    width: '200'
  }
]
</script>
<template>
  <n-card class="mb-15px" title="我的邀请">
    <template #header-extra>
      icon
    </template>
    <div class="flex flex-col gap-10px">
      <div>
        <span class="text-50px font-400">0.00</span>
        <span class="ml-20px text-#6c757d text-20px">CNY</span>
      </div>
      <div class="text-gray">当前剩余佣金</div>
      <div class="flex gap-15px">
        <n-button size="small" color="#316c72">划转</n-button>
        <n-button size="small" color="#316c72">推广佣金提现</n-button>
      </div>
    </div>
  </n-card>
  <n-card class="mb-15px">
    <div class="flex flex-col gap-10px">
      <div class="w-full flex justify-between">
        <div>已注册用户数</div>
        <div>0人</div>
      </div>
      <div class="w-full flex justify-between">
        <div>佣金比例</div>
        <div>10%</div>
      </div>
      <div class="w-full flex justify-between">
        <div>确认中的佣金</div>
        <div>￥0.00</div>
      </div>
      <div class="w-full flex justify-between">
        <div>累计获得佣金</div>
        <div>￥0.00</div>
      </div>
    </div>
  </n-card>
  <n-card class="mb-15px" title="邀请码管理">
    <template #header-extra>
      <n-button @click="generateCode" size="small" color="#316c72">生成邀请码</n-button>
    </template>
    <n-data-table :max-height="200" :data="inviteCodeData" :columns="columns" :bordered="false" />
  </n-card>
  <n-card title="佣金发放记录">
    <n-data-table :columns="columnsForDelivery" :bordered="false"></n-data-table>
  </n-card>
</template>