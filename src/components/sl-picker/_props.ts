import type { PropType } from 'vue';

const pxHeight = uni.upx2px(68);
export interface IDataMap {
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
  /** 是否给每列添加空值选项 */
  hasAll: {
    type: Boolean,
    default: false,
  },
  value: {
    type: [Array, String] as PropType<string[]>,
    default: () => [],
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
  pickViewHeight: {
    type: String,
    default: `${pxHeight}px`,
  },
  indicatorClz: {
    type: String,
    default: 'flex-center border-line-light border-top border-bottom',
  },
  indicatorStyle: {
    type: String,
    default: `height: ${pxHeight}px`,
  },
};
