<template>
  <sl-popup v-model:open="isOpen" :title="title" @confirm="handleConfirm">
    <view :class="[clz.root(), className]">
      <picker-view
        v-if="valsInx.length"
        :value="valsInx"
        style="height: 520rpx"
        :indicator-class="indicatorClz"
        :indicator-style="indicatorStyle"
        class="color-content font-content"
        @change="handleChange"
      >
        <picker-view-column v-for="count in columns" :key="'column_' + count" class="text-center">
          <view
            :style="{ height: pickViewHeight, 'line-height': pickViewHeight }"
            v-for="(item, inx) in getColomnList(valsInx.slice(0, count))"
            :key="'item_' + count + '_' + inx"
          >
            {{ item[dataMap.label] }}
          </view>
        </picker-view-column>
      </picker-view>
    </view>
  </sl-popup>
</template>

<script lang="ts">
  import { cloneDeep } from 'lodash-es';
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-picker';
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
  import { computed, ref, watchEffect } from 'vue';
  import { props } from './_props';
  import * as _tools from './_tools';

  const _props = defineProps(props);
  const _emits = defineEmits(['update:open', 'update:value', 'change']);

  /** 值的索引 */
  const valsInx = ref<number[]>([]);

  const isOpen = computed({
    get() {
      return _props.open;
    },
    set(value) {
      _emits('update:open', value);
    },
  });

  const handleChange = (e: any) => {
    const arr = e.detail.value;
    const defenceInx = valsInx.value.findIndex((val, inx) => val !== arr[inx]);
    if (defenceInx === valsInx.value.length) return;
    valsInx.value = [
      ...valsInx.value.slice(0, defenceInx),
      arr[defenceInx],
      ...new Array(arr.length - defenceInx - 1).fill(0),
    ];
  };

  /** 获取列 */
  const getColomnList = (inxs: number[]) => {
    const { list, dataMap, hasAll } = _props;
    const res = _tools.getColomnList(cloneDeep(list), inxs, { dataMap, hasAll });

    return res;
  };

  watchEffect(() => {
    // 每次打开都须重新计算
    if (isOpen.value && _props.list.length) {
      const { list, value, columns, hasAll, dataMap } = _props;
      const res = _tools.getInitValInxs(list, value, { columns, hasAll, dataMap });
      valsInx.value = res;
    }
  });

  const getLabels = (type: 'index' | 'value' = 'index') => {
    const { list, value, columns, hasAll, dataMap } = _props;
    const inxs =
      type === 'index'
        ? valsInx.value
        : _tools.getInitValInxs(list, value, { columns, hasAll, dataMap });
    const res = _tools.getInxsLabel(list, inxs, { hasAll, dataMap });
    return res;
  };

  const handleConfirm = () => {
    const { list, hasAll, dataMap } = _props;
    const res = _tools.getInxsVal(list, valsInx.value.slice(0), { hasAll, dataMap });
    _emits('update:value', res);
    _emits('change', res);
  };

  defineExpose({ getLabels });
</script>
