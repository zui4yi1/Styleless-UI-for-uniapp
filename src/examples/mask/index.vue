<template>
  <s-page title="sl-mask" className="plr-l">
    <Brief
      desc="遮罩层组件, 自带各种模式mode, 是其它所有弹窗组件的底层组件. mode可定义左右上下中五种方向, 默认下"
    />
    <Tip title="点击查看五种模式的效果" desc="因弹出层有动效, 故若有多个模式时, 需分别定义mask" />

    <view class="flex-between mt-d">
      <sl-button @click="openLeft = true" size="button-small" width="100rpx">左侧</sl-button>
      <sl-button @click="openRight = true" size="button-small" width="100rpx">右侧</sl-button>
      <sl-button @click="openTop = true" size="button-small" width="100rpx">顶部</sl-button>
      <sl-button @click="openBottom = true" size="button-small" width="100rpx">底部</sl-button>
      <sl-button @click="openCenter = true" size="button-small" width="100rpx">居中</sl-button>
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
  import Brief from '../_components/brief/index.vue';
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
