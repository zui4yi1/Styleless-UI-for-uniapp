import type { PropType } from 'vue';

export interface ITableColumn {
  name: string;
  value: string;
  width?: string;
}
export interface ITableList {
  [k: string]: any;
}

export interface ITableProps {
  thClz: string;
  trClz: string;
  tdClz: string;
}

/**
 * @summary
 * @description
 * @param cellspacing cell间距, 默认''
 * @param custom 是否自定义, 默认false, 即走json配置模式。为true时，需手动使用sl-th,sl-tr,sl-td这些标签
 * @param tableProps custom为false时可用, table的样式类。可分别配置{thClz,trClz,tdClz}的类名
 * @param columns custom为false时可用列, 可分别定义{name,value,width}
 * @param list custom为false时可用, 具体属性与columns对应
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  custom: {
    type: Boolean,
    default: false,
  },
  cellspacing: {
    type: String,
    default: '',
  },
  columns: {
    type: Array as PropType<ITableColumn[]>,
    default: () => [],
  },
  list: {
    type: Array as PropType<ITableList[]>,
    default: () => [],
  },
  tableProps: {
    type: Object as PropType<ITableProps>,
    default: () => ({}),
  },
};
