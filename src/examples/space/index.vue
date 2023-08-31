<template>
  <s-page title="sl-space-group" className="plr-l">
    <Brief desc="具有inline及自动换行效果的容器, 特点是块与块之间可定义间隙" />
    <Tip title="块之块之间具有间隙" desc="注意高度都必须相同" />
    <sl-space-group className="mt-d">
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center text">aaaaaaaaaaaaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaaaaa</view>
      </sl-space-item>
    </sl-space-group>
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
</script>
