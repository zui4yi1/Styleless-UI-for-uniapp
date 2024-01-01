<template>
  <view :class="[clz.root(), className]" class="border-none" @click="$emit('click')">
    <view
      :class="[
        clz.body(),
        bodyClz,
        borderClz,
        `bg-${bg}`,
        `radius-${radius}`,
        {
          'shadow-default': hasShadow,
        },
      ]"
    >
      <slot />
    </view>
  </view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-card';
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
