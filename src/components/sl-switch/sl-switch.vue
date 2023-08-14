<template>
  <view :class="[clz.root(), className]" class=""></view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-switch';
  const clz = useClassName(ComponentName);

  defineProps(props);
  // defineEmits(['click']);
</script>
