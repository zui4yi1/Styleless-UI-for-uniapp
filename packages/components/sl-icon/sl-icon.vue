<template>
  <view
    :class="[clz.root(), className]"
    class="flex-inline lh-0 border-box"
    :style="styleProps"
    :hover-start-time="10"
    :hover-stay-time="10"
    :hover-class="hoverClass"
    @click="$emit('click', index)"
  >
    <view
      :class="[clz.body(), iconLib, `${iconLib}-${name}`, `color-${color}`]"
      class="flex-center"
      :style="{ fontSize: `${size}rpx` }"
    ></view>
  </view>
</template>
<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-icon';
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
  import { props } from './_props';

  defineProps(props);
  defineEmits(['click']);
</script>
