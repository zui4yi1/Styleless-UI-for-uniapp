<template>
  <view :class="[clz.root(), className, `border-${color}`]" class="" :style="styleObj"></view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-line';
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
  import { useLine } from './useLine';

  const _props = defineProps(props);
  const styleObj = useLine(_props);
</script>
