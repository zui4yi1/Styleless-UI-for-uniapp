import { buildProps } from '@/utils/element-plus/props';
import type { PropType } from 'vue';

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
    type: Array as PropType<{ label: string; value: any }[]>,
    default: () => [],
  },
} as const);
