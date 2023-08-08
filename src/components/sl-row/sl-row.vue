<template>
  <view :class="[clz.root(), className]">
    <view
      :class="[clz.join('body')]"
      class="float-clear"
      :style="{
        marginRight: `-${gutter}rpx`,
        marginTop: `-${rowGutter || gutter}rpx`,
      }"
    >
      <slot />
    </view>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { provide } from 'vue';
  import { props } from './_props';

  const ComponentName = 'sl-row';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  // defineEmits(['click']);

  provide('gutter', _props.gutter);
  provide('rowGutter', _props.rowGutter || _props.gutter);
  provide('height', _props.height);
  provide('radius', _props.radius);
</script>
