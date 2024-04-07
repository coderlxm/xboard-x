<script setup>
import balance from '@/components/balance.vue';
import { ref, reactive } from "vue";
import { useMessage } from "naive-ui";
const message = useMessage()
const emailSw = ref(false)
const trafficSw = ref(false)
const pwdGroup = reactive({
  oldPwd: '',
  newPwd: '',
  newConfirmPwd: ''
})
const savePwd = () => {
  if (pwdGroup.oldPwd.trim() === '') {
    message.error('旧密码不能为空')
  } else if (pwdGroup.newPwd.trim() === '' || pwdGroup.newConfirmPwd.trim() === '') {
    message.error('新密码不能为空')
  } else {
    if (pwdGroup.newPwd !== pwdGroup.newConfirmPwd) {
      return message.error('两次输入的密码不一致')
    }
    new Promise((resolve) => {
      resolve('修改成功')
    })
      .then((res) => {
        message.success('密码修改成功')
      })
  }
}
const handleChangeEmail = () => {
  setTimeout(() => {
    message.success('更新成功')
  }, 500);
}
const handleChangeTraffic = () => {
  setTimeout(() => {
    message.success('更新成功')
  }, 500);
}
</script>
<template>
  <balance title="我的钱包" amountDesc="账户余额（仅消费）"></balance>
  <n-card title="修改密码" class="mb-15px">
    <div class="flex flex-col gap-10px">
      <div class="w40%">
        <div>旧密码</div>
        <n-input v-model:value="pwdGroup.oldPwd" placeholder="请输入旧密码"></n-input>
      </div>
      <div class="w40%">
        <div>新密码</div>
        <n-input v-model:value="pwdGroup.newPwd" placeholder="请输入新密码"></n-input>
      </div>
      <div class="w40%">
        <div>新密码</div>
        <n-input v-model:value="pwdGroup.newConfirmPwd" placeholder="请输入新密码"></n-input>
      </div>
    </div>
    <n-button class="mt20px" @click="savePwd" color="#316c72">保存</n-button>
  </n-card>
  <n-card title="通知" class="mb-15px">
    <div class="mb-10px">
      <div class="mb-10px">到期邮件提醒</div>
      <n-switch @update:value="handleChangeEmail" v-model="emailSw"></n-switch>
    </div>
    <div class="mb-10px">
      <div class="mb-10px">流量邮件提醒</div>
      <n-switch @update:value="handleChangeTraffic" v-model="trafficSw"></n-switch>
    </div>
  </n-card>
  <n-card title="重置订阅信息">
    <n-alert type="warning">当你的订阅地址或账户发生泄漏被他人滥用时，可以在此重置订阅信息。避免带来不必要的损失。</n-alert>
    <n-button size="small" class="mt-10px" color="#d03050">重置</n-button>
  </n-card>
</template>
<style>
.n-switch.n-switch--active .n-switch__rail {
  background-color: #316c72;
}
</style>