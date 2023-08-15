<template>
  <view :class="[clz.root(), className]" class="flex relative">
    <slot />
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { getDom } from '@/utils/dom';
  import { getCurrentInstance, onMounted, provide, ref } from 'vue';
  import { props } from './_props';

  const ComponentName = 'sl-tr';
  const clz = useClassName(ComponentName);

  defineProps(props);
  // defineEmits(['click']);

  const height = ref('');
  provide('height', height);

  const instance = getCurrentInstance();

  onMounted(async () => {
    const dom = await getDom(instance, '.' + clz.root());
    height.value = `${dom.height || 0}px`;
  });
</script>
