<template>
  <view :class="[clz.root(), className]">
    <view
      :class="[clz.body()]"
      class="float-clear"
      :style="{
        marginRight: `-${gutter}rpx`,
        marginTop: `-${rowGutter || gutter}rpx`,
      }"
    >
      <slot />
    </view>
  </view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-row';
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
  import { provide } from 'vue';
  import { props } from './_props';

  const _props = defineProps(props);

  provide('gutter', _props.gutter);
  provide('rowGutter', _props.rowGutter || _props.gutter);
  provide('height', _props.height);
  provide('radius', _props.radius);
</script>
