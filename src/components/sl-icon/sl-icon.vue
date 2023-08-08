<template>
  <view
    :class="[clz.root(), className]"
    class="flex-inline lh-0"
    :style="styleProps"
    :hover-start-time="10"
    :hover-stay-time="10"
    :hover-class="hoverClass"
    @click="$emit('click', index)"
  >
    <view
      :class="[clz.join('body'), iconLib, `${iconLib}-${name}`, `color-${color}`]"
      class="flex-center"
      :style="{ fontSize: `${size}rpx` }"
    ></view>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-icon';
  const clz = useClassName(ComponentName);

  defineProps(props);
  defineEmits(['click']);
</script>
