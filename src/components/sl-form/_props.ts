import type { PropType } from 'vue';
import type { IValidtorRule } from '../sl-form-item/_validate';

export interface IFormItem {
  type: string;
  prop: string;
  label: string;
  readOnly?: boolean;
  /**
   * @description 是否移除节点. 注意是真实移除dom节点且相应修改的数据也会移除, 若先true再false, 则值为初始值
   */
  isRemove?: boolean;
  /**
   * @description 是否隐藏节点, 不会删除节点及数据
   */
  isHidden?: boolean;
  isCustom?: boolean;
  xLayoutClz?: string;
  labelSpan?: number;
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
 * @param xLayoutClz 水平布局时的布局类, 默认flex, 可配置为'flex,flex-top,flex-bottom等'
 * @param mode form或detail模式
 * @param itemClz 透传到sl-form-item的类名
 * @param useEffect 表单变化, 后续改为onFormChange, 可用于处理联动
 * @param scheme 表单json配置, 二维数据。详见下面
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
  /** 水平布局时的布局类 */
  xLayoutClz: {
    type: String,
    default: 'flex',
  },
  mode: {
    type: String as PropType<'form' | 'detail'>,
    default: 'form',
  },

  /**
   * @description 二维数组, 这是为了支持多块的表单
   */
  scheme: {
    type: Array as PropType<IFormGroup[]>,
    default: () => [],
  },
  useEffect: {
    type: Function,
    default: () => {},
  },
};
