<template>
  <view
    :class="[clz.root(), className, layout]"
    class=""
    :style="{
      paddingRight: `${gutter}rpx`,
      paddingTop: `${rowGutter}rpx`,
    }"
    @tap="$emit('click')"
  >
    <slot />
  </view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-space-item';
  const clz = useClassName(ComponentName);
  export default {
    name: ComponentName,
    options: {
      virtualHost: true,
      inheritAttrs: false,
    },
  };
</script>

<script setup lang="ts">
  import { inject } from 'vue';
  import { props } from './_props';

  defineProps(props);
  defineEmits(['click']);

  const gutter = inject('gutter', 16);
  const rowGutter = inject('rowGutter', 16);
  const layout = inject('layout', 'float');
</script>
