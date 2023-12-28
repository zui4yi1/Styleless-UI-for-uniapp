import type { PropType } from 'vue';

interface IDataMap {
  label: string;
  value: string;
  children?: string[];
}
export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  value: {
    type: [Array, String] as PropType<string[] | ''>,
    default: '',
  },
  /** value是代表索引,或值, 默认值, index的未实现(毫无意义)  */
  matchType: {
    type: String as PropType<'index' | 'value'>,
    default: 'value',
  },
  columns: {
    type: Number,
    default: 3,
  },
  dataMap: {
    type: Object as PropType<IDataMap>,
    default: () => ({
      label: 'label',
      value: 'value',
      children: 'children',
    }),
  },
  list: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
};
