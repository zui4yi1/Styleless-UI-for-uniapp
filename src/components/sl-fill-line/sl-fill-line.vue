<template>
  <view
    :class="[
      clz.root(),
      className,
      `bg-${bg}`,
      { 'safe-bottom': isBottom, [`height-${size}`]: height !== 0 },
    ]"
    class=""
    :style="height ? { height: `${height}rpx` } : {}"
  ></view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-fill-line';
  const clz = useClassName(ComponentName);

  defineProps(props);
</script>
