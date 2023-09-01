<template>
  <view :class="[className]" class="height-cell-default flex">
    <view class="border-left border-primary border-thick4">
      <text class="bold font-title ml-s">{{ title }}</text>
    </view>
  </view>
  <view class="font-secondary color-placeholder">
    <slot>
      {{ desc }}
    </slot>
  </view>
</template>
<script setup lang="ts">
  interface IProps {
    className?: string;
    title: string;
    desc?: string;
  }
  withDefaults(defineProps<IProps>(), {
    className: '',
    title: '',
    desc: '',
  });
</script>
