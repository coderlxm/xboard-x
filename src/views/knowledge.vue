<script setup>
import asyncCom from '@/components/asyncCom.vue';
import { http } from '@/tools/httpReq';
import { reactive } from "vue";
let oneword = reactive({})
const getOneWord = async () => {
  const value = await http.get('https://v1.hitokoto.cn')
  Object.assign(oneword, value)
}
getOneWord()

</script>
<template>
  <n-input-group>
    <n-input placeholder="使用文档" :style="{ width: '100%' }" />
    <n-button color="#316c72" ghost>
      搜索
    </n-button>
  </n-input-group>
  <div>
    <asyncCom v-model:oneword1="oneword.hitokoto" v-model:oneword2="oneword.from" :oneword="oneword"></asyncCom>
  </div>
</template>