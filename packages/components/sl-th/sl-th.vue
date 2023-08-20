<template>
  <sl-tr :className="[thClz, className, tableProps.headClz || '', headClz]">
    <slot />
  </sl-tr>
</template>
<script lang="ts">
  import { defineComponent, inject } from 'vue';
  import type { ITableProps } from '../sl-table/_props';
  import { props } from './_props';

  const ComponentName = 'sl-th';

  export default defineComponent({
    name: ComponentName,
    props,
    options: {
      virtualHost: true,
    },
    setup() {
      const tableProps = inject('tableProps', {} as ITableProps);
      return { tableProps };
    },
  });
</script>
