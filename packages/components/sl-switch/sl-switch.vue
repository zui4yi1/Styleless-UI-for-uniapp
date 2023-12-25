<template>
  <view
    :class="[
      clz.root(),
      className,
      value ? `border-transparent` : 'border-line-default',
      value ? `bg-primary` : 'bg-white',
      { 'opacity-disabled': disabled },
    ]"
    class="relative bg-primary border shadow-default border-box"
    :style="{
      height: `${calcHeight}px`,
      width: `${calcHeight + calcWidth}px`,

      borderRadius: `${calcHeight / 2}px`,
    }"
    @tap="handleToggle"
  >
    <view
      :class="[clz.body(), bodyClz, value ? `border-transparent` : 'border-line-default']"
      class="absolute radius-round bg-white border shadow-default border-box"
      :style="{
        height: `${calcHeight - 2}px`,
        width: `${calcHeight - 2}px`,
        left: `${value ? calcWidth : 0}px`,
        transition: 'left 0.2s',
      }"
    ></view>
  </view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-switch';
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
  import { computed } from 'vue';
  import { props } from './_props';

  const _props = defineProps(props);
  const _emits = defineEmits(['update:value', 'change']);

  const calcHeight = computed(() => {
    return Math.floor(uni.upx2px(_props.height));
  });
  const calcWidth = computed(() => {
    return Math.floor(uni.upx2px(_props.width));
  });

  const handleToggle = () => {
    if (_props.disabled) return;
    const cur = !_props.value;
    _emits('update:value', cur);
    _emits('change', cur);
  };
</script>
