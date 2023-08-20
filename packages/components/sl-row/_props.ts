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
  gutter: {
    type: [String, Array],
    default: 16,
  },
  rowGutter: {
    type: [String, Array],
    default: 0,
  },
  height: {
    type: [String, Array],
    default: 88,
  },
  radius: {
    type: String as PropType<IRadius>,
    default: 'none',
  },
} as const);
