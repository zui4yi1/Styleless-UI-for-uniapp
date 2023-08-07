<template>
  <view
    :class="[clz.root(), className]"
    class="flex-inline lh-0"
    :style="styleProps"
    :hover-start-time="80"
    :hover-stay-time="200"
    :hover-class="hoverClass"
    @click="$emit('click', index)"
  >
    <view
      :class="[clz.append('holder'), iconLib, `${iconLib}-${name}`, `color-${color}`]"
      class="flex-center"
      :style="{ fontSize: `${size}rpx` }"
    ></view>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { defaultProps, type IProps } from './_props';

  const ComponentName = 'sl-icon';

  const clz = useClassName(ComponentName);

  defineOptions({ name: ComponentName });

  withDefaults(defineProps<IProps>(), defaultProps);

  defineEmits(['click']);
</script>
