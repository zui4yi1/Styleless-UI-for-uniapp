<template>
  <view
    :class="[clz.root(), className, `border-${color}`, { [`scale-half-${direction}`]: isHairLine }]"
    class=""
    :style="styleObj"
  ></view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { computed, type CSSProperties } from 'vue';
  import { props } from './_props';

  const ComponentName = 'sl-line';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);

  const styleObj = computed(() => {
    const { direction, lineStyle, length } = _props;
    const res: CSSProperties = { borderStyle: lineStyle, boxSizing: 'border-box' };
    const xStyle = {
      width: length,
      height: 0,
      borderBottomWidth: '1px',
    };
    const yStyle = {
      width: 0,
      height: length,
      borderLeftWidth: '1px',
    };
    Object.assign(res, direction === 'x' ? xStyle : yStyle);
    return res;
  });
</script>
