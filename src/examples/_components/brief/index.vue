<template>
  <view :class="[className]" class="height-cell-default flex">
    <text class="bold font-title">{{ title }}</text>
  </view>
  <view class="color-secondary mb-xl">{{ desc }}</view>
</template>
<script setup lang="ts">
  interface IProps {
    className?: string;
    title?: string;
    desc: string;
  }
  withDefaults(defineProps<IProps>(), {
    className: '',
    title: '简介',
    desc: '',
  });
</script>
