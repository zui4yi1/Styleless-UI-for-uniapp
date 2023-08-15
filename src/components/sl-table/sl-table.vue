<template>
  <sl-card paddingClz="plr-l" :bg="bg">
    <view :class="[clz.root(), className]" class="">
      <slot />
    </view>
  </sl-card>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-table';
  const clz = useClassName(ComponentName);

  // table啥都不用做, 只处理一些通用配置
  defineProps(props);
  // defineEmits(['click']);
</script>
