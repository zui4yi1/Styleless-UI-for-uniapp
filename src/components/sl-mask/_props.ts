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
  closeOnTab: {
    type: Boolean,
    default: true,
  },
  mode: {
    type: String as PropType<'left' | 'bottom' | 'right' | 'top' | 'center'>,
    default: 'bottom',
  },
} as const);
