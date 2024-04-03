<script setup>
import { ref } from "vue";
const username = ref('')
const pwd = ref('')
</script>

<template>
  <div class="flex justify-center flex-items-center h-full">
    <n-card style="padding: 0;width: 33%;height: 50%;">
      <div class="p-24px">
        <h1 class="m-1 text-center text-36px font-normal">小明云加速</h1>
        <h5 class="font-400 text-center mb-3">姚黄魏紫开次第，不觉成恨俱零凋。</h5>
      </div>
      <div style="width: 90%;margin: 0 auto;">
        <n-input class="mb-5" v-model:value="username" type="text" placeholder="邮箱" />
        <n-input v-model:value="pwd" type="password" placeholder="密码" />
      </div>
      <div style="width: 90%;margin: 20px auto;">
        <n-button style="width: 100%;" color="#316C72FF">
          <!-- <template #icon>
            <n-icon>
              <cash-icon />
            </n-icon>
          </template> -->
          登入
        </n-button>
      </div>
      <div class="bottom-banner">
        <div>
          <a class="mr-4 color-#6c757d" href="">注册</a>
          <a class="color-#6c757d" href="">忘记密码</a>
        </div>
        <div>
          简体中文
        </div>
      </div>
    </n-card>
  </div>
</template>
<style>
.n-card__content {
  padding: 0;
}

.n-card>.n-card__content:first-child {
  padding: 0;
}

.bottom-banner {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 25px;
  justify-content: space-between;
  align-items: center;
  height: 59px;
  /* flex-grow: 1; */
  background-color: #fafafc;
  /* background-color: pink; */
}
</style>