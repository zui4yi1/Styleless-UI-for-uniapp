<template>
  <view
    :class="[clz.root(), className]"
    class="display-cell border-box h100"
    :style="{ width: width || 'auto', 'vertical-align': 'middle' }"
  >
    <view :class="[`flex-${align}`, tdClz || tableProps.tdClz]" class="h100">
      <slot />
    </view>
  </view>
</template>
<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-td';
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
  import { inject } from 'vue';
  import type { ITableProps } from '../sl-table/_props';
  import { props } from './_props';

  defineProps(props);
  const tableProps = inject('tableProps', {} as ITableProps);
</script>
