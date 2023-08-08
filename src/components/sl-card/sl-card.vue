<template>
  <view
    :class="[
      clz.root(),
      className,
      padding,
      `bg-${bg}`,
      `radius-${radius}`,
      {
        shadow: hasShadow,
      },
    ]"
    class="border border-line-default"
    @click="$emit('click', index)"
  >
    <view :class="clz.join('body')">
      <slot />
    </view>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-card';
  const clz = useClassName(ComponentName);

  defineProps(props);
  defineEmits(['click']);
</script>
