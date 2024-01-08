import type { PropType } from 'vue';
import type { IValidtorRule } from '../sl-form-item/_validate';

export interface IFormItem {
  type: string;
  prop: string;
  label?: string | number;
  readOnly?: boolean;
  isRemove?: boolean;
  isHidden?: boolean;
  isCustom?: boolean;
  xLayoutClz?: string;
  labelSpan?: number;
  labelClz?: string;
  emptyText?: string;
  layout?: 'x' | 'y';
  itemAlign?: 'left' | 'right';
  rules?: IValidtorRule[];
  compOps?: any;
}

export interface IFormGroup {
  groupName?: string;
  list: IFormItem[];
}

/**
 * @summary
 * @description
 * @param lableSpan label的宽度, 栅格模式
 * @param detail 详情, 可用作表单的初始值
 * @param dicts 字典集, {propName:[{label,value}]}的形式
 * @param mode form或detail模式
 * @param itemClz 透传到sl-form-item的类名
 * @param useEffect 表单变化, 后续改为onFormChange, 可用于处理联动
 * @param scheme 表单json配置, 二维数据。详见下面
 * @param errorClz 验证错误时的样式
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  /** 透传到sl-form-item的类名 */
  itemClz: {
    type: String,
    default: '',
  },
  lableSpan: {
    type: Number,
    default: 6,
  },

  detail: {
    type: Object,
    default: () => {},
  },
  errorClz: {
    type: String,
    default: '',
  },
  dicts: {
    type: Object,
    default: () => {},
  },
  mode: {
    type: String as PropType<'form' | 'detail'>,
    default: 'form',
  },
  scheme: {
    type: Array as PropType<IFormGroup[]>,
    default: () => [],
  },
  useEffect: {
    type: Function,
    default: () => {},
  },
};
