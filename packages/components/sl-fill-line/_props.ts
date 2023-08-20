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
  height: {
    type: [Number, String],
    default: 0,
  },
  size: {
    type: String as PropType<IHeight>,
    default: '',
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'transparent',
  },
  isBottom: {
    type: Boolean,
    default: false,
  },
} as const);
