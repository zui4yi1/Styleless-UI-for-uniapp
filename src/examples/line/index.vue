<template>
  <s-page title="sl-line" className="plr-l">
    <Brief
      desc="0.5px的细线组件, 可横可竖, 常用作分割线。1px的线在一些手机上看着很粗, 可用此组件解决。（带文字的分割线就不提供了, 无通用性）"
    />

    <Tip title="各种颜色的细线" desc="color= primary | success ..." />
    <sl-line :color="color" v-for="color in themes" :key="color" className="mt-d" />

    <Tip title="取消细线" desc="isHairLine=false" className="mt-d" />
    <sl-line color="primary" :isHairLine="false" className="mt-d" />

    <Tip title="也可以定义其它尺寸的粗线" desc="isHairLine=false, size=4px" className="mt-d" />
    <sl-line color="primary" :isHairLine="false" size="4px" className="mt-d" />

    <Tip
      title="竖的"
      desc="direction=y, length=60px(高和宽都统一使用参数length)"
      className="mt-d"
    />
    <sl-line direction="y" length="60rpx" :isHairLine="false" size="2px" color="pink" />
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error', 'warning', 'pink', 'blue'];
</script>
