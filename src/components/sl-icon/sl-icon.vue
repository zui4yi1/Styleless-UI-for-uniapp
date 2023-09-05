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
  import { defineComponent } from 'vue';
  import { useClassName } from '../../hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-icon';
  const clz = useClassName(ComponentName);

  // defineProps(props);
  // defineEmits(['click']);

  export default defineComponent({
    name: ComponentName,
    options: {
      virtualHost: true,
    },
    props,
    emits: ['click'],
    setup() {
      return { clz };
    },
  });
</script>
