<script setup>
import { reactive, h, ref } from "vue";
import { NButton, useMessage } from "naive-ui";
import balance from "@/components/balance.vue"
import normalModal from "@/components/normalModal.vue";
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
const isShowWithdraw = ref(false)
const isShowTransfer = ref(false)
</script>
<template>
  <balance title="我的邀请" amountDesc="当前剩余佣金" #button>
    <div class="flex gap-15px">
      <n-button @click="isShowTransfer = true" size="small" color="#316c72">划转</n-button>
      <n-button @click="isShowWithdraw = true" size="small" color="#316c72">推广佣金提现</n-button>
    </div>
  </balance>
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
  <normalModal title="推广佣金划转至余额" v-model="isShowWithdraw">
    <div>
      <div class="mb-5px">提现方式</div>
      <n-select placeholder="请选择提现方式" :options="ticketLevel"></n-select>
    </div>
    <div>
      <div class="mb-5px">提现账号</div>
      <n-input placeholder="请选择提现账号"></n-input>
    </div>
  </normalModal>
  <normalModal title="推广佣金划转至余额" v-model="isShowTransfer">
    <n-alert type="warning">划转后的余额仅用于小明云加速消费使用</n-alert>
    <div>
      <div class="mb-5px">提现方式</div>
      <n-select placeholder="请选择提现方式" :options="ticketLevel"></n-select>
    </div>
    <div>
      <div class="mb-5px">提现账号</div>
      <n-input placeholder="请选择提现账号"></n-input>
    </div>
  </normalModal>
</template>