<template>
  <view
    :class="[
      clz.root(),
      className,
      `h-${height}`,
      `w-${height + widthOffset}`,
      value ? `border-transparent` : 'border-line-default',
      value ? `bg-primary` : 'bg-white',
      { 'opacity-disabled': disabled },
    ]"
    class="relative bg-primary border shadow-default"
    :style="{
      borderRadius: `${height / 2}rpx`,
    }"
    @tap="handleToggle"
  >
    <view
      :class="[
        clz.body(),
        `rect-${height - 4}`,
        value ? `border-transparent` : 'border-line-default',
      ]"
      class="absolute radius-round bg-white border shadow-default"
      :style="{
        left: `${value ? widthOffset : 0}rpx`,
        transition: 'left 0.2s',
      }"
    ></view>
  </view>
  <view>{{ value }}</view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-switch';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  const _emits = defineEmits(['update:value', 'change']);

  const handleToggle = () => {
    if (_props.disabled) return;
    const cur = !_props.value;
    _emits('update:value', cur);
    _emits('change', cur);
  };
</script>
