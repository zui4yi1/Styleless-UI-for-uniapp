<template>
  <view
    :class="[clz.root(), className, layout]"
    class=""
    :style="{
      paddingRight: `${gutter}rpx`,
      paddingTop: `${rowGutter}rpx`,
    }"
    @tap="$emit('click', index)"
  >
    <slot />
  </view>
</template>
<script setup lang="ts">
  import { inject } from 'vue';
  import { useClassName } from '../../hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-space-item';
  const clz = useClassName(ComponentName);

  defineProps(props);
  defineEmits(['click']);

  const gutter = inject('gutter', 16);
  const rowGutter = inject('rowGutter', 16);
  const layout = inject('layout', 'float');
</script>
