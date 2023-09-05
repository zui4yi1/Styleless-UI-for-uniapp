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
  import { defineComponent, inject } from 'vue';
  import { useClassName } from '../../hooks/use-class-name';
  import type { ITableProps } from '../sl-table/_props';
  import { props } from './_props';

  const ComponentName = 'sl-td';
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

  // const ComponentName = 'sl-td';
  // const clz = useClassName(ComponentName);

  // defineProps(props);
  // // defineEmits(['click']);

  // defineExpose({
  //   name: ComponentName,
  //   virtualHost: true,
  // });
</script>
