<template>
  <view
    :class="[clz.root(), className, `span-${span}`]"
    class="float border-box"
    :style="{
      paddingRight: `${gutter}rpx`,
      paddingTop: `${rowGutter}rpx`,
      marginLeft: `${(100 / 24) * Number(offset)}%`,
      textAlign: align,
    }"
    @tap="$emit('click', index)"
  >
    <slot />
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { inject } from 'vue';
  import { props } from './_props';

  const ComponentName = 'sl-col';
  const clz = useClassName(ComponentName);

  defineProps(props);
  defineEmits(['click']);

  const gutter = inject('gutter', 16);
  const rowGutter = inject('rowGutter', 16);
</script>
