<template>
  <view
    :class="[ComponentName, className]"
    class="flex-inline lh-0"
    :style="styleProps"
    :hover-start-time="80"
    :hover-stay-time="200"
    :hover-class="hoverClass"
    @click="$emit('onClick', index)"
  >
    <view
      :class="[ComponentNameSuffix('holder'), iconLib, `${iconLib}-${name}`, `color-${color}`]"
      class="flex-center"
      :style="{ fontSize: `${size}rpx` }"
    ></view>
  </view>
</template>
<script setup lang="ts">
  import type { CSSProperties } from 'vue';

  // ComponentName and ComponentNameSuffix
  const ComponentName = 'sl-icon';
  const ComponentNameSuffix = (suffixName: string) => [ComponentName, suffixName].join('-');

  // define props
  interface IProps {
    className?: string | string[];
    iconLib?: string;
    name: string;
    color?: IColor;
    size?: string | number;
    index?: string | number;
    hoverClass?: string;
    styleProps?: CSSProperties;
  }
  const props = withDefaults(defineProps<IProps>(), {
    className: '',
    iconLib: 'common',
    name: 'icon_add',
    color: 'placeholder',
    hoverClass: '',
    size: 36,
    index: 0,
    styleProps: () => ({}),
  });

  // define emits
  const emites = defineEmits(['onClick']);
</script>
