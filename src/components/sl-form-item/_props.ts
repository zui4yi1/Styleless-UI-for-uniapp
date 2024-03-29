import type { PropType } from 'vue';
import type { IValidtorRule } from './_validate';

/** 详见sl-form的scheme */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  type: {
    type: String,
    default: 'sl-input',
  },
  isCustom: {
    type: Boolean,
    default: false,
  },
  prop: {
    type: String,
    default: '',
  },
  itemAlign: {
    type: String,
    default: 'right',
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
  labelSpan: {
    type: Number,
    default: 6,
  },
  emptyText: {
    type: String,
    default: '',
  },
  errorClz: {
    type: String,
    default: '',
  },
  itemClz: {
    type: String,
    default: '',
  },
  labelClz: {
    type: String,
    default: 'ptb-xxs',
  },
  compOps: {
    type: Object,
    default: () => ({}),
  },
};
