<template>
  <view
    :class="[clz.root(), className, { [`bg-${bg}`]: height !== '' }]"
    class="h100"
    :style="height === '' ? { height: '100%' } : { height: height }"
  >
    <view :class="[`bg-${bg}`]">
      <slot />
    </view>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { inject } from 'vue';
  import { props } from './_props';

  const ComponentName = 'sl-td';
  const clz = useClassName(ComponentName);

  const height = inject('height', '');

  defineProps(props);
  // defineEmits(['click']);
</script>
