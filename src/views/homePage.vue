<template>
  <n-space vertical class="h-full">
    <n-layout class="h-100vh">
      <n-layout has-sider class="h-full">
        <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" :native-scrollbar="false"
          style="max-height: 100vh">
          <div class="h-60px flex justify-center">
            <h2 class="text-16px ml-10px max-w-140px flex-shrink-0 color-primary">小明云加速</h2>
          </div>
          <n-menu @update:value="handleMenuUpdate" :options="menuOptions" />
        </n-layout-sider>
        <n-layout>
          <header class="flex items-center bg-white px-15" style="height: 60px;position: fixed;z-index: 1;width: 100%;">
            <div>
              <div>{{ currentItem }}</div>
              <div></div>
            </div>
          </header>
          <n-layout-content class="bg-[#f5f6fb] h-full">
            <component :is="currentComponent" />
          </n-layout-content>
        </n-layout>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script setup>
import { ref } from "vue";
import myOrders from "./myOrders.vue"
import useDocument from "./useDocument.vue"
const currentComponent = ref();
const currentItem = ref('')
const componentMap = {
  '003': myOrders,
  '002': useDocument
  // ... 其他映射
};
function handleMenuUpdate(value) {
  currentItem.value = menuOptions.find(item => item.key === value).label
  currentComponent.value = componentMap[value];
}
const menuOptions = [
  {
    label: "仪表盘",
    key: "001",
  },
  {
    label: "使用文档",
    key: "002",
  },
  {
    label: "我的订单",
    key: "003",
  },
  {
    label: "我的邀请",
    key: "004",
  },
  {
    label: "购买订阅",
    key: "005",
  },
  {
    label: "节点状态",
    key: "006",
  },
  {
    label: "个人中心",
    key: "007",
  },
  {
    label: "我的工单",
    key: "008",
  },
  {
    label: "流量明细",
    key: "009",
  },
];
</script>