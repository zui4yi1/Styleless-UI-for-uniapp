<template>
  <s-page title="sl-fill-line" className="plr-l">
    <Brief
      desc="无内容而只有高度的填充行, 常用于填充被遮挡区域、安全区域、页面间距等。 如sl-nav-bar, sl-top, sl-bottom这些都是浮动的固定区域, 会遮挡底下的内容。 还有安全区域, 底部弹窗时如果不填充, 内容会挤到底部"
    />
    <Tip title="测试底部的安全区域填充功能" desc="isBottom=show, 默认关" />
    <view class="flex mt-d">
      <sl-button width="200rpx" className="mr-d" @click="show = true">有填充</sl-button>
      <sl-button width="200rpx" @click="show = false">无填充</sl-button>
    </view>

    <Tip title="背景色和高度" className="mt-d">
      <view>bg, 默认透明transparent</view>
      <view>height, 注意须具体的值, 而不是尺寸</view>
    </Tip>
  </s-page>

  <view class="fixed z-index-layout abs-bottom">
    <view class="h-88 bg-primary color-white flex plr-l">底部底部。。。</view>
    <sl-fill-line :isBottom="show" />
  </view>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
  const show = ref(false);
</script>
