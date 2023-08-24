<template>
  <s-page title="sl-mask" className="plr-l">
    <Tip title="选择模式" desc="因弹出层有动效, 每个模式需分别定义mask" />

    <view class="flex-between mt-d">
      <sl-button @click="openLeft = true" size="button-small">左</sl-button>
      <sl-button @click="openRight = true" size="button-small">右</sl-button>
      <sl-button @click="openTop = true" size="button-small">上</sl-button>
      <sl-button @click="openBottom = true" size="button-small">下</sl-button>
      <sl-button @click="openCenter = true" size="button-small">中</sl-button>
    </view>

    <sl-mask mode="left" v-model:open="openLeft" closeOnTab>
      <view class="h100 bg-white w-120">左侧...</view>
    </sl-mask>
    <sl-mask mode="right" v-model:open="openRight" closeOnTab>
      <view class="h100 bg-white w-120">右侧...</view>
    </sl-mask>
    <sl-mask mode="top" v-model:open="openTop" closeOnTab>
      <view class="w100 bg-white h-120">顶部...</view>
    </sl-mask>
    <sl-mask mode="bottom" v-model:open="openBottom" closeOnTab>
      <view class="w100 bg-white h-120">底部...</view>
    </sl-mask>
    <sl-mask mode="center" v-model:open="openCenter" closeOnTab>
      <view class="w100 bg-white h-120">居中...</view>
    </sl-mask>
  </s-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];

  const openLeft = ref(false);
  const openRight = ref(false);
  const openTop = ref(false);
  const openBottom = ref(false);
  const openCenter = ref(false);
</script>
