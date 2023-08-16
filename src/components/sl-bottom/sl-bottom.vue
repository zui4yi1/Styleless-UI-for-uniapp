<template>
  <view :class="[clz.root(), className, paddingClz]" class="fixed z-index-layout abs-bottom">
    <slot />
    <sl-fill-line isBottom />
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-bottom';
  const clz = useClassName(ComponentName);

  defineProps(props);
</script>
