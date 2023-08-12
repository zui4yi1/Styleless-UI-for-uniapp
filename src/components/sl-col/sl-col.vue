<template>
  <view
    :class="[clz.root(), className, `span-${span}`]"
    class="float border-box"
    :style="{
      height: `${height}rpx`,
      paddingRight: `${gutter}rpx`,
      paddingTop: `${rowGutter}rpx`,
      marginLeft: `${(100 / 24) * Number(offset)}%`,
      textAlign: align,
    }"
    @tap="$emit('click', index)"
  >
    <view
      :class="[clz.body(), `radius-${radius}`, `bg-${bg}`]"
      class="border"
      :style="{ height: '100%' }"
    >
      <slot />
    </view>
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
  const height = inject('height', 88);
  const radius = inject('radius', 'none');
</script>
