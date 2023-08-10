<template>
  <view
    :class="[clz.root(), className]"
    class="fix fix_topest"
    :style="{
      top: isCustomNavBar ? `${top}px` : 0,
    }"
  >
    <slot />
  </view>
  <sl-fill-line :height="height" />
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { getCurrentInstance } from 'vue';
  import { props } from './_props';
  import { useTop } from './useTop';

  const ComponentName = 'sl-top';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  const instance = getCurrentInstance();

  const { top, height } = useTop(_props, instance);
</script>
