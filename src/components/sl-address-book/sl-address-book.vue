<template>
  <view :class="[clz.root(), className]" class="relative">
    <view :class="[clz.body()]"></view>
    <view :class="[clz.right()]" class="absolute"></view>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-';
  const clz = useClassName(ComponentName);

  defineProps(props);
  // defineEmits(['click']);
</script>
