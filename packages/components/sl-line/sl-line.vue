<template>
  <view :class="[clz.root(), className, `border-${color}`]" class="" :style="styleObj"></view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';
  import { useLine } from './useLine';

  const ComponentName = 'sl-line';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  const styleObj = useLine(_props);
</script>
