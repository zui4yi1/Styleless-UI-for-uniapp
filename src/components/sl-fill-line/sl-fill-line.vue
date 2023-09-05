<template>
  <view
    :class="[
      clz.root(),
      className,
      `bg-${bg}`,
      { 'safe-bottom': isBottom, [`height-${size}`]: size.length > 0 && height === 0 },
    ]"
    class=""
    :style="height ? { height: typeof height === 'number' ? `${height}rpx` : height } : {}"
  ></view>
</template>
<script setup lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-fill-line';
  const clz = useClassName(ComponentName);

  defineProps(props);
</script>
