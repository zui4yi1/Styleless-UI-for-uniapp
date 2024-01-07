<template>
  <sl-popup v-model:open="isOpen" :title="title" @confirm="handleConfirm">
    <view :class="[clz.root(), className]">
      <picker-view
        v-if="isOpen"
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
            v-for="(item, inx) in getColomnList(count, valsInx.slice(0, count))"
            :key="'item_' + count + '_' + inx"
          >
            {{ item.label }}
          </view>
        </picker-view-column>
      </picker-view>
    </view>
  </sl-popup>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  import type { Dayjs } from '../../utils/date';
  const ComponentName = 'sl-date-picker';
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
  import { computed, onBeforeMount, ref, watchEffect } from 'vue';
  import { props } from './_props';
  import * as _tools from './_tools';

  type IDict = {
    label: string;
    value: any;
    children?: IDict[];
  }[];

  const _props = defineProps(props);
  const _emits = defineEmits(['update:open', 'update:value', 'change']);
  const range = ref<Dayjs[]>([]);

  const columns = ref(0);
  const columnDicts = ref([] as IDict[]);

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
  const getColomnList = (colInx: number, valsInx: number[]) => {
    let res = [] as IDict;
    if (!valsInx.length) return res;
    const type = _tools.getColumnType(_props.mode, colInx);
    switch (type) {
      case 'year':
        res = _tools.genYears(range.value);
        break;
      case 'month':
        // eslint-disable-next-line no-case-declarations
        const monthYear = columnDicts.value[0][valsInx[0]];
        res = _tools.genMonths(range.value, Number(monthYear.value));
        break;
      case 'date':
        // eslint-disable-next-line no-case-declarations
        const dateYear = columnDicts.value[0][valsInx[0]];
        // eslint-disable-next-line no-case-declarations
        const dateMonth = columnDicts.value[1][valsInx[1]];
        res = _tools.genDates(range.value, [Number(dateYear.value), Number(dateMonth.value)]);
        break;
      default:
        break;
    }
    columnDicts.value[colInx - 1] = res;
    return res;
  };

  const handleConfirm = () => {
    const res = _tools.getRtnVal(columns.value, columnDicts.value, valsInx.value, _props.format);
    _emits('update:value', res);
    _emits('change', res);
  };

  watchEffect(() => {
    // 每次打开都须重新计算
    if (isOpen.value && range.value.length) {
      const initDate = _tools.getInitVal(range.value, _props.value, _props.field);
      valsInx.value = _tools.getInitValInxs(range.value, initDate, _props.field);
    }
  });

  onBeforeMount(() => {
    // 先实现日期的, time和datetime后面再说
    columns.value = (_props.field === 'date' && 3) || (_props.field === 'month' && 2) || 1;
    const { startIsToday, endIsToday } = _props;
    range.value = _tools.initDateRange(_props.start, _props.end, _props.format, {
      startIsToday,
      endIsToday,
    });
  });
</script>
