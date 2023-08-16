import { buildProps } from '@/utils/element-plus/props';
import type { PropType } from 'vue';

export interface ITableColumn {
  name: string;
  value?: string;
}
export interface ITableList {
  [k: string]: any;
}

export interface ITableProps {
  headClz: string;
  trClz: string;
  tdClz: string;
}

export const props = buildProps({
  /**
   * @description inject global classNames to the component root
   */
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
} as const);
