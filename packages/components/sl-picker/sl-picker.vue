<template>
  <sl-popup v-model:open="isOpen" :title="title" @confirm="handleConfirm">
    <view :class="[clz.root(), className]">
      <picker-view
        :value="valsInx"
        style="height: 520rpx"
        @change="handleChange"
        indicator-class="flex-center border-line-light border-top border-bottom"
        mask-class=""
        class="color-content font-content"
      >
        <picker-view-column v-for="count in columns" :key="'column_' + count" class="text-center">
          <view
            class="center"
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

  const _findInxVals = (list: any[], inxs: number[], res: any[]): any[] => {
    if (inxs.length === 0) return [];
    const tmpInx = inxs.shift() || 0;
    res.push(list[tmpInx][_props.dataMap.value]);
    if (inxs.length === 0) {
      return res;
    }
    return _findInxVals(list[tmpInx]?.children || [], inxs, res);
  };
  /** 获取索引在各列对应的值 */
  const getInxVals = () => {
    const res = _findInxVals(_props.list, valsInx.value.slice(0), []);
    return res;
  };
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

  const _findValsInx = (list: any[], vals: string[], res: number[]): any[] => {
    if (vals.length === 0) return [];
    const tmpVal = vals.shift();
    const inx = list.findIndex((t) => t.value === tmpVal);
    res.push(inx);
    if (vals.length === 0) {
      return res;
    }
    return _findValsInx(list[inx]?.children || [], vals, res);
  };
  /** 获取值在各列对应的索引 */
  const getValsInx = (vals: string[]) => {
    const res = _findValsInx(_props.list, vals.slice(0), []);
    return res;
  };

  const _findValsName = (list: any[], vals: string[], res: number[]): any[] => {
    if (vals.length === 0) return [];
    const tmpVal = vals.shift();
    const inx = list.findIndex((t) => t.value === tmpVal);
    res.push(list[inx][_props.dataMap.label]);
    if (vals.length === 0) {
      return res;
    }
    return _findValsName(list[inx]?.children || [], vals, res);
  };
  /** 获取值在各列对应的标签名 */
  const getValsName = () => {
    if (_props.value instanceof Array) {
      const res = _findValsName(_props.list, _props.value.slice(0), []);

      return res;
    } else {
      return [];
    }
  };

  const _findColumn = (list: any[], inxs: number[]): any[] => {
    if (inxs.length === 1) return list;
    const tmpInx = inxs.shift() || 0;
    return _findColumn(list[tmpInx]?.children || [], inxs);
  };
  /** 获取列 */
  const getColomnList = (inxs: number[]) => {
    const res = _findColumn(_props.list, inxs.slice(0));
    return res;
  };

  /** 当list有数据后, 初始化默认选中。只执行一次 */
  const watchOnce = watchEffect(() => {
    if (_props.list.length) {
      if (_props.value instanceof Array) {
        valsInx.value = getValsInx(_props.value);
      } else {
        valsInx.value = new Array(_props.columns).fill(0);
      }
      setTimeout(() => {
        watchOnce();
      }, 80);
    }
  });

  const handleConfirm = () => {
    const res = getInxVals();
    _emits('update:value', res);
    _emits('change', res);
  };

  defineExpose({ getValsName });
</script>
