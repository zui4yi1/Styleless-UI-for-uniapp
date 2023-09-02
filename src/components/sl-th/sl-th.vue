<template>
  <view :class="[clz.root(), className, thClz]" class="display-row border-box h100">
    <slot />
  </view>
</template>
<script lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { defineComponent } from 'vue';
  import { props } from './_props';

  const ComponentName = 'sl-th';
  const clz = useClassName(ComponentName);

  export default defineComponent({
    name: ComponentName,
    props,
    options: {
      virtualHost: true,
    },
    setup() {
      return { clz };
    },
  });
</script>
