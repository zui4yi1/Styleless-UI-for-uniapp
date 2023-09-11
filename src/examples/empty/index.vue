<template>
  <s-page title="sl-empty" className="plr-l">
    <Brief desc="无数据提示组件, 可定义图标、文字、方向、尺寸、颜色、背景等" />
    <Tip title="横向" desc="默认type=x" />
    <sl-empty className="mt-d" />
    <Tip title="横向, 蓝底白字" desc="bg=primary-hover, color=white" className="mt-d" />
    <view class="h-120 mt-d">
      <sl-empty bg="blue" color="white" />
    </view>
    <Tip title="纵向" desc="type=y, top=300(默认), 常用于页面级的无数据提示" className="mt-d" />
    <sl-empty type="y" className="mt-d" />
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
</script>
