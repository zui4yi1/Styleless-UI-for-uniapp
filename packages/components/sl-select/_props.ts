import type { PropType } from 'vue';
export interface ICompSelect {
  label: string;
  value: any;
  disabled?: boolean;
}

/**
 * @summary 下拉选择组件
 * @description 底部弹窗形式
 * @param open 是否打开弹窗, 须使用v-model:open双向绑定方式
 * @param title 弹窗标题
 * @param value 默认'', 使用时必须使用v-model:value的形式
 * @param list 选项列表, label, value形式, 暂无dataMap字段映射
 * @param multiple 是否多选, 默认false
 */
export const props = {
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
    default: '请选择',
  },
  value: {
    type: [String, Number, Boolean, Array],
    default: '',
  },
  list: {
    type: Array as PropType<ICompSelect[]>,
    default: () => [],
  },
  multiple: {
    type: Boolean,
    default: false,
  },
};
