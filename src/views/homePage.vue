<template>
  <n-space vertical class="h-full">
    <n-layout class="h-100vh">
      <n-layout has-sider class="h-full">
        <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" :native-scrollbar="false"
          style="max-height: 100vh">
          <div class="h-60px flex justify-center">
            <h2 class="text-16px ml-10px max-w-140px flex-shrink-0 color-primary">小明云加速</h2>
          </div>
          <n-menu v-model:value="activeKey" :options="menuOptions" />
        </n-layout-sider>
        <article class="flex flex-col flex-1 overflow-hidden">
          <header class="flex items-center bg-white px-15px" style="height: 60px;">
            <div class="flex items-center">{{ currentItem }}</div>
            <div class="flex ml-auto items-center">
              <n-dialog-provider>
                <personInfoPanel :options="personInfoOptions"></personInfoPanel>
              </n-dialog-provider>
            </div>
          </header>
          <section class="flex-1 overflow-hidden">
            <section style="overflow-y: auto;"
              class="w-full h-full flex flex-col bg-[#f5f6fb] p-5px dark:bg-hex-121212 md:p-15px">
              <!-- <component :is="currentComponent" /> -->
              <n-modal-provider>
                <n-message-provider>
                  <Router-view></Router-view>
                </n-message-provider>
              </n-modal-provider>
            </section>
          </section>
        </article>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script setup>
import { h, ref, watchEffect } from "vue";
import { RouterLink, useRoute } from "vue-router";
import personInfoPanel from "@/components/personInfoPanel.vue";

const currentItem = ref('仪表盘')
const route = useRoute()
const titleMap = {
  'dashboard': '仪表盘',
  'knowledge': '使用文档',
  'order': '我的订单',
  'invite': '我的邀请',
  'plan': '购买订阅',
  'node': '节点状态',
  'profile': '个人中心',
  'ticket': '我的工单',
  'traffic': '流量明细',
}
const personInfoOptions = [
  { label: '个人中心', key: 'person' },
  { label: '登出', key: 'logout' }
]
const activeKey = ref(null)
// const componentMap = {
//   '003': myOrders,
//   '002': useDocument
// };
// function handleMenuUpdate(value) {
//   currentItem.value = menuOptions.find(item => item.key === value).label
//   currentComponent.value = componentMap[value];
// }
// const menuOptions = [
//   {
//     label: "仪表盘",
//     key: "dashboard",
//   },
//   {
//     label: "使用文档",
//     key: "knowledge",
//   },
//   {
//     label: "我的订单",
//     key: "order",
//   },
//   {
//     label: "我的邀请",
//     key: "invite",
//   },
//   {
//     label: "购买订阅",
//     key: "plan",
//   },
//   {
//     label: "节点状态",
//     key: "node",
//   },
//   {
//     label: "个人中心",
//     key: "profile",
//   },
//   {
//     label: "我的工单",
//     key: "ticket",
//   },
//   {
//     label: "流量明细",
//     key: "traffic",
//   },
// ];
const menuOptions = [
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "dashboard"
        }
      },
      { default: () => "仪表盘" }
    ),
    key: "dashboard",
    // icon: renderIcon(HomeIcon)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "knowledge"
        }
      },
      { default: () => "使用文档" }
    ),
    key: "knowledge"
    // icon: renderIcon(HomeIcon)
  },
  {
    type: 'group',
    label: '财务',
    key: 'group1',
    children: [
      {
        label: () => h(
          RouterLink,
          {
            to: {
              name: "order"
            }
          },
          { default: () => "我的订单" }
        ),
        key: "order"
        // icon: renderIcon(HomeIcon)
      },
      {
        label: () => h(
          RouterLink,
          {
            to: {
              name: "invite"
            }
          },
          { default: () => "我的邀请" }
        ),
        key: "invite"
        // icon: renderIcon(HomeIcon)
      },
    ]
  },
  {
    type: 'group',
    label: '订阅',
    key: 'group2',
    children: [
      {
        label: () => h(
          RouterLink,
          {
            to: {
              name: "plan"
            }
          },
          { default: () => "购买订阅" }
        ),
        key: "plan"
        // icon: renderIcon(HomeIcon)
      },
      {
        label: () => h(
          RouterLink,
          {
            to: {
              name: "node"
            }
          },
          { default: () => "节点状态" }
        ),
        key: "node"
        // icon: renderIcon(HomeIcon)
      },
    ]
  },
  {
    type: 'group',
    label: '用户',
    key: 'group3',
    children: [
      {
        label: () => h(
          RouterLink,
          {
            to: {
              name: "profile"
            }
          },
          { default: () => "个人中心" }
        ),
        key: "profile"
        // icon: renderIcon(HomeIcon)
      },
      {
        label: () => h(
          RouterLink,
          {
            to: {
              name: "ticket"
            }
          },
          { default: () => "我的工单" }
        ),
        key: "ticket"
        // icon: renderIcon(HomeIcon)
      },
      {
        label: () => h(
          RouterLink,
          {
            to: {
              name: "traffic"
            }
          },
          { default: () => "流量明细" }
        ),
        key: "traffic"
        // icon: renderIcon(HomeIcon)
      }
    ]
  },
];
// const MenuDividerOption = [
//   {
//     label: '分组1',
//     type: 'group',
//     key: 'group1',
//     children: [
//       {
//         label: '选项1',
//         key: 'item1'
//       },
//       {
//         label: '选项2',
//         key: 'item2'
//       }
//     ]
//   },
//   {
//     label: '分组2',
//     type: 'group',
//     key: 'group2',
//     children: [
//       {
//         label: '选项3',
//         key: 'item3'
//       },
//       {
//         label: '选项4',
//         key: 'item4'
//       }
//     ]
//   }
//   // ...其他分组或菜单项
// ]

watchEffect(() => {
  currentItem.value = titleMap[route.name]
  activeKey.value = route.name
})
</script>