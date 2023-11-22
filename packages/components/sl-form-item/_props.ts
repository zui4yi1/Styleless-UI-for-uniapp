import type { PropType } from 'vue';
import type { IValidtorRule } from './_validate';

export type IFieldType = 'sl-input' | 'sl-checkbox' | 'sl-radio' | 'sl-switch' | 'sl-select';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  type: {
    type: String as PropType<IFieldType>,
    default: 'sl-input',
  },
  prop: {
    type: String,
    default: '',
  },
  layout: {
    type: String as PropType<'x' | 'y'>,
    default: 'x',
  },
  /** 水平布局时的布局类 */
  xLayoutClz: {
    type: String,
    default: 'flex',
  },
  label: {
    type: String,
    default: '',
  },

  value: {
    type: [String, Array, Boolean, Number],
    default: undefined,
  },
  /**
   * 组件初始值, 用于不明确初始值的设置, form组件会根据type自动初始值, 但有些也无法确定, 为避免报错可设置
   */
  compInitValue: {
    type: [String, Array, Boolean, Number],
    default: undefined,
  },
  list: {
    type: [Array, Object] as PropType<any[] | { value: any[] }>,
    default: () => [],
  },
  rules: {
    type: Array as PropType<IValidtorRule[]>,
    default: () => [],
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
  isHidden: {
    type: Boolean,
    default: false,
  },
  lableSpan: {
    type: Number,
    default: 6,
  },
  emptyText: {
    type: String,
    default: '/',
  },
  compOps: {
    type: Object,
    default: () => ({}),
  },
};
