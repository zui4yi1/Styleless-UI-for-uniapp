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

// export type IEffects = (prop: string, value: any):void => {};

export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  itemClz: {
    type: String,
    default: '',
  },
  lableSpan: {
    type: Number,
    default: 6,
  },
  itemAlign: {
    type: String,
    default: 'right',
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
