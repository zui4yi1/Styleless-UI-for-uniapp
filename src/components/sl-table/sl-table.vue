<template>
  <view
    :class="[clz.root(), className]"
    class="display-table w100 h100 border-box"
    :style="
      cellspacing === ''
        ? {
            borderCollapse: 'collapse',
          }
        : {
            borderCollapse: 'separate',
            borderSpacing: cellspacing,
          }
    "
  >
    <template v-if="!custom">
      <sl-th>
        <sl-td
          v-for="(item, inx) in columns"
          :key="'th_' + inx"
          :width="item.width"
          :tdClz="tableProps.thClz"
        >
          {{ item.name }}
        </sl-td>
      </sl-th>
      <sl-tr v-for="(rcd, inx) in list" :key="'tr_' + inx">
        <sl-td v-for="(item, tdInx) in columns" :key="'td_' + inx + '_' + tdInx">
          {{ rcd[item.value] }}
        </sl-td>
      </sl-tr>
    </template>
    <slot v-else />
  </view>
</template>
<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-table';
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
  import { computed, provide } from 'vue';
  import { props, type ITableProps } from './_props';

  const _props = defineProps(props);
  defineEmits(['click']);

  const tableProps = computed<ITableProps>(() => {
    return Object.assign(
      {
        thClz: 'color-white height-cell-default flex-center',
        trClz: '',
        tdClz: 'color-content flex-center',
      },
      _props.tableProps,
    );
  });
  provide('tableProps', tableProps.value);
</script>
