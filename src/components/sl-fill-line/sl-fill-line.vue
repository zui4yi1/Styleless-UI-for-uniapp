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

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-fill-line';
  const clz = useClassName(ComponentName);
  export default {
    name: ComponentName,
    options: {
      virtualHost: true,
      inheritAttrs: false,
    },
  };
</script>

<script setup lang="ts">
  import { props } from './_props';
  defineProps(props);
</script>
