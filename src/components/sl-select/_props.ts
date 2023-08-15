import { buildProps } from '@/utils/element-plus/props';
import type { PropType } from 'vue';
export interface ICompSelect {
  label: string;
  value: any;
  disabled?: boolean;
}

export const props = buildProps({
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
} as const);
