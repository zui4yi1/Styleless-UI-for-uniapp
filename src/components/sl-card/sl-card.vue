<template>
  <view
    :class="[
      clz.root(),
      className,
      paddingClz,
      borderClz,
      `bg-${bg}`,
      `radius-${radius}`,
      {
        shadow: hasShadow,
      },
    ]"
    @click="$emit('click', index)"
  >
    <view :class="clz.body()">
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
