<template>
  <s-page title="sl-nav-bar" className="plr-l" :autoHomeOrLeftIcon="autoHomeOrLeftIcon">
    <template #navBarLeft>
      <view v-if="customLeft">左侧...</view>
    </template>
    <template #navBarRight>
      <view v-if="customRight">右侧...</view>
    </template>
    <Brief
      desc="自定义导航栏组件, 默认与sl-page集成一起, 也可独立使用。可自动显示返回按钮/主页按钮, 也可自定义左右侧内容与事件"
    />
    <Tip
      title="自定义左右侧"
      desc="左右插糟navBarLeft和navBarRight. 自动显示图标功能也可以单独关闭, autoHomeOrLeftIcon=false"
    />
    <view class="flex-between mt-d">
      <sl-button
        width="200rpx"
        @click="
          autoHomeOrLeftIcon = false;
          customLeft = true;
        "
      >
        自定义左侧
      </sl-button>
      <sl-button
        width="200rpx"
        @click="
          autoHomeOrLeftIcon = true;
          customLeft = false;
          customRight = false;
        "
      >
        还原
      </sl-button>
      <sl-button width="200rpx" @click="customRight = true">自定义右侧</sl-button>
    </view>
  </s-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  const autoHomeOrLeftIcon = ref(true);

  const customLeft = ref(false);
  const customRight = ref(false);
</script>
