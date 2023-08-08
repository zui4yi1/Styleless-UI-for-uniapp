import { buildProps } from '@/utils/element-plus/props';

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
} as const);
