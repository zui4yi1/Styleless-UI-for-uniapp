<template>
  <view
    :class="[clz.root(), className, trClz || tableProps.trClz]"
    class="display-row border-box h100"
  >
    <slot />
  </view>
</template>
<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-tr';
  const clz = useClassName(ComponentName);
  export default defineComponent({
    name: ComponentName,
    options: {
      virtualHost: true,
      inheritAttrs: false,
    },
  });
</script>

<script setup lang="ts">
  import { defineComponent, inject } from 'vue';
  import type { ITableProps } from '../sl-table/_props';
  import { props } from './_props';

  defineProps(props);
  const tableProps = inject('tableProps', {} as ITableProps);
</script>
