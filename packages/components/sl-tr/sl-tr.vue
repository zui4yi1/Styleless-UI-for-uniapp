<template>
  <view
    :class="[clz.root(), className, trClz || tableProps.trClz]"
    class="display-row border-box h100"
  >
    <slot />
  </view>
</template>
<script lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { defineComponent, inject } from 'vue';
  import type { ITableProps } from '../sl-table/_props';
  import { props } from './_props';

  const ComponentName = 'sl-tr';
  const clz = useClassName(ComponentName);

  export default defineComponent({
    name: ComponentName,
    props,
    options: {
      virtualHost: true,
    },
    setup() {
      const tableProps = inject('tableProps', {} as ITableProps);
      return { clz, tableProps };
    },
  });
</script>
