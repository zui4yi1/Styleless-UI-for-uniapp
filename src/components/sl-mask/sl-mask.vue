<template>
  <view
    :class="[
      clz.root(),
      className,
      open ? 'toppest scale opacity-1' : 'z-hide scale-popup opacity-0',
    ]"
    class="fixed abs-full mask-1 transition-mask"
    hover-stop-propagation
    @tap="closeOnTab && $emit('update:open', false)"
    @touchmove.stop.prevent="() => {}"
  >
    <view :class="[clz.body(), `abs-${mode}`]" class="absolute">
      <slot />
    </view>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-mask';
  const clz = useClassName(ComponentName);

  defineProps(props);
  defineEmits(['update:open']);
</script>
