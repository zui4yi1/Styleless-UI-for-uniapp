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
