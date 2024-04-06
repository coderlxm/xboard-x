<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const showModal = ref(false)
const shortcuts = [
  {
    title: '查看教程',
    desc: '学习如何使用 小明云加速',
    icon: ''
  },
  {
    title: '一键订阅',
    desc: '快速将节点导入对应客户端进行使用',
    icon: ''
  },
  {
    title: '购买订阅',
    desc: '对您当前的订阅进行购买',
    icon: ''
  },
  {
    title: '遇到问题',
    desc: '遇到问题可以通过工单与我们沟通',
    icon: ''
  }
]
const clickFeature = (item) => {
  if (item.title === '查看教程') {
    router.push({ name: 'knowledge' })
  } else if (item.title === '一键订阅') {
    showModal.value = true
  } else if (item.title === '购买订阅') {
    router.push({ name: 'plan' })
  } else {
    router.push({ name: 'ticket' })
  }
}
</script>
<template>
  <n-card class="mt-20px" title="我的订阅">
    <div class="cursor-pointer text-center" @click="router.push({ name: 'plan' })">
      <n-icon size="60">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
        </svg>
      </n-icon>
      <div class="text-gray">购买订阅</div>
    </div>
  </n-card>
  <n-card class="mt-20px pd0" title="捷径">
    <div>
      <n-list hoverable clickable>
        <n-list-item @click="clickFeature(item)" v-for="(item, index) in shortcuts" :key="index">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-16px">{{ item.title }}</div>
              <div class="text-14px text-gray">{{ item.desc }}</div>
            </div>
            <div></div>
          </div>
        </n-list-item>
      </n-list>
    </div>
  </n-card>
  <n-modal v-model:show="showModal" transform-origin="center">
    <n-card style="width: 600px" :bordered="false" size="huge" role="dialog" aria-modal="true">
      <n-list hoverable clickable>
        <n-list-item></n-list-item>
      </n-list>
      <template #footer>
        <div class="p10px">
          <n-button class="w100%">123</n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>
<style>
.pd0>.n-card__content {
  padding: 0
}
</style>