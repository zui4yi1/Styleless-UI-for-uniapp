<template>
  <view :class="[clz.root(), className, paddingClz]" class="fixed z-index-layout abs-bottom">
    <slot />
    <sl-fill-line isBottom />
  </view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-bottom';
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
